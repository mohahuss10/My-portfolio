// src/components/Projects/Projects.jsx
import React from 'react';

const Projects = () => (
  <section id="projects" className="py-12 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

    {/* Project 1: Frontend Booking System */}
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg mb-8 p-6">
      <h3 className="text-2xl font-semibold mb-4">Frontend Booking System</h3>
      <p className="text-gray-700 mb-4">
        A modern booking system built with React. It features a user-friendly interface and allows users to book appointments easily.
      </p>
      <div className="flex justify-between">
        <a
          href="https://github.com/mohahuss10/Booking-app-frontend" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          View Project
        </a>
        <a
          href="https://github.com/mohahuss10/Booking-app-frontend"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>

    {/* Project 2: Simple Flask Backend */}
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg mb-8 p-6">
      <h3 className="text-2xl font-semibold mb-4">Simple Flask Backend</h3>
      <p className="text-gray-700 mb-4">
        A simple backend built with Flask to handle API requests. It includes basic functionality for user authentication and data management.
      </p>
      <div className="flex justify-between">
        <a
          href="https://github.com/mohahuss10/Flask-1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          View Project
        </a>
        <a
          href="https://github.com/mohahuss10/Flask-1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
