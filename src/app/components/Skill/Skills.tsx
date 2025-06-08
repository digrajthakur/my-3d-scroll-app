'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaShopify, FaWordpress, FaCss3, FaBootstrap, FaGithub, FaPhp } from 'react-icons/fa';
import './Skills.css';
import { SiJquery, SiCanva } from 'react-icons/si';
import { FaDocker } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';



const skills = [
    //   {
    //     year: '2023',
    //     title: 'Front-End Developer Intern',
    //     description:
    //       'Worked on responsive UI/UX using HTML, CSS, JavaScript. Customized Shopify themes and improved speed.',
    //     progress: [
    //       { tech: 'HTML', percent: 90, icon: <FaHtml5 /> },
    //       { tech: 'CSS', percent: 85, icon: <FaCss3Alt /> },
    //       { tech: 'JavaScript', percent: 80, icon: <FaJs /> },
    //     ],
    //   },
    {
        year: '2024-2025',
        title: 'Web Developer  *Ocularity Analytics Pvt. Ltd.*',
        description: 'Designed e-commerce sites using WordPress, Shopify & Frontend Technology. Enhanced UI animations.',
        progress: [
            //   { tech: 'Tailwind', percent: 85, icon: <FaCss3Alt /> },
            { tech: 'HTML5', percent: 90, icon: <FaHtml5 /> },
            { tech: 'CSS3', percent: 90, icon: <FaCss3 /> },
            { tech: 'JavaScript', percent: 80, icon: <FaJs /> },
            { tech: 'Bootstrap', percent: 90, icon: <FaBootstrap /> },
            { tech: 'WordPress', percent: 95, icon: <FaWordpress /> },
            { tech: 'Shopify', percent: 88, icon: <FaShopify /> },
            { tech: 'PHP', percent: 70, icon: <FaPhp /> },
            { tech: 'Github', percent: 80, icon: <FaGithub /> },
            { tech: 'jQuery', percent: 80, icon: <SiJquery /> },
            { tech: 'Canva', percent: 85, icon: <SiCanva /> },
            { tech: 'Docker', percent: 60, icon: <FaDocker /> },
        ],
    },
    //   FaHtml5,       FaCss3Alt,     FaPhp,         FaBootstrap, 
    //   FaGithub       
    {
        year: '2025-PRESENT',
        title: 'Software Engineer *Flarewave AI Pvt. Ltd.*',
        description: 'Building AI-driven websites with React, JavaScript, WordPress, and Shopify; skilled in full-stack development and API integration.',
        progress: [
            { tech: 'React', percent: 70, icon: <FaReact /> },
            { tech: 'JavaScript', percent: 85, icon: <FaJs /> },
            { tech: 'WordPress', percent: 95, icon: <FaWordpress /> },
            { tech: 'Next', percent: 60, icon: <SiNextdotjs /> },
            { tech: 'HTML5', percent: 90, icon: <FaHtml5 /> },
            { tech: 'CSS3', percent: 90, icon: <FaCss3 /> },
            { tech: 'Shopify', percent: 88, icon: <FaShopify /> },
            { tech: 'PHP', percent: 74, icon: <FaPhp /> },
            { tech: 'Github', percent: 80, icon: <FaGithub /> },
            { tech: 'Canva', percent: 85, icon: <SiCanva /> },
        ],
    },
];

