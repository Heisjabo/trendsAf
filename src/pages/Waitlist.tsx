import Card from "../components/Card";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Waitlist = () => {
  return (
    <div className="waitlist min-h-screen py-6 flex flex-col gap-6 items-center justify-center text-white">
      <motion.div variants={variants}
          transition={{ duration: 1, ease: "easeOut" }} className="flex gap-6 flex-col w-[80%] items-center">
        <motion.h1  variants={variants}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} className="text-3xl text-center md:text-4xl lg:text-[90px] font-bold">
          Join the waitlist...
        </motion.h1>
        <p className="text-center text-xl">
          Join our beta program to follow the data and find new markets
        </p>
      </motion.div>
      <form className="flex md:items-center justify-center mx-auto flex-col md:flex-row w-[80%] gap-3">
        <input
          type="text"
          className="py-2 px-3 rounded-[8px] outline-none text-[#333]"
          placeholder="Enter your name"
        />
        <input
          type="text"
          className="py-2 px-3 rounded-[8px] outline-none text-[#333]"
          placeholder="Your email address"
        />
        <button type="submit" className="py-2 px-3 rounded-[8px] bg-[#2245fe]">
          Join Waitlist!
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-8 w-[80%] mx-auto lg:grid-cols-3">
        <Card text="Up-to-date datasets for full market transparency" />
        <Card text="Connect with 100+ buyers and service providers" />
        <Card text="Integrated engine for trading, logistics planning and finance" />
      </div>
    </div>
  );
};

export default Waitlist;
