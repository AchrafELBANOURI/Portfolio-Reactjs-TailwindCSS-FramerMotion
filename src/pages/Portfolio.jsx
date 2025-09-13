import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import proj1 from "../assets/images/proj9.png";
import proj2 from "../assets/images/proj11.png";
import proj3 from "../assets/images/proj12.png";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";


const projects = [
  {
    title: "INTERHUB PLATFORM",
    desc: "A comprehensive platform connecting students with internship opportunities. Features include user profiles, company listings, application tracking, and real-time notifications.",
    devstack: "Next js , Supabase , Framer Motion , Spring Boot",
    link: "https://github.com/youssefoubrik/InternHub_backend",
    git: "https://github.com/youssefoubrik/InternHub_backend",
    src: proj1,
    type: "fullstack",
  },
  {
    title: "ROOM BOOKING MANAGEMENT SYSTEM",
    desc: "An intuitive room reservation system with calendar integration, allowing users to check availability, book meeting spaces, and manage reservations efficiently.",
    devstack: "React js , TailwindCSS , Framer Motion , EJB , JEE",
    link: "https://github.com/AchrafELBANOURI/Gestion-Reservation-Salles",
    git: "https://github.com/AchrafELBANOURI/Gestion-Reservation-Salles",
    src: proj2,
    type: "fullstack",
  },
  {
    title: "AGILE PROJECT MANAGEMENT SYSTEM",
    desc: "A robust project management tool implementing Agile methodologies with sprint planning, backlog management, and performance tracking capabilities.",
    devstack: "Spring Boot , Spring AOP , MapStruct , Log4j , JUnit , Mockito , Swagger UI",
    link: "https://github.com/AchrafELBANOURI/AGILE-PROJECT-MANAGEMENT-SYSTEM",
    git: "https://github.com/AchrafELBANOURI/AGILE-PROJECT-MANAGEMENT-SYSTEM",
    src: proj3,
    type: "backend",
  },
];

export const Portfolio = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Mouse handlers for hover effect (without 3D rotation)
  const handleCardMouseMove = (e, card) => {
    if (!card) return;
    
    // Get card position relative to viewport
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate percentage positions
    const centerX = (x / rect.width) * 100;
    const centerY = (y / rect.height) * 100;
    
    // Create dynamic gradient based on mouse position (no 3D rotation)
    card.style.background = `radial-gradient(circle at ${centerX}% ${centerY}%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 40%, transparent 70%)`;
  };

  const handleCardMouseLeave = (card) => {
    if (!card) return;
    
    // Reset when mouse leaves
    card.style.background = 'transparent';
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="text-white py-24 md:py-64" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
          Selected <span className="text-emerald-300">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:border-emerald-300/50 border border-white/10"
              onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
            >
              <div
                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-4xl font-semibold">{project.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light text-emerald-300">
                    0{index + 1}
                  </span>
                  <FiChevronDown 
                    className={`w-6 h-6 transform transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6  bg-black/20 border border-white/10"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-white/70 mb-4">{project.desc}</p>
                        <p className="text-emerald-300 font-medium mb-2">
                          Stack: {project.devstack}
                        </p>
                        <p className="text-emerald-400/60 font-medium mb-4 capitalize">
                          Type: {project.type}
                        </p>
                        <div className="flex justify-start items-center space-x-4">
                          <a
                            href={project.link}
                            className="text-emerald-400 hover:text-blue-300 transition-colors"
                          >
                            <HiOutlineExternalLink />
                          </a>
                          <a
                            href={project.git}
                            className="text-gray-400 hover:text-gray-300 transition-colors"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
