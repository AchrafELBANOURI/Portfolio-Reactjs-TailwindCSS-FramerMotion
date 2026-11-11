import { useEffect } from "react";
import { SiFramer, SiFigma, SiReact, SiSpringboot, SiPostgresql } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stackItems = [
  {
    id: 1,
    name: "Framer",
    icon: <SiFramer size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 2,
    name: "Figma",
    icon: <SiFigma size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 3,
    name: "React",
    icon: <SiReact size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 4,
    name: "Spring Boot",
    icon: <SiSpringboot size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 5,
    name: "PostgreSQL",
    icon: <SiPostgresql size={100} />,
    color: "text-emerald-200",
  },
];

export const Stack = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  // Mouse handlers for glass hover effect
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
  };

  const handleCardMouseLeave = (card) => {
    if (!card) return;
    
    // Reset when mouse leaves
    card.style.background = 'rgba(255, 255, 255, 0.1)'; // Reset to original bg-white/10
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      className="py-24 md:py-64 max-w-[1200px] mx-auto text-center"
      id="stack"
    >
      <h2 className="text-7xl text-gray-100 font-bold mb-20">My Stack</h2>
      <div className="flex flex-wrap justify-center gap-8" ref={ref}>
        {stackItems.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: (index) => ({
                opacity: 0,
                y: index % 2 === 0 ? -100 : 100,
              }),
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                },
              },
            }}
            className="bg-white/10 flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-white/20 hover:border-emerald-300/50"
            onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
          >
            <div className={`mb-4 ${item.color}`}>{item.icon}</div>
            <p className="text-white/20 text-xl">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
