import React, { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "🎨",
      description: "Creating responsive and interactive user interfaces",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: "⚙️",
      description: "Building scalable server-side applications and APIs",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "PostgreSQL", level: 58 },
        { name: "MongoDB", level: 90 },
      ],
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the impact
            they've delivered across various projects
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                activeCategory === key
                  ? "bg-primary text-white shadow-2xl scale-105"
                  : "bg-white text-gray-600 shadow-lg hover:shadow-xl"
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">
                {skillCategories[activeCategory].icon}
              </span>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {skillCategories[activeCategory].title}
                </h3>
                <p className="text-gray-600">
                  {skillCategories[activeCategory].description}
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <span className="text-lg font-semibold text-gray-800 mr-4">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-primary font-bold text-lg">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3 group-hover:h-4 transition-all duration-300">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-3 rounded-full group-hover:h-4 transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Visualization */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              Tech Stack Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "React", color: "from-blue-500 to-cyan-500" },
                { name: "TypeScript", color: "from-blue-600 to-blue-800" },
                { name: "Node.js", color: "from-green-500 to-green-700" },
                { name: "Tailwind", color: "from-teal-400 to-cyan-500" },
                { name: "Next.js", color: "from-gray-800 to-black" },
                { name: "PostgreSQL", color: "from-blue-700 to-blue-900" },
                { name: "AWS", color: "from-orange-400 to-orange-600" },
                { name: "Docker", color: "from-blue-400 to-blue-600" },
                { name: "PHP", color: "from-blue-400 to-blue-600" },
                { name: "Laravel", color: "from-blue-400 to-blue-600" },
                { name: "Wordpress", color: "from-blue-400 to-blue-600" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="text-center group transform hover:scale-110 transition-transform duration-300"
                >
                  {/* <div
                    className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    {tech.name.slice(0, 2)}
                  </div> */}
                  <span className="text-gray-700 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
