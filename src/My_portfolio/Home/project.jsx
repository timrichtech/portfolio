import React from "react";
import photo from "/HotelManagement.png";
import saas from "/saas.png";
import portfolio from "/portfolio.png";

const projects = [
  // {
  //   title: "School Management System",
  //   description:
  //     "A responsive school management platform for managing students, teachers, classes, attendance, fees, and academic records.",
  //   image: "../Media/pic.jpg",
  //   technologies: ["React", "JavaScript", "Tailwind CSS", "Django"],
  //   live: "#",
  //   github: "#",
  // },
  {
    title: "Figma to react saas landing page",
    description:
      "A modern responsive  saas landing page that allows customer to purchase a subscription, create an account for membership and view about the company.",
    image: saas,
    technologies: ["React", "JavaScript", "Material UI"],
    live: "https://hotma.netlify.app/",
    github: "#",
  },
  {
    title: "Hotel & Restaurant Management",
    description:
      "A SaaS management platform designed to help hotels and restaurants manage operations, subscriptions, and business activities.",
    image: photo,
    technologies: ["React", "JavaScript", "Django"],
    live: "",
    github: "#",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website showcasing my skills, experience, projects, and contact information.",
    image: portfolio,
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
];
// dark:bg-[#070B22]

function Projects() {
  return (
    <section id="project" className="md:py-20 py-10 px-6 bg-transparent ">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-green-600 dark:text-green-400 font-semibold uppercase tracking-wider">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            Projects I've Handled
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 dark:text-gray-400 text-lg">
            Here are some of the projects I've worked on, using modern
            technologies to build responsive and user-friendly applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group  justify-center bg-gray-800 dark:bg-gray-900 rounded-2xl overflow-hidden
                         border border-gray-200 dark:border-gray-800
                         shadow-sm hover:shadow-xl
                         transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover
                             group-hover:scale-105
                             transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-3 md:p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-400 text-base ">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5 justify-center">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full
                                 bg-green-600 text-white
                                 dark:bg-green-600 dark:text-white text-wrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-5 mt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600
                               dark:text-blue-400 hover:underline"
                  >
                    View Project →
                  </a>
                  {/* 
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-700
                               dark:text-gray-300 hover:underline"
                  >
                    Source Code
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        {/* <div className="text-center mt-14">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3 rounded-xl
                       bg-gray-900 text-white font-semibold
                       hover:bg-gray-700
                       dark:bg-blue-600 dark:hover:bg-blue-700
                       transition"
          >
            View More Projects →
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Projects;