export default function SkillsSection() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
            <style>{`
        /* Light mode styles */
        .light-mode {
          background-color: white;
          color: black;
        }
        .light-mode .skill-card {
          background-color: #f3f4f6; /* light gray */
          color: #374151; /* dark gray */
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .light-mode .progress-bg {
          background-color: #d1d5db; /* gray-300 */
        }
        .light-mode .progress-bar {
          background-color: #3b82f6; /* blue-500 */
        }
        .light-mode .year-badge {
          background-color: #2563eb; /* blue-600 */
          color: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .light-mode .dot {
          background-color: #2563eb;
          border-color: white;
        }
        .light-mode button {
          background-color: #1f2937; /* gray-800 */
          color: white;
        }
        .light-mode button:hover {
          background-color: #374151; /* gray-700 */
        }

        /* Dark mode styles */
        .dark-mode {
          background-color: #000000;
          color: white;
        }
        .dark-mode .skill-card {
          background-color: #111827; /* gray-900 */
          color: #d1d5db; /* gray-300 */
          box-shadow: 0 4px 6px rgba(0,0,0,0.6);
        }
        .dark-mode .progress-bg {
          background-color: #374151; /* gray-700 */
        }
        .dark-mode .progress-bar {
          background-color: #3b82f6; /* blue-500 */
        }
        .dark-mode .year-badge {
          background-color: #2563eb;
          color: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.6);
        }
        .dark-mode .dot {
          background-color: #2563eb;
          border-color: white;
        }
        .dark-mode button {
          background-color: white;
          color: black;
        }
        .dark-mode button:hover {
          background-color: #e5e7eb; /* gray-200 */
        }

        /* Shared styles */
        button {
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        section {
          padding-top: 5rem;
          padding-bottom: 5rem;
          padding-left: 1rem;
          padding-right: 1rem;
          max-width: 72rem; /* max-w-6xl */
          margin-left: auto;
          margin-right: auto;
          position: relative;
        }
        .center-line {
          position: absolute;
          left: 50%;
          top: 0;
          height: 100%;
          width: 0.25rem; /* 1 */
          background-color: #3b82f6;
          transform: translateX(-50%);
          z-index: 0;
        }
        .flex-row {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;
        }
        .skill-card {
          padding: 1.5rem;
          border-radius: 1rem;
          width: 100%;
          max-width: 28rem; /* max-w-md */
          transition: transform 0.3s ease;
        }
        .skill-card:hover {
          transform: scale(1.05);
        }
        .year-badge {
          padding: 0.25rem 1rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          user-select: none;
        }
        .dot {
          width: 1rem;
          height: 1rem;
          border-radius: 9999px;
          border: 2px solid white;
          margin: 0 auto;
          background-color: #2563eb;
        }
        .progress-bg {
          border-radius: 9999px;
          height: 0.5rem;
          width: 100%;
          margin-bottom: 0.75rem;
        }
        .progress-bar {
          height: 0.5rem;
          border-radius: 9999px;
        }
        .skill-tech {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .skill-icon {
          font-size: 1.25rem;
          color: #3b82f6;
          display: inline-flex;
          align-items: center;
        }

        /* Responsive */
        @media(min-width: 768px) {
          .flex-row {
            flex-direction: row;
          }
        }
        @media(max-width: 767px) {
          .flex-row {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

            <section id="skills" className={darkMode ? 'dark-mode' : 'light-mode'}>
                <div className="flex justify-end mb-6" style={{ marginBottom: '1.5rem', justifyContent: 'flex-end' }}>
                    <button onClick={() => setDarkMode(!darkMode)}>
                        Toggle {darkMode ? 'Light' : 'Dark'}
                    </button>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '1rem' }}>
                        Skills
                    </h2>
                    <p style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
                        Technologies I Work With
                    </p>
                </div>

                <div style={{ position: 'relative' }}>
                    {/* Center Line */}
                    <div className="center-line"></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', position: 'relative', zIndex: 10 }}>
                        {skills.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="flex-row"
                                    style={{ justifyContent: isLeft ? 'flex-end' : 'flex-start' }}
                                >
                                    {/* Left Box */}
                                    {isLeft && <SkillCard item={item} />}

                                    {/* Year and Dot */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            textAlign: 'center',
                                            zIndex: 20,
                                            userSelect: 'none',
                                        }}
                                    >
                                        <div className="year-badge">{item.year}</div>
                                        <div className="dot"></div>
                                    </div>

                                    {/* Right Box */}
                                    {!isLeft && <SkillCard item={item} />}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

function SkillCard({ item }: any) {
    return (
        <div className="skill-card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>{item.title}</h3>
            <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>{item.description}</p>
            <div>
                {item.progress.map((skill: any, i: number) => (
                    <div key={i}>
                        <div className="skill-tech">
                            <motion.span
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="skill-icon"
                            >
                                {skill.icon}
                            </motion.span>
                            {skill.tech}
                        </div>
                        <div className="progress-bg">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.percent}%` }}
                                transition={{ duration: 1 }}
                                className="progress-bar"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}




