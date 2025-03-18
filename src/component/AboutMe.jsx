"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <section className="container mx-auto px-4 lg:px-14 xl:px-4 mt-20" id="about me">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-5">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-1 text-black flex  center flex-col justify-center items-center md:items-start py-12"
        >
          <h1 className="text-lg text-center justify-center md:ml-160 md:ml-60 align-center  ml-150 sm:text-[20px] md:text-[22px] text-gray-400 py-1 px-1 underline-offset-3 underline">
            About Me
          </h1>
          <h1 className="text-3xl text-center justify-center md:ml-110 sm:text-4xl md:text-5xl font-bold text-gray-900 max-w-[34rem] py-3">
            <span className="text-blue-600 justify-center ">Driven,</span> Innovative, Software
            <span className="text-blue-600 px-2.5">Engineer</span>
          </h1>
          <p className="w-full  max-w-[100rem] text-[15px] sm:text-[17px] md:text-[18px] text-gray-900 text-justify leading-relaxed font-inter">
            I'm a Software Engineer with over a year of experience in software and solution development Life Cycle and a passion for innovation. I focus on creating impactful software
            solutions. From ensuring software quality to developing applications, I approach every challenge with a commitment to excellence and continuous learning. With a keen eye for
            detail and a drive to solve problems creatively, I thrive in environments that encourage collaboration and innovation. My journey in tech is fueled by adaptability and a
            relentless pursuit of growth, allowing me to bring fresh perspectives to every project.
          </p>
          {startAnimation && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.3, ease: "easeInOut" }}
              className="absolute border-2 border-gray-900 md:max-w-[27rem] lg:max-w-[94rem] rounded-2xl mt-[26rem]"
            />
          )}
        </motion.div>

       
      </div>
    </section>
  );
};

export default AboutMe;