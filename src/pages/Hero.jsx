import React from "react";
import TypeWriterEffect from "../components/TypeWriterEffect";
import { motion } from "framer-motion";
import profilepic from "../assets/images/profilepic.png";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]">

      <div
        className="absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 
                      bg-[radial-gradient(closest-side,#000_85%,#249974)] top-[450px]
                      border-[1px] border-[#8CD6DE]/30"
      />

      <div className="container relative mx-auto px-4 pt-12 pb-24">
        <div className="flex flex-col items-center justify-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 mt-24"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
            <img
              src={profilepic}
              alt="Achraf EL BANOURI"
              className="w-[280px] relative z-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-7xl md:text-7xl font-extrabold tracking-tighter mb-4">
              Hi, I am <span className="text-emerald-400">Achraf</span>
            </h1>
            
            <div className="text-2xl font-semibold text-white/80 max-w-lg mx-auto leading-relaxed mb-6 h-8 flex justify-center">
              <span>A</span>
              <TypeWriterEffect />
            </div>
            
            <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
              I am a fullstack developer focusing on creating websites that
              provides user with best experience.
            </p>

            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-emerald-500 rounded-full font-medium text-black
                                 hover:shadow-[0_0_20px_rgba(52,211,153,0.7)] hover:bg-emerald-400
                                 transition-all duration-300 ease-out">
                <span className="relative z-10">Contact Me</span>
              </button>
              <button className="group px-6 py-3 border border-white/20 rounded-full font-medium relative overflow-hidden 
                                 hover:text-black transition-colors duration-500">
                <span className="relative z-10">View Work</span>
                <span className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-16 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-xl"
        />
      </div>
    </div>
  );
};


