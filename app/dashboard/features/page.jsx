'use client';
import React from 'react';
import { FaRobot, FaRedo, FaMicrophone, FaChartBar, FaUserShield, FaQuestion } from 'react-icons/fa';

const features = [
  {
    icon: <FaRobot className="text-blue-600 text-3xl" />,
    title: 'AI-Generated Questions',
    description: 'Get dynamic and role-specific questions powered by AI models like Gemini or OpenAI.',
  },
  {
    icon: <FaRedo className="text-blue-600 text-3xl" />,
    title: 'Unlimited Retakes',
    description: 'Practice as many mock interviews as you want with full flexibility.',
  },
  {
    icon: <FaMicrophone className="text-blue-600 text-3xl" />,
    title: 'Voice Input & Webcam',
    description: 'Simulate real interviews with voice-based answers and optional webcam support.',
  },
  {
    icon: <FaChartBar className="text-blue-600 text-3xl" />,
    title: 'AI Feedback & Scoring',
    description: 'Receive detailed feedback on your responses: grammar, clarity, and correctness.',
  },
 
  {
    icon: <FaUserShield className="text-blue-600 text-3xl" />,
    title: 'Secure Authentication',
    description: 'Login securely with Clerk and keep your interview history protected.',
  },
];

const FeatureCards = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">🚀 Features</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-5 border rounded-xl shadow-sm hover:shadow-lg transition-all bg-white"
          >
            <div className="mb-3">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