// 'use client';

// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaShopify, FaWordpress } from 'react-icons/fa';

// const skills = [
//   {
//     year: '2023',
//     title: 'Front-End Developer Intern',
//     description:
//       'Worked on responsive UI/UX using HTML, CSS, JavaScript. Customized Shopify themes and improved speed.',
//     progress: [
//       { tech: 'HTML', percent: 90, icon: <FaHtml5 /> },
//       { tech: 'CSS', percent: 85, icon: <FaCss3Alt /> },
//       { tech: 'JavaScript', percent: 80, icon: <FaJs /> },
//     ],
//   },
//   {
//     year: '2024',
//     title: 'Junior Web Designer',
//     description: 'Designed e-commerce sites using WordPress and TailwindCSS. Enhanced UI animations.',
//     progress: [
//       { tech: 'Tailwind', percent: 85, icon: <FaCss3Alt /> },
//       { tech: 'WordPress', percent: 80, icon: <FaWordpress /> },
//     ],
//   },
//   {
//     year: '2025',
//     title: 'Frontend Developer',
//     description: 'Built modern UIs using React and Framer Motion. Added animations and optimized UX.',
//     progress: [
//       { tech: 'React', percent: 90, icon: <FaReact /> },
//       { tech: 'Framer Motion', percent: 85, icon: <FaJs /> },
//     ],
//   },
// ];

// export default function SkillsSection() {
//   const [darkMode, setDarkMode] = useState(true);

//   useEffect(() => {
//     document.body.classList.toggle('dark', darkMode);
//   }, [darkMode]);

//   return (
//     <section
//       id="skills"
//       className="py-20 px-4 sm:px-6 md:px-12 bg-white dark:bg-black text-black dark:text-white scroll-snap-start"
//     >
//       <div className="max-w-6xl mx-auto">
//         <div className="flex justify-end mb-6">
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="bg-gray-800 text-white dark:bg-white dark:text-black px-4 py-2 rounded"
//           >
//             Toggle {darkMode ? 'Light' : 'Dark'}
//           </button>
//         </div>

//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">Skills & Timeline</h2>
//           <p className="text-gray-600 dark:text-gray-400">Interactive skill timeline with animation</p>
//         </div>

//         <div className="relative">
//           {/* Center Line */}
//           <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-500 transform -translate-x-1/2 z-0"></div>

//           <div className="space-y-20 relative z-10">
//             {skills.map((item, index) => {
//               const isLeft = index % 2 === 0;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 60 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 relative"
//                 >
//                   {/* Left Box */}
//                   {isLeft && (
//                     <div className="w-full md:w-1/2 flex justify-end pr-4">
//                       <SkillCard item={item} />
//                     </div>
//                   )}

//                   {/* Year and Dot */}
//                   <div className="absolute md:static left-1/2 transform md:translate-x-0 -translate-x-1/2 text-center z-10">
//                     <div className="bg-blue-600 text-white px-4 py-1 rounded-full shadow mb-2 text-sm">
//                       {item.year}
//                     </div>
//                     <div className="w-4 h-4 bg-blue-600 border-2 border-white rounded-full mx-auto" />
//                   </div>

