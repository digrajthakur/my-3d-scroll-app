'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Project.css';

type Project = {
    title: string;
    description: string;
    image: string;
    live: string;
    github: string;
    categories: string[];
    tech: string[];
};

const projects: Project[] = [
    {
        title: 'Mercari India',
        description: 'Corporate site built with WordPress, customized themes, and plugins.',
        image: '/mercari-india.png',
        live: 'https://about.in.mercari.com/',
        github: 'https://about.in.mercari.com/',
        categories: ['WordPress', 'Frontend Technologies'],
        tech: ['WordPress', 'PHP', 'DOCKER', 'GCP', 'Frontend Technology', 'GitHub'],
    },
    {
        title: 'Sopecare Website',
        description:
            'Developed a clean, modern Shopify website for Sopecare, a Romanian body care brand, featuring dynamic product listings for hand and body wash, responsive design, and a sleek, minimal UI.',
        image: '/sopecare-com.png',
        live: 'https://sopecare.com/',
        github: 'https://sopecare.com/',
        categories: ['Shopify'],
        tech: ['Shopify', 'JS', 'jQuery',' Liquid'],
    },
    {
        title: 'E-commerce Store',
        description:
            'A responsive Shopify-Powered Home Decor with customized theme and payment integration.',
        image: '/banner.webp',
        live: 'https://casaamber.in/',
        github: 'https://casaamber.in/',
        categories: ['Shopify'],
        tech: ['Shopify', 'Liquid', 'CSS'],
    },
    {
        title: 'Assago Website',
        description:
            'A full-stack wordpress website using CMS, Frontend Technology, and PHP with authentication.',
        image: '/assago-group.webp',
        live: 'https://assagogroup.com/',
        github: 'https://assagogroup.com/',
        categories: ['Frontend Technologies', 'WordPress'],
        tech: ['WordPress', 'PHP'],
    },
    {
        title: 'Roopaks',
        description:
            'From dry fruits to blended spices – Roopak’s delivers freshness, crunch, and tradition in every pack. Order now for express delivery in Delhi NCR!',
        image: '/roopaks.png',
        live: 'https://roopaks.com/',
        github: 'https://roopaks.com/',
        categories: ['Shopify'],
        tech: ['Shopify', 'Liquid'],
    },
    {
        title: 'Shikshapth Education Website',
        description:
            'Developed Shikshapath, an education-focused WordPress website with responsive design, user-friendly layout, and optimized content structure for learning resources.',
        image: '/shikshapath.png',
        live: 'https://shikshapth.co/landing/',
        github: 'https://shikshapth.co/landing/',
        categories: ['WordPress'],
        tech: ['WordPress'],
    },
    {
        title: 'Brightsafety Barriers Website',
        description:
            'Bright Safety Barriers deliver high-visibility, durable solutions designed to enhance safety across industrial and public spaces.',
        image: '/brightsafety.png',
        live: 'https://www.brightsafetybarriers.com.au/',
        github: 'https://www.brightsafetybarriers.com.au/',
        categories: ['WordPress'],
        tech: ['WordPress'],
    },
    {
        title: 'Ruugl Website',
        description:
            'Ruggle is a website built for the company freelance portfolio to showcase clean, responsive, and modern design using WordPress and Elementor.',
        image: '/ruugl.png',
        live: ' https://ruugl.com/',
        github: ' https://ruugl.com/',
        categories: ['WordPress'],
        tech: ['WordPress', 'Elementor', 'Felan'],
    },
    {
        title: 'Flarewave AI Website',
        description:
            'I Developed the FlareWave AI website using React.js with reusable components, API calls for dynamic data handling, and responsive design.',
        image: '/flarewaveai.png',
        live: 'https://flarewaveai.com',
        github: 'https://flarewaveai.com',
        categories: ['Frontend Technologies'],
        tech: ['React.js', 'GitHub'],
    },
    {
        title: 'College Website',
        description:
            'A deepanshu college built with Frontend Technology and Swiper showcasing skills and experience.',
        image: '/deepanshucollege.webp',
        live: 'https://deepanshucollegeofprofessionalcourses.netlify.app/',
        github: 'https://github.com/digrajthakur/Deepanshu-college-of-professional-course',
        categories: ['Frontend Technologies'],
        tech: ['HTML5', 'CSS3', 'JS', 'SWIPER', 'GitHub'],
    },
];

const categories = ['All', 'WordPress', 'Shopify', 'Frontend Technologies'];

export default function ProjectsSection() {
    const [darkMode, setDarkMode] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        const section = document.getElementById('projects');
        if (darkMode) {
            section?.classList.add('dark');
        } else {
            section?.classList.remove('dark');
        }
    }, [darkMode]);



    // Filter projects by selected category
    const filteredProjects =
        activeCategory === 'All'
            ? projects
            : projects.filter((p) => p.categories.includes(activeCategory));

    return (
        <section
            id="projects"
            className="py-20 px-4 sm:px-6 md:px-12 bg-white dark:bg-zinc-900 text-black dark:text-white scroll-snap-start transition-colors duration-500"
        >
            <div className="max-w-6xl mx-auto">
                {/* Dark mode toggle */}
                <div className="flex justify-end mb-6">
                    <label className="toggle-switch" title="Toggle Dark Mode">
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                        />
                        <span className="slider"></span>
                    </label>
                </div>

                {/* Section heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Projects</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Hands-On Projects
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex justify-center gap-4 mb-16 flex-wrap filter-btn">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full font-semibold border transition ${activeCategory === cat
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'border-gray-400 text-gray-700 dark:text-gray-300 dark:border-gray-600'
                                } hover:bg-blue-600 hover:text-white`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="project-card rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6 project-cards">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>

                                {/* Tech Badges */}
                                <div className="flex flex-wrap gap-2 mb-4 tech-skill">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="tech-badge text-xs font-medium px-2 py-1 rounded-full select-none"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-6 text-sm tech-link">
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 hover:text-blue-500"
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        title="Live Project"
                                    >
                                        <FaExternalLinkAlt /> Live
                                    </motion.a>

                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 hover:text-blue-500"
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        title="View Code"
                                    >
                                        <FaGithub /> Code
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}






