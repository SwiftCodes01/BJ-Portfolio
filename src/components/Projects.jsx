import React, { useState } from "react";
import health from "../assets/health.png";
import crimeReport from "../assets/crimereport.png";
import travel from "../assets/project2.c4212019eafb9ec1de5d.png";
import restaurant from "../assets/project3.44eb7988c5c4cc1d573d.png";
import Food from "../assets/FoodApp.png";
import AICC from "../assets/A.png";
import Capacity from "../assets/CApacity.png";
import logistics from "../assets/seamless.png";
import Ethix from "../assets/ethix.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("featured");

  const projects = {
    featured: [
      {
        id: 1,
        title: "Food Ordering App",
        description:
          "A dynamic food ordering website built with the MERN Stack. It offers a user-friendly platform for seamless online food ordering.",
        image: Food,
        tags: ["React", "Node.js", "MongoDB"],
        category: "frontend",
        liveUrl: "https://food-delivery-frontend-s2l9.onrender.com/",
        githubUrl: "#",
        metrics: [
          { value: "10K+", label: "Monthly Users" },
          { value: "99.9%", label: "Uptime" },
          { value: "2.5s", label: "Load Time" },
        ],
        highlights: [
          "Reduced bounce rate by 40%",
          "Increased conversion by 25%",
          "Scaled to handle Black Friday traffic",
        ],
      },
      {
        id: 10,
        title: "AICC CHURCH",
        description: "A modern church website for AICC",
        image: AICC,
        tags: ["Wordpress", "PHP"],
        category: "frontend",
        liveUrl: "https://aiccchurch.org/",
        githubUrl: "#",
        metrics: [
          { value: "10K+", label: "Monthly Users" },
          { value: "99.9%", label: "Uptime" },
          { value: "2.5s", label: "Load Time" },
        ],
        highlights: [
          "Reduced bounce rate by 40%",
          "Increased conversion by 25%",
        ],
      },

      {
        id: 3,
        title: "FEGIGLOBAL",
        description:
          "Empowering girls, women, widows, and orphans across Nigeria through education, health, advocacy, and sustainable community programs.",
        image: Capacity,
        tags: ["Laravel", "PHP"],
        category: "frontend",
        liveUrl: "https://capacityfornations.com",
        githubUrl: "#",
        metrics: [
          { value: "10K+", label: "Monthly Users" },
          { value: "99.9%", label: "Uptime" },
          { value: "2.5s", label: "Load Time" },
        ],
        highlights: [
          "Reduced bounce rate by 40%",
          "Increased conversion by 25%",
        ],
      },

      {
        id: 2,
        title: "SafeReport - Crime Reporting",
        description:
          "A secure and anonymous frontend interface for community crime reporting. Features a clean, trustworthy design that encourages community participation while ensuring user privacy.",
        image: crimeReport,
        tags: ["React", "NextJs", "Tailwind Css", "Typescript"],
        category: "frontend",
        liveUrl: "https://crime-report-app-lemon.vercel.app",
        githubUrl: "#",
        metrics: [
          { value: "5K+", label: "Active Users" },
          { value: "50ms", label: "Real-time Sync" },
          { value: "95%", label: "User Satisfaction" },
        ],
        highlights: [
          "Real-time updates < 50ms latency",
          "Reduced task completion time by 30%",
          "99.5% bug-free deployment",
        ],
      },
      {
        id: 6,
        title: "PizzaDay",
        description: "A food Restaurant landing web application.",
        image: restaurant,
        tags: ["HTML", "CSS", "AOS.js", "Animate.js"],
        category: "fullstack",
        liveUrl: "https://pizzadayrestaurant.netlify.app/",
        githubUrl: "#",
        metrics: [
          { value: "5K+", label: "Active Users" },
          { value: "50ms", label: "Real-time Sync" },
          { value: "95%", label: "User Satisfaction" },
        ],
        highlights: [
          "Real-time updates < 50ms latency",
          "Reduced task completion time by 30%",
          "99.5% bug-free deployment",
        ],
      },

      {
        id: 7,
        title: "Seamless Move",
        description: "A Logistics web app for Seamless Move",
        image: logistics,
        tags: ["HTML", "CSS", "AOS.js", "Animate.js", "PHP"],
        category: "fullstack",
        liveUrl: "https://seamlessmove.co.uk",
        githubUrl: "#",
        metrics: [
          { value: "5K+", label: "Active Users" },
          { value: "50ms", label: "Real-time Sync" },
          { value: "95%", label: "User Satisfaction" },
        ],
        highlights: [
          "Real-time updates < 50ms latency",
          "Reduced task completion time by 30%",
          "99.5% bug-free deployment",
        ],
      },

      {
        id: 12,
        title: "EthixToken",
        description: "The Future of Decentralized Finance",
        image: Ethix,
        tags: ["HTML", "CSS", "AOS.js", "Animate.js", "PHP"],
        category: "fullstack",
        liveUrl: "https://ethixtoken.com/",
        githubUrl: "#",
        metrics: [
          { value: "5K+", label: "Active Users" },
          { value: "50ms", label: "Real-time Sync" },
          { value: "95%", label: "User Satisfaction" },
        ],
        highlights: [
          "Real-time updates < 50ms latency",
          "Reduced task completion time by 30%",
          "99.5% bug-free deployment",
        ],
      },

      {
        id: 4,
        title: "Olebe Travels & Tour",
        description: "A Travels and Tour landing web application",
        image: travel,
        tags: ["HTML", "CSS", "AOS.js", "Animate.js"],
        category: "frontend",
        liveUrl: "https://olebetravelsandtour.netlify.app/",
        githubUrl: "#",
        metrics: [
          { value: "2.5x", label: "ROI Increase" },
          { value: "85%", label: "Accuracy" },
          { value: "3.1s", label: "Query Speed" },
        ],
      },
    ],

    startup: [
      {
        id: 4,
        title: "Olebe Travels & Tour",
        description: "A Travels and Tour landing web application",
        image: travel,
        tags: ["HTML", "CSS", "AOS.js", "Animate.js"],
        category: "frontend",
        liveUrl: "https://olebetravelsandtour.netlify.app/",
        githubUrl: "#",
        metrics: [
          { value: "2.5x", label: "ROI Increase" },
          { value: "85%", label: "Accuracy" },
          { value: "3.1s", label: "Query Speed" },
        ],
      },
    ],
    openSource: [
      {
        id: 5,
        title: "React Component Library",
        description: "Open-source UI component library with 2K+ GitHub stars",
        image: "/api/placeholder/600/400",
        tags: ["React", "TypeScript", "Storybook", "Jest"],
        category: "frontend",
        liveUrl: "#",
        githubUrl: "#",
        metrics: [
          { value: "2K+", label: "GitHub Stars" },
          { value: "500+", label: "Weekly Downloads" },
          { value: "98%", label: "Test Coverage" },
        ],
      },
    ],
  };

  const filters = [
    {
      key: "featured",
      label: "Featured Projects",
      count: projects.featured.length,
    },
    { key: "startup", label: "Startup Work", count: projects.startup.length },
    {
      key: "openSource",
      label: "Open Source",
      count: projects.openSource.length,
    },
    {
      key: "all",
      label: "All Projects",
      count: Object.values(projects).flat().length,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Project Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world solutions delivering measurable business impact and
            technical excellence
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 relative ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-2xl scale-105"
                  : "bg-gray-100 text-gray-600 shadow-lg hover:shadow-xl"
              }`}
            >
              {filter.label}
              <span
                className={`absolute -top-2 -right-2 text-xs px-2 py-1 rounded-full ${
                  activeFilter === filter.key
                    ? "bg-white text-primary"
                    : "bg-primary text-white"
                }`}
              >
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-20 mt-6">
          {(projects[activeFilter] || Object.values(projects).flat()).map(
            (project) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    {/* <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.metrics.map((metric, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-500">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div> */}

                    {/* Highlights */}
                    {/* {project.highlights && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, index) => (
                            <li
                              key={index}
                              className="flex items-center text-gray-600"
                            >
                              <svg
                                className="w-4 h-4 text-green-500 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )} */}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        className="flex-1 bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
                        target="_blank"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                      {/* <a
                        href={project.githubUrl}
                        className="flex-1 border-2 border-gray-300 text-gray-700 text-center py-3 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Source Code
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can transform your ideas into
              high-performance digital solutions
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Start a Project
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