//                   {/* Right Box */}
//                   {!isLeft && (
//                     <div className="w-full md:w-1/2 flex justify-start pl-4">
//                       <SkillCard item={item} />
//                     </div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function SkillCard({ item }: any) {
//   return (
//     <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-300">
//       <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//       <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
//       <div className="space-y-3">
//         {item.progress.map((skill: any, i: number) => (
//           <div key={i}>
//             <div className="flex items-center gap-2 text-sm font-medium mb-1">
//               <motion.span
//                 whileHover={{ scale: 1.2, rotate: 5 }}
//                 className="text-lg text-blue-500"
//               >
//                 {skill.icon}
//               </motion.span>
//               {skill.tech}
//             </div>
//             <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
//               <motion.div
//                 initial={{ width: 0 }}
//                 whileInView={{ width: `${skill.percent}%` }}
//                 transition={{ duration: 1 }}
//                 className="h-2 rounded-full bg-blue-500"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





// 'use client';

// import { motion } from 'framer-motion';
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaShopify,
//   FaWordpress,
// } from 'react-icons/fa';

// const skills = [
//   {
//     year: '2023',
//     title: 'Front-End Developer Intern',
//     description:
//       'Worked on responsive UI/UX using HTML, CSS, and JavaScript. Customized Shopify themes and enhanced performance.',
//     progress: [
//       { tech: 'HTML', percent: 90, icon: <FaHtml5 /> },
//       { tech: 'CSS', percent: 85, icon: <FaCss3Alt /> },
//       { tech: 'JavaScript', percent: 80, icon: <FaJs /> },
//       { tech: 'Shopify', percent: 75, icon: <FaShopify /> },
//     ],
//   },
//   {
//     year: '2024',
//     title: 'Junior Web Designer',
//     description:
//       'Designed e-commerce sites using Tailwind, WordPress and built engaging user interfaces.',
//     progress: [
//       { tech: 'Tailwind', percent: 85, icon: <FaCss3Alt /> },
//       { tech: 'WordPress', percent: 80, icon: <FaWordpress /> },
//       { tech: 'Shopify', percent: 90, icon: <FaShopify /> },
//     ],
//   },
//   {
//     year: '2025',
//     title: 'Frontend Developer',
//     description:
//       'Developed animated, interactive websites using React, Framer Motion and focused on performance optimization.',
//     progress: [
//       { tech: 'React', percent: 90, icon: <FaReact /> },
//       { tech: 'Framer Motion', percent: 85, icon: <FaJs /> },
//       { tech: 'JavaScript', percent: 88, icon: <FaJs /> },
//     ],
//   },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 px-4 sm:px-6 md:px-10 bg-black text-white">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-2">Skills & Timeline</h2>
//           <p className="text-gray-400 text-base sm:text-lg">
//             Hover on skills — scroll to reveal progress
//           </p>
//         </div>

//         <div className="relative">
//           {/* Vertical Timeline Line */}
//           <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-700 transform -translate-x-1/2 z-0" />

//           <div className="space-y-20 relative z-10">
//             {skills.map((item, index) => {
//               const isLeft = index % 2 === 0;

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 60 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                   className="flex flex-col md:flex-row items-center md:items-start justify-between md:justify-center gap-6 relative"
//                 >
//                   {/* Left Block */}
//                   {isLeft && (
//                     <div className="w-full md:w-1/2 flex justify-end pr-4 md:pr-10">
//                       <div className="bg-gray-900 p-6 rounded-xl shadow-lg w-full max-w-md hover:scale-[1.02] transition-transform duration-300">
//                         <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                         <p className="text-sm text-gray-300 mb-4">{item.description}</p>
//                         <div className="space-y-3">
//                           {item.progress.map((skill, i) => (
//                             <div key={i}>
//                               <div className="flex items-center gap-2 text-sm font-medium mb-1">
//                                 <motion.span
//                                   whileHover={{ scale: 1.2, rotate: 5 }}
//                                   className="text-lg text-blue-500"
//                                 >
//                                   {skill.icon}
//                                 </motion.span>
//                                 {skill.tech}
//                               </div>
//                               <div className="w-full bg-gray-700 rounded-full h-2">
//                                 <motion.div
//                                   initial={{ width: 0 }}
//                                   whileInView={{ width: `${skill.percent}%` }}
//                                   transition={{ duration: 1 }}
//                                   className="h-2 rounded-full bg-blue-500"
//                                 />
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* Center Year & Dot */}
//                   <div className="absolute md:static left-1/2 transform md:translate-x-0 -translate-x-1/2 text-center z-10">
//                     <div className="bg-blue-600 text-white px-4 py-1 rounded-full shadow-md text-sm font-semibold w-fit mx-auto mb-4 md:mb-0">
//                       {item.year}
//                     </div>
//                     <div className="w-4 h-4 bg-blue-600 border-2 border-white rounded-full mx-auto" />
//                   </div>

