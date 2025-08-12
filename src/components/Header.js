import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../Transitions";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[30px] lg:text-[40px] font-semibold py-4"
          >
            <span className="text-white mr-2">I am a</span>
            <TypeAnimation
              sequence={[
                "Digital Creator",
                2000,
                "Photographer",
                2000,
                "Software Engineer",
                2000,
              ]}
              speed={50}
              className="text-white"
              wrapper="span"
              repeat={Infinity}
            />
            <div className="flex items-center justify-center text-white">
              <a
                href="https://www.instagram.com/Zomo1kon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>

              <a
                href="https://twitter.com/Zomo1kon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.linkedin.com/in/delvinreyes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" max-w-lg mx-auto lg:mx-0"
          ></motion.p>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex max-w-max gap-x-6 items-center mx-auto lg:mx-0"
          ></motion.div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
