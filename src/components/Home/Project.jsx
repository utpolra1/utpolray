// src/components/Projects.js

import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/300",
      tags: ["JavaScript","Next.js","React", "Tailwind CSS", "DaisyUI"],
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://via.placeholder.com/300",
      tags: ["JavaScript", "CSS", "HTML"],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r to-indigo-900 from-purple-900">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="bg-blue-950 rounded-lg shadow-md p-4 text-white">
                <img src={project.imageUrl} alt={project.title} className="mb-4" />
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className=" mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
