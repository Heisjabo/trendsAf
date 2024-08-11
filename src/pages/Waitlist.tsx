import Card from "../components/Card";
import { motion } from "framer-motion";

const Waitlist = () => {
  return (
    <div className="waitlist min-h-screen py-6 flex flex-col gap-6 items-center justify-center text-white">
      <motion.div
        
        className="flex gap-6 flex-col w-[80%] items-center"
      >
        <motion.h1 initial={{ y: 90, opacity: 0 }}
        animate={{ y: 0, opacity: 1.1 }}
        transition={{ ease: "easeInOut", duration: 1.3 }} className="text-3xl text-center md:text-4xl lg:text-[90px] font-bold">
          Join the waitlist...
        </motion.h1>
        <motion.p initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1.1 }}
        transition={{ ease: "easeInOut", duration: 1.6 }} className="text-center text-xl">
          Join our beta program to follow the data and find new markets
        </motion.p>
      </motion.div>
      <motion.form
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 1 }}
        className="flex md:items-center justify-center mx-auto flex-col md:flex-row w-[80%] gap-3"
      >
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
      </motion.form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-8 w-[80%] mx-auto lg:grid-cols-3">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1.1 }}
          transition={{ ease: "easeInOut", duration: 0.9 }}
        >
          <Card text="Up-to-date datasets for full market transparency" />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1.6 }}
          transition={{ ease: "easeInOut", duration: 1.6 }}
        >
          <Card text="Connect with 100+ buyers and service providers" />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 2 }}
          transition={{ ease: "easeInOut", duration: 2 }}
        >
          <Card text="Integrated engine for trading, logistics planning and finance" />
        </motion.div>
      </div>
    </div>
  );
};

export default Waitlist;