//                   {/* Right Block */}
//                   {!isLeft && (
//                     <div className="w-full md:w-1/2 flex justify-start pl-4 md:pl-10">
//                       <div className="bg-gray-900 p-6 rounded-xl shadow-lg w-full max-w-md hover:scale-[1.02] transition-transform duration-300">
//                         <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                         <p className="text-sm text-gray-300 mb-4">{item.description}</p>
//                         <div className="space-y-3">
//                           {item.progress.map((skill, i) => (
//                             <div key={i}>
//                               <div className="flex items-center gap-2 text-sm font-medium mb-1">
//                                 <motion.span
//                                   whileHover={{ scale: 1.2, rotate: 5 }}
//                                   className="text-lg text-blue-500"
//                                 >
//                                   {skill.icon}
//                                 </motion.span>
//                                 {skill.tech}
//                               </div>
//                               <div className="w-full bg-gray-700 rounded-full h-2">
//                                 <motion.div
//                                   initial={{ width: 0 }}
//                                   whileInView={{ width: `${skill.percent}%` }}
//                                   transition={{ duration: 1 }}
//                                   className="h-2 rounded-full bg-blue-500"
//                                 />
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }










// 'use client';

// import { motion } from 'framer-motion';
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaShopify,
//   FaWordpress,
// } from 'react-icons/fa';

// const skills = [
//   {
//     year: '2023',
//     title: 'Front-End Developer Intern',
//     description:
//       'Worked on responsive UI/UX using HTML, CSS, JS. Customized Shopify stores.',
//     icons: [
//       <FaHtml5 key="html" />,
//       <FaCss3Alt key="css" />,
//       <FaJs key="js" />,
//       <FaShopify key="shopify" />,
//     ],
//   },
//   {
//     year: '2024',
//     title: 'Junior Web Designer',
//     description:
//       'Designed e-commerce sites using Tailwind, WordPress, and modern tools.',
//     icons: [
//       <FaCss3Alt key="css" />,
//       <FaWordpress key="wp" />,
//       <FaShopify key="shopify" />,
//     ],
//   },
//   {
//     year: '2025',
//     title: 'Frontend Developer',
//     description:
//       'Built animated 3D interfaces using React, Framer Motion & optimized performance.',
//     icons: [
//       <FaReact key="react" />,
//       <FaJs key="js" />,
//       <FaHtml5 key="html" />,
//       <FaCss3Alt key="css" />,
//     ],
//   },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 px-4 sm:px-6 md:px-10 bg-black text-white">
//       <div className="max-w-5xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-2">Skills & Experience</h2>
//           <p className="text-gray-400 text-base sm:text-lg">
//             A timeline of my journey in web development
//           </p>
//         </div>

//         {/* Timeline Wrapper */}
//         <div className="relative">
//           {/* Center Vertical Line */}
//           <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-700 transform -translate-x-1/2 z-0" />

