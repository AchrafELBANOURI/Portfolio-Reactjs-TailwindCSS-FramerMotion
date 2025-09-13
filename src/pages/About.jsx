import project1 from "../assets/images/proj5.png";
import project2 from "../assets/images/proj6.png";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const About = () => {
  // Individual mouse handlers for each card
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
    
    // Create dynamic gradient based on mouse position
    card.style.background = `radial-gradient(circle at ${centerX}% ${centerY}%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 70%)`;
    
    // Subtle rotation for 3D effect
    const rotateX = ((centerY / 100) - 0.5) * -10;
    const rotateY = ((centerX / 100) - 0.5) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleCardMouseLeave = (card) => {
    if (!card) return;
    
    // Reset when mouse leaves
    card.style.background = 'transparent';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <motion.section 
      id="about" 
      className="text-white p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-6xl font-bold mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        About <span className="text-emerald-300">Me</span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
          className="border border-white/20 rounded-lg p-6 transition-all duration-300 hover:backdrop-blur-lg hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-emerald-300/50"
          style={{ transformStyle: 'preserve-3d' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
      <h3 className="text-2xl font-bold mb-2">01. Background</h3>
      <p className="text-white/50 mb-6">
        I'm a passionate full-stack developer with a strong foundation in
        computer science and a love for creating innovative web solutions.
        My journey in tech started with a curiosity about how things work,
        which led me to pursue a career in web development.
      </p>

      <div className="rounded-lg p-4 mb-4 border border-white/20">
        <code className="text-emerald-200/50">
        const skills = [<br />
        &nbsp;&nbsp;'JavaScript',
        <br />
        &nbsp;&nbsp;'React',
        <br />
        &nbsp;&nbsp;'Java',
        <br />
        &nbsp;&nbsp;'Spring Boot',
        <br />
        &nbsp;&nbsp;'Python',
        <br />
        &nbsp;&nbsp;'SQL',
        <br />
        &nbsp;&nbsp;'DevOps'
        <br />
        ];
        </code>
      </div>
      </motion.div>

      <motion.div 
        onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
        onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
        className="border border-white/20 rounded-lg p-6 transition-all duration-300 hover:backdrop-blur-lg hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-emerald-300/50"
        style={{ transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
      <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
      <p className="text-white/50 mb-4">
        I specialize in building robust and scalable web applications using
        modern technologies. My expertise spans both front-end and back-end
        development, allowing me to create seamless, end-to-end solutions.
      </p>
      <div className="relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden">
        <img
        src={project1}
        alt="Project 1"
        className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      </motion.div>

      <motion.div 
        onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
        onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
        className="border border-white/20 rounded-lg p-6 transition-all duration-300 hover:backdrop-blur-lg hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-emerald-300/50"
        style={{ transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
      <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
      <p className="text-white/50 mb-4">
        I'm proficient in a wide range of technologies and constantly
        expanding my skill set to stay at the forefront of web development.
      </p>
      <div className="border border-white/20 rounded-lg p-3 transition-all duration-300 hover:bg-white/5 hover:border-emerald-300/30 mb-3">
        <h4 className="text-emerald-300 font-medium mb-2">Frontend</h4>
        <ul className="text-white/50 space-y-1 text-sm">
        <li>React/Next.js</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>Framer Motion</li>
        </ul>
      </div>
      <div className="border border-white/20 rounded-lg p-3 transition-all duration-300 hover:bg-white/5 hover:border-emerald-300/30">
        <h4 className="text-emerald-300 font-medium mb-2">Backend</h4>
        <ul className="text-white/50 space-y-1 text-sm">
        <li>Java & Spring Boot</li>
        <li>Python</li>
        <li>PostgreSQL</li>
        <li>DevOps</li>
        </ul>
      </div>
      </motion.div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <motion.div 
        onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
        onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
        className="border border-white/20 rounded-lg p-6 transition-all duration-300 hover:backdrop-blur-lg hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-emerald-300/50"
        style={{ transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
      <div className="space-y-4">
        <div>
        <label className="block text-sm font-medium mb-1">
          Front-end
        </label>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
          className="bg-emerald-300 h-2 rounded-full"
          style={{ width: "90%" }}
          ></div>
        </div>
        </div>
        <div>
        <label className="block text-sm font-medium mb-1">Back-end</label>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
          className="bg-emerald-300 h-2 rounded-full"
          style={{ width: "85%" }}
          ></div>
        </div>
        </div>
        <div>
        <label className="block text-sm font-medium mb-1">DevOps</label>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
          className="bg-emerald-300 h-2 rounded-full"
          style={{ width: "75%" }}
          ></div>
        </div>
        </div>
      </div>
      <h3 className="text-2xl font-bold mt-4 mb-2">04. Approach</h3>
      <p className="text-white/50">
        I believe in writing clean, maintainable code and following best
        practices. My approach involves understanding client needs, planning
        thoroughly, and delivering high-quality solutions on time.
      </p>
      </motion.div>

      <motion.div 
        onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
        onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
        className="border border-white/20 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:backdrop-blur-lg hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-emerald-300/50"
        style={{ transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
      >
      <div className="relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden">
        <img
        src={project2}
        alt="Project 2"
        className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div>
        <h3 className="text-2xl font-bold my-2">05. Goals</h3>
        <p className="text-white/50">
        My goal is to continue growing as a developer, tackling
        challenging projects, and contributing to the tech community. I'm
        always excited to learn new technologies and push the boundaries
        of what's possible in web development.
        </p>
      </div>
      </motion.div>
    </div>
    </motion.section>
  );
};
