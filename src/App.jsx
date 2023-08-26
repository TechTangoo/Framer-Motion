import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate loading for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-purple-600">
      <div className="w-full max-w-md">
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-spin h-8 w-8 text-blue-500"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M4.93 4.93L7.76 7.76"></path>
                <path d="M16.24 16.24L19.07 19.07"></path>
                <path d="M2 12H4"></path>
                <path d="M20 12h2"></path>
                <path d="M12 2V4"></path>
                <path d="M12 20v2"></path>
              </svg>
            </motion.div>
          </motion.div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">Welcome to Techtangoo</h1>
            <p className="text-gray-700">Explore the magic of animations!</p>
          </div>
        )}

        {!isLoading && (
          <div className="mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-4 rounded-lg shadow-md mb-4"
            >
              Div 1 Animation
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-4 rounded-lg shadow-md mb-4"
            >
              Div 2 Animation
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-4 rounded-lg shadow-md mb-4"
            >
              Div 3 Animation
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-4 rounded-lg shadow-md mb-4"
            >
              Div 4 Animation
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
