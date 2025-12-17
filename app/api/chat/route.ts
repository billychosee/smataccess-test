import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Google Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Hardcoded website context
const WEBSITE_CONTEXT = `
Company: SmatAccess
Product: Advanced biometric access control systems and smart security solutions
Pricing:
  - Residential: $5/month - Cluster Homes, Residential Complexes, Apartment Buildings
  - Business Standard: $70/month - Corporate Offices, SMEs, Single-Site Facilities
  - Enterprise: $500-1200/month - Mining Operations, Banks, Manufacturing, Multi-Site Corporations
Add-ons: ANPR ($50/month), AI Facial Recognition ($50/month), Biometrics ($20/month), WhatsApp Bot ($2/user/month)
Support: support@smataccess.com or call +1-XXX-XXX-XXXX
About: SmatAccess provides cutting-edge biometric access control solutions for businesses and organizations of all sizes. Our systems include fingerprint scanners, RFID readers, facial recognition, and mobile access solutions.
Services: Installation, maintenance, and 24/7 technical support
Industries: Corporate offices, healthcare facilities, educational institutions, government buildings, and high-security facilities
Features: Multi-factor authentication, real-time monitoring, cloud-based management, mobile access, and comprehensive reporting
`;

// System instruction for Gemini
const SYSTEM_INSTRUCTION = `You are a website assistant for SmatAccess. Answer strictly using the provided website information.
If the information is not present, say you do not have that information.

Allowed topics:
- Product features and capabilities
- Pricing and cost information (Residential $5/month, Business Standard $70/month, Enterprise $500-1200/month)
- Contact information and support
- Company information and services
- Industries served
- Installation and maintenance

When users ask about pricing, provide the three main tiers with brief descriptions. If they want details, mention that cards will show the full feature breakdown.

If asked about topics outside these areas, respond with: "I can only answer questions about our product and services."

Always be helpful and professional in your responses.`;

// Security validation patterns
const SECURITY_PATTERNS = {
  email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/gi,
  phone: /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g,
  password: /\b(pass(word)?|pwd|secret|key|token)\b/gi,
};

interface ChatRequest {
  message: string;
}

// Fallback responses for common questions
const getFallbackResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();

  if (
    lowerMessage.includes("product") ||
    lowerMessage.includes("what do you offer") ||
    lowerMessage.includes("solutions")
  ) {
    return "SmatAccess offers advanced biometric access control systems including fingerprint scanners, RFID readers, facial recognition, and mobile access solutions. Our systems provide multi-factor authentication, real-time monitoring, and cloud-based management for businesses of all sizes.";
  }

  if (
    lowerMessage.includes("pricing") ||
    lowerMessage.includes("cost") ||
    lowerMessage.includes("price") ||
    lowerMessage.includes("fee") ||
    lowerMessage.includes("plan")
  ) {
    return "We have three main pricing tiers:\n\n🏠 Residential - $5/month\n   Perfect for apartment buildings and residential complexes\n\n🏢 Business Standard - $70/month  \n   Ideal for corporate offices and SMEs\n\n🏭 Enterprise - $500-1200/month\n   For mining operations, banks, and multi-site corporations\n\nWe also offer add-ons like ANPR ($50/month), AI Facial Recognition ($50/month), and WhatsApp Bot ($2/user/month). Would you like me to show you the detailed features for each plan?";
  }

  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("support") ||
    lowerMessage.includes("help") ||
    lowerMessage.includes("phone")
  ) {
    return "You can contact SmatAccess support at support@smataccess.com. We're here to help with installation, maintenance, and any questions about our access control solutions.";
  }

  if (
    lowerMessage.includes("company") ||
    lowerMessage.includes("about") ||
    lowerMessage.includes("who are you") ||
    lowerMessage.includes("smataccess")
  ) {
    return "SmatAccess provides cutting-edge biometric access control solutions for businesses and organizations across Africa. We specialize in fingerprint scanners, RFID readers, facial recognition, and mobile access solutions with 24/7 technical support.";
  }

  if (
    lowerMessage.includes("feature") ||
    lowerMessage.includes("capability") ||
    lowerMessage.includes("what can")
  ) {
    return "Our systems include multi-factor authentication, real-time monitoring, cloud-based management, mobile access, comprehensive reporting, and integration with existing security infrastructure. We serve corporate offices, healthcare facilities, educational institutions, and government buildings.";
  }

  if (
    lowerMessage.includes("install") ||
    lowerMessage.includes("setup") ||
    lowerMessage.includes("maintenance")
  ) {
    return "We provide complete installation services, ongoing maintenance, and 24/7 technical support. Our team ensures your access control system is properly configured and maintained for optimal performance.";
  }

  return "I can only answer questions about our product and services. Please ask about our biometric access control systems, pricing, contact information, or company details.";
};

export async function POST(request: NextRequest) {
  try {
    // Validate request method
    if (request.method !== "POST") {
      return NextResponse.json(
        { error: "Method not allowed" },
        { status: 405 }
      );
    }

    // Parse request body
    const body: ChatRequest = await request.json();
    const { message } = body;

    // Validate input
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message cannot be empty" },
        { status: 400 }
      );
    }

    if (message.length > 500) {
      return NextResponse.json(
        { error: "Message must be 500 characters or less" },
        { status: 400 }
      );
    }

    // Security check - reject messages containing sensitive information
    for (const [type, pattern] of Object.entries(SECURITY_PATTERNS)) {
      if (pattern.test(message)) {
        return NextResponse.json(
          { error: `Messages containing ${type}s are not allowed` },
          { status: 400 }
        );
      }
    }

    // Check if API key is configured
    if (!process.env.GEMINI_API_KEY) {
      // Use fallback response if no API key
      const reply = getFallbackResponse(message);
      return NextResponse.json({ reply });
    }

    // Validate API key format
    const apiKey = process.env.GEMINI_API_KEY.trim();
    if (!apiKey.startsWith("AIza")) {
      // Use fallback response if invalid API key
      const reply = getFallbackResponse(message);
      return NextResponse.json({ reply });
    }

    let reply = "";

    try {
      // Try the latest working model names
      const modelNames = [
        "gemini-2.0-flash-exp",
        "gemini-1.5-flash",
        "gemini-1.5-pro",
      ];
      let model;

      for (const modelName of modelNames) {
        try {
          model = genAI.getGenerativeModel({ model: modelName });

          // Prepare the full prompt with context
          const fullPrompt = `${SYSTEM_INSTRUCTION}

Website Context:
${WEBSITE_CONTEXT}

User Question: ${message}

Please provide a helpful response based on the website information above.`;

          // Generate response from Gemini
          const result = await model.generateContent(fullPrompt);
          const response = result.response;
          reply = response.text();
          break; // Success, exit loop
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (modelError) {

          if (modelName === modelNames[modelNames.length - 1]) {
            // Last model failed, use fallback
            reply = getFallbackResponse(message);
          }
          // Continue to next model
          continue;
        }
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // If all models fail, use fallback response

      reply = getFallbackResponse(message);
    }

    // Return the response
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);

    // Use fallback response for any error
    try {
      const body = await request.json();
      const { message } = body;
      const reply = getFallbackResponse(message || "");
      return NextResponse.json({ reply });
    } catch {
      const reply = getFallbackResponse("");
      return NextResponse.json({ reply });
    }
  }
}
