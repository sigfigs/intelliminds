import { ArrowSmRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <div className="col-span-1">
      <h3 className="text-xl font-semibold text-black">{heading}</h3>
      <p className="text-gray-500">{text}</p>
    </div>
  );
};

const GridListWithCTA = () => {
  return (
    <div className="mx-6 sm:mx-10 md:mx-16 mb-32">
      <div className="flex-none md:flex justify-center">
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-5 text-black">
            Get into your dream school now.
          </h2>
          <button className="flex items-center space-x-2 text-purple-500 font-medium border border-1 border-purple-500 rounded-md p-2">
            <Link
              href="/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get started now
            </Link>
            <ArrowSmRightIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="space-y-4 text-gray-500">
            <p>
            Turn your academic aspirations into reality with our comprehensive college consulting and tutoring services. Let us guide you toward your dream school admission and a brighter future.
            </p>
            <p>
              Get help with that pesky homework problem, break through an acute
              case of writer’s block, have a quick brainstorming call, or hone
              in on the perfect ending for that history essay you’re almost done
              with. We are here for you.
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-12 mb-12" />
      
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <Feature
          heading={"Build Relationships"}
          text={
            "We'll match you with experienced tutors from your dream school. Our goal is to help you enjoy learning so that it no longer feels like a chore."
          }
        />
        <Feature
          heading={"Advice from Upperclassmen"}
          text={
            "Struggling with managing time or stressing over college? We've been through it too and can offer valuable guidance to help you succeed."
          }
        />
        <Feature
          heading={"On Demand Support"}
          text={
            "You'll have access to our pool of tutors 24/7. We'll make sure you get that essay submitted on time!"
          }
        />
        <Feature
          heading={"Flexible Schedules"}
          text={
            "Want a break from regular sessions? No worries! Just let your tutor know and you can reschedule your session for that week."
          }
        />
      </div>

    </div>
  );
};

export default GridListWithCTA;
