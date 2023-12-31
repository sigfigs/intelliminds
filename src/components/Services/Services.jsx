import { CheckIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React, { useState } from "react";
import ServiceTabs from "./ServiceTabs";

export default function Services() {
  // const [activeTab, setActiveTab] = useState(0)
  const servicesData = [
    {
      title: "1 on 1 College Consulting",
      subtitle:
        "We will pair you with tutors who have either attended your dream schools...",
      features: collegeConsultingFeatures,
      price: "300",
      buttonStyle: "from-purple-500 to-indigo-600"
    },
    {
      title: "SAT & ACT Tutoring",
      subtitle:
        "Elevate your SAT/ACT scores with our expert tutoring services...",
      features: testPrepFeatures,
      price: "200",
      buttonStyle: "from-blue-500 to-indigo-600"
    },
    {
      title: "Transcript & GPA",
      subtitle:
        "Elevate your academic journey with our services. We specialize in transcript and GPA...",
      features: transcriptFeatures,
      price: "75",
      buttonStyle: "from-green-500 to-teal-600"
    },
    {
      title: "SHSAT (NYC Only)",
      subtitle:
        "Prepare effectively for the SHSAT with our experienced tutors (from Stuyvesant and Bronx Science)...",
      features: shsatFeatures,
      price: "150",
      buttonStyle: "from-yellow-500 to-orange-600"
    },
  ];

  // const handleTabClick = (index) => {
  //   setActiveTab(index)
  // }

  return (
    <div className="my-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="pb-8">
            {/* Adjust the styling based on your design */}
            <Service
              title={service.title}
              subtitle={service.subtitle}
              features={service.features}
              price={service.price}
              buttonStyle={service.buttonStyle}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Service({ title, subtitle, features, price, buttonStyle }) {
  return (
    <div className="md:flex justify-left items-center">
      <div className="w-full md:w-1/2">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray-500">{subtitle}</p>
            <div className="h-5" />
            <ul>
              {features.map((feat) => {
                return (
                  <li
                    key={feat}
                    className="py-4 flex md:py-0 md:pb-4 font-medium"
                  >
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base text-gray-500">{feat}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6">
              <p className="text-gray-500 mb-3">${price}/month</p>
              <Link
                href="/register"
                className={`mb-16 md:mb-0 inline-flex bg-gradient-to-r ${buttonStyle} bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:opacity-90 duration-300`}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const collegeConsultingFeatures = [
  "Unlimited essay editing",
  "Personalized feedback",
  "Personal statement",
  "Common App profile",
  "Supplements",
  "Scholarship applications",
  "Interview preparation",
];
const testPrepFeatures = [
  "Personalized feedback",
  "Reading, writing, math, science (ACT) sections",
];
const transcriptFeatures = ["Coursework, homework, test preparation"];
const shsatFeatures = ["Reading, writing, math sections"];
const tutoringFeatures = ["Reading, writing, math sections"];
