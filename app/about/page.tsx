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
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function About() {
  // State for animated counters
  const [clientCount, setClientCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [hoursSaved, setHoursSaved] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);

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
              Born from Smatech Group&apos;s vision of smarter, safer spaces
              across Africa.
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

      {/* TEAM SNAPSHOT - Enhanced with images */}
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
            <div className="overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/team-1.jpg"
                  alt="Team Member"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  John Smith
                </h3>
                <p className="mb-2 text-sm text-gray-600">Founder & CEO</p>
                <p className="text-xs text-gray-500">
                  15+ years in security systems
                </p>
              </div>
            </div>

            <div className="overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/team-2.jpg"
                  alt="Team Member"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Sarah Johnson
                </h3>
                <p className="mb-2 text-sm text-gray-600">CTO</p>
                <p className="text-xs text-gray-500">
                  Tech visionary with 12+ years experience
                </p>
              </div>
            </div>

            <div className="overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/team-3.jpg"
                  alt="Team Member"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Michael Chen
                </h3>
                <p className="mb-2 text-sm text-gray-600">
                  Head of Engineering
                </p>
                <p className="text-xs text-gray-500">
                  Expert in scalable security solutions
                </p>
              </div>
            </div>

            <div className="overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/team-4.jpg"
                  alt="Team Member"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Emily Rodriguez
                </h3>
                <p className="mb-2 text-sm text-gray-600">Head of Design</p>
                <p className="text-xs text-gray-500">
                  Creating intuitive user experiences
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="cursor-pointer bg-[#2090C4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1a7bb7] transition-colors">
              Meet the Full Team
              <ArrowRightIcon className="inline-block w-5 h-5 ml-2" />
            </button>
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
    </div>
  );
}
