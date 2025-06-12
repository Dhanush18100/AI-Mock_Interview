'use client';
import React from 'react';
import { FaUserCheck, FaClipboardList, FaMicrophoneAlt, FaRobot, FaChartLine } from 'react-icons/fa';


const steps = [
  {
    icon: <FaUserCheck className="text-blue-600 text-3xl" />,
    title: '1. Sign Up or Log In',
    description: 'Create an account or log in securely using Clerk to access the interview dashboard.',
  },
  {
    icon: <FaClipboardList className="text-blue-600 text-3xl" />,
    title: '2. Create a Mock Interview',
    description: 'Choose your job role, experience level, and interview type (technical/HR).',
  },
  {
    icon: <FaMicrophoneAlt className="text-blue-600 text-3xl" />,
    title: '3. Answer with Voice',
    description: 'Respond to questions using voice input for a real interview feel. Webcam is optional.',
  },
  {
    icon: <FaRobot className="text-blue-600 text-3xl" />,
    title: '4. AI Evaluation',
    description: 'Our AI analyzes your answers and provides instant feedback on content, clarity, and confidence.',
  },
  {
    icon: <FaChartLine className="text-blue-600 text-3xl" />,
    title: '5. View Report & Improve',
    description: 'Access your performance report and retry interviews to improve over time.',
  },
];

const HowItWorksSection = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">🛠️ How It Works</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow hover:shadow-md transition-all bg-white"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default HowItWorksSection;
