import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);
  const projects = [
    {
      title: "CRUD App",
      description:
        "A Java CRUD application that allows users to view, add, update, and delete products. Built with the  Spring Boot framework and uses MongoDb for the Database.",
      link: "https://github.com/Mr-Stanley/Java_CRUD",
      date: "28/2/2025 WAT",
    },
    {
      title: "Expense Tracker",
      description:
        "An expense tracker that helps you keep track of your expenditures, Developed with Java springboot and uses MongoDb for Database.",
      link: "https://github.com/Mr-Stanley/Expense-tracker-application.git",
      date: "04/12/2024 WAT",
    },
    {
      title: "Contact Management",
      description:
        "The Contact Management System is a simple project developed using Python and the flask framework and MongoDB for database. The application allows you add, view, delete contacts.",
      link: "https://github.com/Mr-Stanley/contact_management.git",
      date: "18/12/2024 WAT",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto px-6 md:px-4 mt-20"
      id="projects"
    >
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
        My{" "}
        <span className="text-blue-600 underline underline-offset-3">Work</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative bg-gray-800 rounded-2xl p-6 transform transition-all duration-500 
        hover:-translate-y-4 cursor-pointer 
        flex flex-col h-full  
        ${activeCard === index ? "ring-4 ring-blue-500" : ""}`}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
            style={{
              transform:
                activeCard === index
                  ? "perspective(1000px) rotateX(3deg) rotateY(3deg) scale(1.05)"
                  : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
              boxShadow:
                activeCard === index
                  ? "0 25px 50px -12px rgba(59, 130, 246, 0.3)"
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-transparent opacity-10 rounded-2xl pointer-events-none"></div>
            <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-2">
              <p className="cursor-auto">{project.title}</p>
              <p className="text-[0.757rem] font-normal text-[#d8d8d8] cursor-auto">
                Date Created: {project.date}
              </p>
            </h3>
            <p className="text-gray-400 mb-5 w-full px-1 py-2 text-start text-[1rem] cursor-auto">
              {project.description}
            </p>

            {/* Spacer to push button down */}
            <div className="flex-grow"></div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex border w-full items-center justify-center gap-2 px-4 py-2 text-white hover:bg-blue-600 hover:border-blue-600 rounded-3xl z-10 transform transition-all duration-300"
            >
              <FiExternalLink className="w-4 h-4" />
              <p>Github Repository</p>
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