//           <div className="space-y-20 relative z-10">
//             {skills.map((item, index) => {
//               const isLeft = index % 2 === 0;

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                   className={`flex flex-col md:flex-row items-center md:items-start justify-between md:justify-center gap-6 relative`}
//                 >
//                   {/* Left Content */}
//                   {isLeft && (
//                     <div className="w-full md:w-1/2 flex justify-end pr-4 md:pr-8">
//                       <div className="bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-md">
//                         <h3 className="text-xl font-bold">{item.title}</h3>
//                         <p className="text-sm text-gray-400 mb-3">{item.description}</p>
//                         <div className="flex flex-wrap gap-2">
//                           {item.icons.map((icon, i) => (
//                             <span
//                               key={i}
//                               className="text-white text-lg bg-gray-800 border border-gray-700 px-2 py-1 rounded-md"
//                             >
//                               {icon}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* Year in Center */}
//                   <div className="absolute md:static left-1/2 transform md:translate-x-0 -translate-x-1/2 text-center z-10">
//                     <div className="bg-blue-600 text-white px-4 py-1 rounded-full shadow-md text-sm font-semibold w-fit mx-auto mb-4 md:mb-0">
//                       {item.year}
//                     </div>
//                     <div className="w-4 h-4 bg-blue-600 border-2 border-white rounded-full mx-auto" />
//                   </div>

//                   {/* Right Content */}
//                   {!isLeft && (
//                     <div className="w-full md:w-1/2 flex justify-start pl-4 md:pl-8">
//                       <div className="bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-md">
//                         <h3 className="text-xl font-bold">{item.title}</h3>
//                         <p className="text-sm text-gray-400 mb-3">{item.description}</p>
//                         <div className="flex flex-wrap gap-2">
//                           {item.icons.map((icon, i) => (
//                             <span
//                               key={i}
//                               className="text-white text-lg bg-gray-800 border border-gray-700 px-2 py-1 rounded-md"
//                             >
//                               {icon}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

















// 'use client';

// import { motion } from 'framer-motion';
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaShopify, FaWordpress } from 'react-icons/fa';

// const skills = [
//   {
//     year: '2023',
//     title: 'Front-End Developer Intern',
//     description: 'Worked on responsive UI/UX using HTML, CSS, JS. Customized Shopify stores.',
//     icons: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />, <FaShopify key="shopify" />],
//   },
//   {
//     year: '2024',
//     title: 'Junior Web Designer',
//     description: 'Designed e-commerce sites using Tailwind, WordPress, and modern tools.',
//     icons: [<FaCss3Alt key="css" />, <FaWordpress key="wp" />, <FaShopify key="shopify" />],
//   },
//   {
//     year: '2025',
//     title: 'Frontend Developer',
//     description: 'Built animated 3D interfaces using React, Framer Motion & optimized performance.',
//     icons: [<FaReact key="react" />, <FaJs key="js" />, <FaHtml5 key="html" />, <FaCss3Alt key="css" />],
//   },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="w-full py-20 px-4 sm:px-6 md:px-10 bg-black text-white">
//       <div className="max-w-5xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-14">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-2">Skills & Experience</h2>
//           <p className="text-gray-400 text-base sm:text-lg">My journey through technology</p>
//         </div>

//         {/* Centered Timeline */}
//         <div className="relative">
//           {/* Vertical Line */}
//           <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-700 transform -translate-x-1/2"></div>

//           <div className="space-y-12">
//             {skills.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className={`relative flex flex-col md:flex-row items-center md:items-start gap-6 ${
//                   index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
//                 }`}
//               >
//                 {/* Dot */}
//                 <div className="absolute left-1/2 top-2 w-4 h-4 bg-blue-600 border-2 border-white rounded-full z-10 transform -translate-x-1/2 shadow-lg"></div>

//                 {/* Content Box */}
//                 <div
//                   className={`bg-gray-900 text-left rounded-lg shadow-md p-6 w-full md:w-[45%] ${
//                     index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
//                   }`}
//                 >
//                   <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
//                   <span className="text-sm text-gray-400">{item.year}</span>
//                   <p className="text-gray-300 mt-2 mb-4">{item.description}</p>

//                   {/* Icons */}
//                   <div className="flex flex-wrap gap-2">
//                     {item.icons.map((icon, i) => (
//                       <span
//                         key={i}
//                         className="text-white text-xl bg-gray-800 border border-gray-700 px-2 py-1 rounded-md flex items-center gap-2 shadow-sm hover:bg-gray-700 transition"
//                       >
//                         {icon}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
