import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.div
      className="flex flex-wrap sm:flex-nowrap justify-center items-center mx-6 sm:mx-10 md:mx-16 gap-x-16 h-screen md:-mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="md:w-1/2 w-full">
        <motion.h1
          className="font-bold text-4xl md:text-6xl text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Turning <i className="text-purple-700 bg-transparent">Dreams</i>
        </motion.h1>
        <motion.h1
          className="font-bold text-4xl md:text-6xl text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          into <i className="text-purple-700 bg-transparent">Degrees</i>
        </motion.h1>
        <motion.h1
          className="font-bold text-4xl md:text-6xl text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          at Top Colleges
        </motion.h1>
        <div className="h-10" />
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-gray-500"
        >
          On demand tutoring and consulting offers instant access to experienced
          educators and advisors, catering to your specific learning or
          problem-solving needs. Get the expertise you require, precisely when
          you need it, with our convenient and flexible platform.
        </motion.p>

        <div className="h-10" />
        <motion.div
          className="flex justify-left gap-x-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <Link href="/services">
            <button className="btn btn-neutral capitalize px-3">
              Learn more
            </button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="md:w-1/2 w-full "
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1, type: "spring" }}
      >
        <Image
          className=""
          src="/cta_main.jpg"
          alt="Hero Image"
          width={800}
          height={300}
        />
        <div className="relative w-full max-w-lg">
          {/* <div className="absolute top-0 -right-2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-lg opacity-50"></div> */}
          {/* <div className="absolute -bottom-4 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-lg opacity-50"></div> */}
        </div>
      </motion.div>

      {/* <div className="absolute bottom-0 -right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-50"></div> */}
    </motion.div>
  );
}
