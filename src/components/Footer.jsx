import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heropic from "../assets/images/hero-img.png";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.footer
      ref={ref}
      className="py-8"
      id="contact"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div
          className="flex items-center justify-between flex-col md:flex-row"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <motion.h2
              className="md:text-7xl text-4xl font-bold mb-10 text-white/50"
              variants={itemVariants}
            >
              Get in <span className="text-gray-400">touch</span>
            </motion.h2>
            <motion.a
              className="md:text-4xl lg:text-6xl sm:text-3xl text-xl font-semibold text-white underline decoration-gray-400 decoration-2
                                    underline-offset-4 hover:decoration-gray-200 transition duration-300"
              href="mailto:achrafbnr2406@gmail.com"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              achrafbnr2406@gmail.com
            </motion.a>
          </motion.div>

          <motion.div className="text-white/50 mt-12" variants={itemVariants}>
            <motion.div className="mb-8" variants={itemVariants}>
              <motion.p className="text-lg mb-1" variants={itemVariants}>
                Phone
              </motion.p>
              <motion.a
                href="+212720479471"
                className="text-2xl font-semibold underline decoration-gray-400 decoration-2
                                    underline-offset-4 hover:decoration-gray-400 transition duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                +212 7 20 47 94 71
              </motion.a>
            </motion.div>

            <motion.div className="text-lg mb-8" variants={itemVariants}>
              <motion.p className="font-bold" variants={itemVariants}>
                Social Media
              </motion.p>
              <motion.div
                className="grid grid-cols-2 gap-8 mt-2"
                variants={containerVariants}
              >
                <motion.div
                  className="relative group"
                  variants={socialIconVariants}
                >
                  <a
                    href="https://github.com/AchrafELBANOURI"
                    aria-label="GitHub"
                    className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
                  >
                    <AiFillGithub size={30} className="text-emerald-400" />
                  </a>
                  <span className="absolute left-12 top-1/2 transform -translate-y-1/2 text-emerald-400 text-sm font-medium whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
                    GitHub
                  </span>
                </motion.div>
                <motion.div
                  className="relative group"
                  variants={socialIconVariants}
                >
                  <a
                    href="https://www.instagram.com/_.vchrvf._.10/"
                    aria-label="Instagram"
                    className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
                  >
                    <AiFillInstagram size={30} className="text-emerald-400" />
                  </a>
                  <span className="absolute left-12 top-1/2 transform -translate-y-1/2 text-emerald-400 text-sm font-medium whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
                    @_.vchrvf._.10
                  </span>
                </motion.div>
                <motion.div
                  className="relative group"
                  variants={socialIconVariants}
                >
                  <a
                    href="https://x.com"
                    aria-label="X (Twitter)"
                    className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
                  >
                    <AiOutlineTwitter size={30} className="text-emerald-400" />
                  </a>
                  <span className="absolute left-12 top-1/2 transform -translate-y-1/2 text-emerald-400 text-sm font-medium whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
                    Twitter
                  </span>
                </motion.div>
                <motion.div
                  className="relative group"
                  variants={socialIconVariants}
                >
                  <a
                    href="https://www.tiktok.com/@achraf__10bn?_t=ZS-8zh0wC5gCag&_r=1"
                    aria-label="TikTok"
                    className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
                  >
                    <FaTiktok size={30} className="text-emerald-400" />
                  </a>
                  <span className="absolute left-12 top-1/2 transform -translate-y-1/2 text-emerald-400 text-sm font-medium whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
                    achraf__bnr10
                  </span>
                </motion.div>
                <motion.div
                  className="relative group"
                  variants={socialIconVariants}
                >
                  <a
                    href="https://www.linkedin.com/in/achraf-elbanouri"
                    aria-label="LinkedIn"
                    className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
                  >
                    <FaLinkedinIn size={30} className="text-emerald-400" />
                  </a>
                  <span className="absolute left-12 top-1/2 transform -translate-y-1/2 text-emerald-400 text-sm font-medium whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
                    linkedin
                  </span>
                </motion.div>

                <motion.div
                  className="relative group"
                  variants={socialIconVariants}
                >
                  <a
                    href="https://leetcode.com/u/ewMO3LErFs/"
                    aria-label="LeetCode"
                    className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
                  >
                    <SiLeetcode size={30} className="text-emerald-400" />
                  </a>
                  <span className="absolute left-12 top-1/2 transform -translate-y-1/2 text-emerald-400 text-sm font-medium whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
                    leetcode
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-10 text-center mt-8 py-12 flex flex-col lg:flex-row lg:justify-between items-center"
          variants={itemVariants}
        >
          <motion.h1
            className="block text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] font-bold text-zinc-800 opacity-5"
            variants={itemVariants}
            transition={{ duration: 0.3 }}
          >
            ACHRAF
          </motion.h1>

          <img
            src={heropic}
            alt="Achraf EL BANOURI"
            className="w-[300px] h-[300px] relative z-10 opacity-50"
          />
        </motion.div>

        <motion.div
          className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col"
          variants={itemVariants}
        >
          <motion.p
            className="text-gray-200 caption text-n-4 lg:block"
            variants={itemVariants}
          >
            © 2025. All rights reserved.
          </motion.p>

          <motion.ul className="flex gap-8" variants={containerVariants}>
            <motion.div
              className="relative group"
              variants={socialIconVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <a
                href="https://github.com/AchrafELBANOURI"
                aria-label="GitHub"
                className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
              >
                <AiFillGithub size={30} />
              </a>
            </motion.div>
            <motion.div
              className="relative group"
              variants={socialIconVariants}
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <a
                href="https://x.com"
                aria-label="X (Twitter)"
                className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
              >
                <AiOutlineTwitter size={30} />
              </a>
            </motion.div>
            <motion.div
              className="relative group"
              variants={socialIconVariants}
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <a
                href="https://www.instagram.com/_.vchrvf._.10/"
                aria-label="Instagram"
                className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
              >
                <AiFillInstagram size={30} />
              </a>
            </motion.div>
            <motion.div
              className="relative group"
              variants={socialIconVariants}
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <a
                href="https://www.linkedin.com/in/achraf-elbanouri"
                aria-label="LinkedIn"
                className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
              >
                <FaLinkedinIn size={30} />
              </a>
            </motion.div>

            <motion.div
              className="relative group"
              variants={socialIconVariants}
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <a
                href="https://leetcode.com/u/ewMO3LErFs/"
                aria-label="LeetCode"
                className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
              >
                <SiLeetcode size={30} />
              </a>
            </motion.div>
            <motion.div
              className="relative group"
              variants={socialIconVariants}
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <a
                href="https://www.tiktok.com/@achraf__10bn?_t=ZS-8zh0wC5gCag&_r=1"
                aria-label="TikTok"
                className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
              >
                <FaTiktok size={30} />
              </a>
            </motion.div>
          </motion.ul>
        </motion.div>
      </div>
    </motion.footer>
  );
};
