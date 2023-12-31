import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import {RxDiscordLogo} from 'react-icons/rx'
import Link from "next/link";

const ContactCard = () => {
  return (
    <div className="bg-white my-12">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 shadow-md border-[0.5px] border-gray-200">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              General Inquiries
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Set up meetings with founders
              </p>
            </div>
            <div className="mt-9">
              {/* <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+1 (555) 123 4567</p>
                  <p className="mt-1">Mon-Fri 8am to 6pm EST</p>
                </div>
              </div> */}
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MailIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-blue-500 underline">
                  <Link target="_blank" href="mailto:intellimindsbr@gmail.com">intellimindsbr@gmail.com</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Join the Community
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Hop in to ask us any of your questions and engage with other clients through this stressful time of your lives. We'll answer all of
                those questions!
              </p>
            </div>
            <div className="mt-9">
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <RxDiscordLogo
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-blue-500 underline">
                  <Link target="_blank" href="https://discord.gg/7PzzEJDnbj">https://discord.gg/7PzzEJDnbj</Link>
                  <a></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
