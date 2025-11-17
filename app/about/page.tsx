"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import {
  ArrowRightIcon,
  PhoneIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ClockIcon,
  StarIcon,
  XMarkIcon,
  EnvelopeIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function About() {
  // Team member interface
  interface TeamMember {
    name: string;
    role: string;
    description: string;
    experience: string;
    image: string;
    email?: string;
    linkedin?: string;
    skills: string[];
    funFact: string;
  }

  // Extended team data with detailed profiles
  const teamData: TeamMember[] = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      description: "Visionary leader with deep expertise in security systems and African market dynamics. Founded SmatAccess to bridge the gap between advanced technology and practical security needs across Africa.",
      experience: "15+ years in security systems",
      image: "/team-1.jpg",
      email: "john@smataccess.com",
      linkedin: "https://linkedin.com/in/johnsmith",
      skills: ["Strategic Leadership", "Security Systems", "African Markets", "Business Development"],
      funFact: "Speaks 4 African languages and has visited over 30 countries in Africa."
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Tech innovator driving our platform architecture and cutting-edge security solutions. Sarah leads our technical vision with a focus on scalable, secure, and user-friendly solutions.",
      experience: "12+ years experience",
      image: "/team-2.jpg",
      email: "sarah@smataccess.com",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      skills: ["System Architecture", "Security Engineering", "Team Leadership", "Innovation"],
      funFact: "Built her first computer at age 12 and won multiple hackathons in university."
    },
    {
      name: "Michael Chen",
      role: "Head of Engineering",
      description: "Expert in building scalable, secure systems that handle millions of access events daily. Michael ensures our platform can handle the demands of enterprise clients.",
      experience: "Expert in scalable security solutions",
      image: "/team-3.jpg",
      email: "michael@smataccess.com",
      linkedin: "https://linkedin.com/in/michaelchen",
      skills: ["Full-Stack Development", "System Design", "Performance Optimization", "Team Management"],
      funFact: "Marathon runner who has completed 15 marathons across different African cities."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      description: "Creating intuitive experiences that make complex security systems simple for everyone. Emily's user-centered design approach has made SmatAccess accessible to users of all technical levels.",
      experience: "Creating intuitive user experiences",
      image: "/team-4.jpg",
      email: "emily@smataccess.com",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      skills: ["UX/UI Design", "User Research", "Design Systems", "Accessibility"],
      funFact: "Former professional photographer who has captured images in 15 African countries."
    }
  ];

  // State for animated counters
  const [clientCount, setClientCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [hoursSaved, setHoursSaved] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);

  // Additional state for team modal
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal control functions
  const openMemberModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Animate counters when they come into view
  useEffect(() => {
    const handleScroll = () => {
      const countersSection = document.getElementById("counters-section");
      if (countersSection) {
        const rect = countersSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible && !countersVisible) {
          setCountersVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [countersVisible]);

  // Animate counter values
  useEffect(() => {
    if (countersVisible) {
      const targetClientCount = 170;
      const targetUserCount = 97;
      const targetHoursSaved = 3000;
      const duration = 2000; // 2 seconds for animation
      const steps = 60; // 60 frames for smooth animation
      const incrementTime = duration / steps;

      let currentClient = 0;
      let currentUser = 0;
      let currentHours = 0;

      const clientIncrement = targetClientCount / steps;
      const userIncrement = targetUserCount / steps;
      const hoursIncrement = targetHoursSaved / steps;

      const timer = setInterval(() => {
        currentClient += clientIncrement;
        currentUser += userIncrement;
        currentHours += hoursIncrement;

        setClientCount(Math.min(Math.floor(currentClient), targetClientCount));
        setUserCount(Math.min(Math.floor(currentUser), targetUserCount));
        setHoursSaved(Math.min(Math.floor(currentHours), targetHoursSaved));

        if (
          currentClient >= targetClientCount &&
          currentUser >= targetUserCount &&
          currentHours >= targetHoursSaved
        ) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [countersVisible]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION - Enhanced with video background */}
      <div className="px-4 py-8 pt-20 mx-auto max-w-7xl sm:px-6 lg:px-0 sm:py-12 md:pt-8 bg-gray-50">
        <section
          className="relative flex items-center justify-center text-white overflow-hidden rounded-[44px] shadow-2xl"
          style={{ height: "calc(100vh - 8rem)" }}
        >
          {/* Background Video/Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/about-hero.png"
              alt="SmatAccess About Hero Background"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-20 max-w-4xl px-5 text-center md:px-20">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm">
                About
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              The SmatAccess Story
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl leading-relaxed md:text-2xl text-white/90">
              The SmatAccess Story — Innovation, Integrity, and Impact.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="cursor-pointer bg-white text-[#2090C4] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                Learn More About Us
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2090C4] transition-all duration-300 flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2" />
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* OUR PURPOSE - Enhanced with visual elements */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#2090C4] rounded-full filter blur-3xl"></div>
          <div className="absolute bg-blue-500 rounded-full bottom-20 left-20 w-96 h-96 filter blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Our Purpose
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              We exist to make physical access simple, secure, and intelligent
              for everyone.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-[#2090C4]/20 to-[#2090C4]/5 rounded-full flex items-center justify-center">
                <LightBulbIcon className="w-16 h-16 text-[#2090C4]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY - Enhanced with timeline design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Story</h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Born from Smatech Group&apos;s vision of smarter, safer spaces
              across Africa.
            </p>
          </div>

          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="relative p-8 overflow-hidden bg-white shadow-xl rounded-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2090C4]/10 to-transparent rounded-full transform translate-x-16 -translate-y-16 z-0"></div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Our Foundation
                </h3>
                <p className="mb-6 text-gray-600">
                  SmatAccess was born from Smatech Group&apos;s vision to create
                  intelligent access control solutions tailored for the African
                  market. Our founders, experienced engineers and security
                  experts, recognized the need for systems that balance advanced
                  technology with practical usability in diverse environments.
                </p>

                <div className="mt-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2 font-semibold text-gray-700">
                      Founded:
                    </span>
                    <span>2018</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative p-8 overflow-hidden bg-white shadow-xl rounded-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2090C4]/10 to-transparent rounded-full transform translate-x-16 -translate-y-16 z-0"></div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Our Evolution
                </h3>
                <p className="mb-6 text-gray-600">
                  From our first installation to serving over 170 clients across
                  multiple sectors, we&apos;ve continuously evolved our platform
                  based on real-world feedback. Today, SmatAccess stands as a
                  comprehensive solution that addresses the unique security
                  challenges faced by organizations throughout Africa.
                </p>

                <div className="mt-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2 font-semibold text-gray-700">
                      Headquarters:
                    </span>
                    <span>Harare, Zimbabwe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES - Enhanced with better design */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative p-8 transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
              {/* Responsive decorative element */}
              <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#2090C4]/10 to-transparent rounded-full transform md:translate-x-8 md:-translate-y-8 lg:translate-x-16 lg:-translate-y-16 z-0"></div>

              <div className="w-16 h-16 bg-gradient-to-br from-[#2090C4]/20 to-[#2090C4]/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <LightBulbIcon className="w-8 h-8 text-[#2090C4]" />
              </div>

              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Innovation
              </h3>
              <p className="text-gray-600">
                We push limits to redefine access control.
              </p>
            </div>

            <div className="relative p-8 transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
              {/* Responsive decorative element */}
              <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#2090C4]/10 to-transparent rounded-full transform md:translate-x-8 md:-translate-y-8 lg:translate-x-16 lg:-translate-y-16 z-0"></div>

              <div className="w-16 h-16 bg-gradient-to-br from-[#2090C4]/20 to-[#2090C4]/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheckIcon className="w-8 h-8 text-[#2090C4]" />
              </div>

              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Reliability
              </h3>
              <p className="text-gray-600">
                We design for uptime and consistency.
              </p>
            </div>

            <div className="relative p-8 transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
              {/* Responsive decorative element */}
              <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#2090C4]/10 to-transparent rounded-full transform md:translate-x-8 md:-translate-y-8 lg:translate-x-16 lg:-translate-y-16 z-0"></div>

              <div className="w-16 h-16 bg-gradient-to-br from-[#2090C4]/20 to-[#2090C4]/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DocumentTextIcon className="w-8 h-8 text-[#2090C4]" />
              </div>

              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Transparency
              </h3>
              <p className="text-gray-600">
                Every access is logged, every process accountable.
              </p>
            </div>

            <div className="relative p-8 transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
              {/* Responsive decorative element */}
              <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#2090C4]/10 to-transparent rounded-full transform md:translate-x-8 md:-translate-y-8 lg:translate-x-16 lg:-translate-y-16 z-0"></div>

              <div className="w-16 h-16 bg-gradient-to-br from-[#2090C4]/20 to-[#2090C4]/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <UserGroupIcon className="w-8 h-8 text-[#2090C4]" />
              </div>

              <h3 className="mb-2 text-xl font-bold text-gray-900">
                User Experience
              </h3>
              <p className="text-gray-600">
                Simple enough for anyone to use, powerful enough for
                enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SNAPSHOT - Enhanced with interactive features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Meet Our Team
            </h2>
            <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-600">
              The talented individuals behind SmatAccess
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamData.map((member, index) => (
              <button
                key={index}
                onClick={() => openMemberModal(member)}
                className="overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2 text-left w-full"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mb-2 text-sm text-gray-600">{member.role}</p>
                  <p className="text-xs text-gray-500">
                    {member.experience}
                  </p>
                  <div className="mt-3 flex items-center text-[#2090C4] text-sm font-medium">
                    <span>View Profile</span>
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="cursor-pointer bg-gradient-to-r from-[#2090C4] to-[#1a7bb7] text-white px-8 py-3 rounded-full font-semibold hover:from-[#1a7bb7] hover:to-[#2090C4] transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              <UserGroupIcon className="w-5 h-5 inline-block mr-2" />
              Contact Our Team
              <ArrowRightIcon className="inline-block w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* OUR IMPACT - Enhanced with animated counters */}
      <section
        id="counters-section"
        className="relative py-20 overflow-hidden bg-white"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#2090C4] rounded-full filter blur-3xl"></div>
          <div className="absolute bg-blue-500 rounded-full bottom-20 left-20 w-96 h-96 filter blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Our Impact
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Numbers that speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
            <div className="text-center p-8 bg-gradient-to-br from-[#2090C4]/5 to-transparent rounded-2xl shadow-lg border border-[#2090C4]/10">
              <div className="text-5xl font-bold text-[#2090C4] mb-2">
                {clientCount}+
              </div>
              <div className="font-medium text-gray-700">Happy Clients</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
            </div>

            <div className="p-8 text-center border shadow-lg bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl border-green-500/10">
              <div className="mb-2 text-5xl font-bold text-green-600">
                {userCount}+
              </div>
              <div className="font-medium text-gray-700">Happy Users</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
            </div>

            <div className="p-8 text-center border shadow-lg bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl border-blue-500/10">
              <div className="mb-2 text-5xl font-bold text-blue-600">
                {hoursSaved.toLocaleString()}+
              </div>
              <div className="font-medium text-gray-700">Hours Saved</div>
              <div className="flex justify-center mt-2">
                <ClockIcon className="w-8 h-8 text-blue-500" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="cursor-pointer bg-[#2090C4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1a7bb7] transition-colors">
              Request a Demo
              <ArrowRightIcon className="inline-block w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* TEAM MEMBER MODAL */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm" onClick={closeMemberModal}>
          <div
            className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-white rounded-[2rem] shadow-2xl transform transition-all duration-300 scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeMemberModal}
              className="absolute z-50 p-2 text-gray-400 transition-colors duration-200 bg-white rounded-full shadow-lg top-4 right-4 hover:bg-gray-100 hover:text-gray-600"
              aria-label="Close modal"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-64 lg:h-full rounded-t-[2rem] lg:rounded-l-[2rem] lg:rounded-tr-none overflow-hidden bg-gray-100">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Text Content Section */}
              <div className="p-8 lg:p-12">
                <h2 className="mb-2 text-4xl font-extrabold text-gray-900">{selectedMember.name}</h2>
                <p className="mb-4 text-xl text-[#2090C4] font-semibold">{selectedMember.role}</p>
                <p className="mb-6 text-gray-600 leading-relaxed">{selectedMember.description}</p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="mb-3 text-lg font-bold text-gray-900">Core Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 text-sm font-medium text-[#2090C4] bg-[#2090C4]/10 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Fun Fact */}
                <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-r-lg">
                  <h4 className="font-semibold text-yellow-800 mb-1">Fun Fact</h4>
                  <p className="text-yellow-700 text-sm">{selectedMember.funFact}</p>
                </div>

                {/* Contact Links */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="inline-flex items-center justify-center gap-2 bg-[#2090C4] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#1a7bb7] transition-colors text-sm shadow-md"
                  >
                    <EnvelopeIcon className="w-4 h-4" />
                    Send Email
                  </a>
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors border-2 border-gray-300 rounded-full hover:bg-gray-100"
                  >
                    <LinkIcon className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <button
                    onClick={closeMemberModal}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors border-2 border-gray-300 rounded-full hover:bg-gray-100"
                  >
                    Back to Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
