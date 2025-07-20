import React from 'react';
import { motion } from "framer-motion";
import variants from '../variants/Vriants';
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
    FaSass,
    FaBootstrap,
    FaGitAlt,
    FaGithub,
    FaDatabase,
    FaFigma,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiRedux, SiTypescript, SiVite, SiJest } from 'react-icons/si';

const skills = [
    {
        icon: <FaHtml5 className="text-5xl sm:text-6xl text-orange-500 drop-shadow-glow" />,
        name: 'HTML5',
        desc: "Semantic, accessible, and modern markup for robust web applications.",
    },
    {
        icon: <FaCss3Alt className="text-5xl sm:text-6xl text-blue-500 drop-shadow-glow" />,
        name: 'CSS3',
        desc: "Responsive layouts, animations, and beautiful UI with modern CSS.",
    },
    {
        icon: <SiTailwindcss className="text-5xl sm:text-6xl text-cyan-400 drop-shadow-glow" />,
        name: 'Tailwind CSS',
        desc: "Utility-first CSS framework for rapid, custom UI development.",
    },
    {
        icon: <FaBootstrap className="text-5xl sm:text-6xl text-purple-600 drop-shadow-glow" />,
        name: 'Bootstrap',
        desc: "Popular CSS framework for fast, responsive, mobile-first sites.",
    },
    //   {
    //     icon: <FaSass className="text-6xl text-pink-400 drop-shadow-glow" />,
    //     name: 'Sass',
    //     desc: "CSS preprocessor for writing maintainable, scalable styles.",
    //   },
    {
        icon: <FaJs className="text-5xl sm:text-6xl text-yellow-400 drop-shadow-glow" />,
        name: 'JavaScript',
        desc: "Dynamic, versatile scripting for interactive web experiences.",
    },
    //   {
    //     icon: <SiTypescript className="text-6xl text-blue-400 drop-shadow-glow" />,
    //     name: 'TypeScript',
    //     desc: "Typed superset of JavaScript for scalable, reliable code.",
    //   },
    {
        icon: <FaReact className="text-5xl sm:text-6xl text-cyan-300 drop-shadow-glow" />,
        name: 'React.js',
        desc: "Component-based UI library for building fast, modern SPAs.",
    },
    //   {
    //     icon: <SiRedux className="text-6xl text-purple-500 drop-shadow-glow" />,
    //     name: 'Redux',
    //     desc: "Predictable state management for complex React applications.",
    //   },
    //   {
    //     icon: <FaNodeJs className="text-6xl text-green-500 drop-shadow-glow" />,
    //     name: 'Node.js',
    //     desc: "JavaScript runtime for scalable, high-performance backend APIs.",
    //   },
    //   {
    //     icon: <SiExpress className="text-6xl text-gray-300 drop-shadow-glow" />,
    //     name: 'Express.js',
    //     desc: "Minimal, flexible Node.js web application framework.",
    //   },
    //   {
    //     icon: <SiMongodb className="text-6xl text-green-400 drop-shadow-glow" />,
    //     name: 'MongoDB',
    //     desc: "NoSQL database for flexible, scalable data storage.",
    //   },
    //   {
    //     icon: <FaDatabase className="text-6xl text-indigo-400 drop-shadow-glow" />,
    //     name: 'SQL',
    //     desc: "Relational database design and querying (MySQL, PostgreSQL).",
    //   },
    //   {
    //     icon: <FaPython className="text-6xl text-yellow-300 drop-shadow-glow" />,
    //     name: 'Python',
    //     desc: "General-purpose programming for automation, scripting, and backend.",
    //   },
    //   {
    //     icon: <FaGitAlt className="text-6xl text-orange-600 drop-shadow-glow" />,
    //     name: 'Git',
    //     desc: "Version control for collaborative, reliable code management.",
    //   },
    //   {
    //     icon: <FaGithub className="text-6xl text-white drop-shadow-glow" />,
    //     name: 'GitHub',
    //     desc: "Remote code hosting, collaboration, and CI/CD workflows.",
    //   },
    //   {
    //     icon: <FaFigma className="text-6xl text-pink-500 drop-shadow-glow" />,
    //     name: 'Figma',
    //     desc: "UI/UX design and prototyping for seamless developer handoff.",
    //   },
    //   {
    //     icon: <SiVite className="text-6xl text-violet-400 drop-shadow-glow" />,
    //     name: 'Vite',
    //     desc: "Next-generation frontend tooling for lightning-fast development.",
    //   },
    //   {
    //     icon: <SiJest className="text-6xl text-red-500 drop-shadow-glow" />,
    //     name: 'Jest',
    //     desc: "Delightful JavaScript testing framework for robust code.",
    //   },
];

export default function Skills() {
    return (
        <section
            id='Skills'
            className="py-10 px-2 sm:px-4 relative overflow-hidden"
        //   style={{ marginBottom: '60px' }}
        >
            {/* Decorative background blobs */}
            <div className="absolute top-0 left-0 w-40 h-40 sm:w-72 sm:h-72 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-96 sm:h-96 rounded-full blur-3xl -z-10 animate-pulse" />
            <h2
                className="text-3xl sm:text-4xl font-extrabold text-center text-cyan-400 mb-10 sm:mb-14 tracking-tight drop-shadow-lg"
                style={{ marginBottom: '25px' }}
            >
                <motion.span
                    variants={variants("up", 0.5)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.5,
                    }} className="from-cyan-400">
                    My Skills
                </motion.span>
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-10 md:gap-14 lg:gap-20">
                {skills.map((skill, idx) => (
                    <motion.div
                    variants={variants("up", 0.10)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.5,
                    }}
                        key={idx}
                        className="group bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 flex flex-col items-center text-center border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-100 hover:shadow-cyan-400/30 relative overflow-hidden"
                        style={{
                            padding: '12px',
                            minHeight: '220px',
                            maxWidth: '100%',
                            width: '100%',
                        }}
                    >
                        <div className="mb-3 sm:mb-5 transition-transform duration-300 group-hover:scale-110">
                            {skill.icon}
                        </div>
                        <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2 tracking-wide group-hover:text-cyan-400 transition-colors duration-300">
                            {skill.name}
                        </h3>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{skill.desc}</p>
                        {/* Glow effect */}
                        <div className="absolute inset-0 pointer-events-none rounded-3xl group-hover:shadow-[0_0_40px_10px_rgba(6,182,212,0.3)] transition-all duration-300" />
                    </motion.div>
                ))}
            </div>
            {/* Custom CSS for icon glow and mobile tweaks */}
            <style>
                {`
          .drop-shadow-glow {
            filter: drop-shadow(0 0 12px #06b6d4aa);
          }
          @media (max-width: 640px) {
            #Skills h2 {
              font-size: 1.7rem !important;
              margin-bottom: 1.5rem !important;
            }
            #Skills .group {
              padding: 12px !important;
              min-height: 180px !important;
            }
            #Skills .drop-shadow-glow {
              font-size: 2.5rem !important;
            }
          }
        `}
            </style>
        </section>
    );
}
