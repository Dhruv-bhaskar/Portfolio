import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framer motion/variants";

const ExperiencePic = () => {
  return (
    <div className="sm:mt-[7rem] sm:-translate-y-[3rem]">
      {/* <img src="experience-image.png" alt="experience" className='size-[25rem] sm:size-[18rem] md:size-[25rem]' /> */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        className="flex flex-col gap-5 text-start text-lg text-white border-2 border-dashed rounded-xl px-3 py-4"
      >
        <p>
          • Developed and deployed a full-stack blog website using the MERN
          stack, including features for creating, updating, and deleting blog
          posts, demonstrating proficiency in database management and RESTful
          API design.
        </p>

        <p>
          • Built a task management platform with comprehensive (Create, Read,
          Update, Delete) operations, a user authentication system, and advanced
          task sorting capabilities by date and title, showcasing strong
          front-end and back-end integration skills.
        </p>

        <p>
          •Delivered production-ready applications within a 1-month deadline.
        </p>
      </motion.div>
    </div>
  );
};

export default ExperiencePic;
