# Google Gemini AI Chatbot Setup Guide

This guide will help you set up the Google Gemini AI chatbot for your Next.js website.

## 📋 Prerequisites

- Node.js >= 20
- Next.js 14+ with App Router
- TypeScript
- Google Gemini API key (free tier available)

## 🚀 Quick Setup

### 1. Install Dependencies

The required package `@google/generative-ai` has been added to your `package.json`. Install it by running:

```bash
npm install
```

### 2. Get Google Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key (starts with `AIza...`)

### 3. Environment Configuration

Add your Google Gemini API key to `.env.local`:

```bash
GEMINI_API_KEY=your_api_key_here
```

### 4. Run the Application

Start your development server:

```bash
npm run dev
```

Visit `http://localhost:3000` and look for the chat bubble icon in the bottom-right corner.

## 🔧 Configuration

### Customizing Website Context

Edit the `WEBSITE_CONTEXT` constant in `app/api/chat/route.ts` to match your actual company information:

```typescript
const WEBSITE_CONTEXT = `
Company: Your Company Name
Product: Your Product Description
Pricing: Your Pricing Information
Support: support@yourcompany.com
About: Your company description...
`;
```

### Adjusting Security Settings

The chatbot includes security features that can be customized in `app/api/chat/route.ts`:

- **Message length limit**: Currently set to 500 characters
- **Blocked patterns**: Email addresses, phone numbers, and passwords
- **Topic restrictions**: Only allows questions about products, pricing, contact, and company info

### Styling Customization

The chatbot UI can be customized by editing `components/Chatbot.tsx`. Key classes used:

- `fixed bottom-6 right-6`: Position of the chat widget
- `w-96 h-[500px]`: Chat window dimensions
- `bg-blue-600`: Primary brand color
- Tailwind CSS classes for responsive design

## 🛡️ Security Features

The chatbot includes several security measures:

1. **API Key Protection**: Never exposed to client-side code
2. **Input Validation**:
   - Non-empty messages required
   - Maximum 500 characters
   - Blocks emails, phone numbers, and passwords
3. **Topic Restrictions**: Only answers questions about allowed topics
4. **No Data Storage**: Messages are not stored or logged
5. **Error Handling**: Graceful error responses without exposing internal details

## 🧪 Testing

### Manual Testing

1. Open the chatbot by clicking the chat bubble
2. Try these sample questions:

   - "What products do you offer?"
   - "What is your pricing?"
   - "How can I contact support?"
   - "Tell me about your company"

3. Test security features:
   - Try sending an email address
   - Try sending a phone number
   - Ask about topics outside allowed areas

### Error Testing

To test error handling:

1. Set an invalid API key in `.env.local`
2. Try sending a message (should show configuration error)
3. Remove the API key entirely
4. Try sending a message (should show service unavailable)

## 📁 File Structure

```
your-project/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # Chat API endpoint
│   ├── layout.tsx                # Updated with Chatbot component
│   └── page.tsx
├── components/
│   └── Chatbot.tsx               # Chatbot UI component
├── .env.local                    # Environment variables
└── package.json                  # Updated with @google/generative-ai
```

## 🚨 Troubleshooting

### Common Issues

**1. "AI service configuration error"**

- Check that `GEMINI_API_KEY` is set in `.env.local`
- Verify the API key is valid
- Ensure you've restarted the development server

**2. "Cannot find module '@google/generative-ai'"**

- Run `npm install` to install dependencies
- Check that the package is listed in `package.json`

**3. TypeScript errors**

- Ensure you're using Node.js >= 20
- Check that TypeScript configuration is correct

**4. Chatbot not appearing**

- Verify the Chatbot component is imported in `layout.tsx`
- Check browser console for JavaScript errors
- Ensure Tailwind CSS is properly configured

### API Limits

Google Gemini free tier includes:

- 15 requests per minute
- 1,500 requests per day
- 1 million tokens per day

Monitor your usage at [Google AI Studio](https://makersuite.google.com/app/apikey)

## 📝 Customization Options

### Adding More Allowed Topics

Edit the `SYSTEM_INSTRUCTION` in `app/api/chat/route.ts`:

```typescript
const SYSTEM_INSTRUCTION = `You are a website assistant for SmatAccess. Answer strictly using the provided website information.

Allowed topics:
- Product features and capabilities
- Pricing and cost information
- Contact information and support
- Company information and services
- Industries served
- Installation and maintenance
`;
```

### Changing the Refusal Message

Modify the SYSTEM_INSTRUCTION to change the response when users ask about unauthorized topics:

```typescript
If asked about topics outside these areas, respond with: "Your custom refusal message here."
```

### Custom Styling

The chatbot uses Tailwind CSS classes. You can customize:

- Colors (currently blue theme)
- Dimensions (width/height)
- Positioning
- Animations and transitions

## 🔒 Production Deployment

When deploying to production:

1. **Environment Variables**: Set `GEMINI_API_KEY` in your hosting platform's environment variables
2. **API Key Security**: Never expose the API key in client-side code
3. **Rate Limiting**: Consider implementing rate limiting for the API endpoint
4. **Monitoring**: Monitor API usage and errors
5. **Caching**: Consider implementing response caching for common questions

## 📞 Support

For issues with:

- **Google Gemini API**: Check [Google AI documentation](https://ai.google.dev/docs)
- **Next.js**: Refer to [Next.js documentation](https://nextjs.org/docs)
- **This implementation**: Review the code comments and this guide

Your Google Gemini AI chatbot is now ready to use! 🎉
