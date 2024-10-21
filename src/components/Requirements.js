import React from "react";
import { requirements } from "../Data";
import { motion } from "framer-motion";
import { fadeIn } from "../Transitions";

const Requirements = () => {
  return (
    <div className="text-xl text-white">
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="grid sm:grid-cols-2 md:grid-cols-4 mt-12 gap-4"
      >
        {requirements.map((requirement) => {
          return (
            <div
              className="text-center border border-solid border-grey p-8 rounded-md"
              key={requirement.id}
            >
              <div className="flex justify-center mb-2 text-[1.5rem]">
                {requirement.icon}
              </div>
              <div className="mb-4 text-xl font-bold">{requirement.text}</div>
              <div className="">{requirement.amount}</div>
              <div className="">{requirement.tab}</div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Requirements;
