import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import Home from './home/Home';

// import other pages...

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500); // Show loader for 2.5 sec
    return () => clearTimeout(timer);
  }, []);

  const Loader = () => (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFCFB]">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 360, 360],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={{
          width: 120,
          height: 120,
          backgroundImage: `url("/pet2.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '5px',
        }}
      />
    </div>
  );

  if (isLoading) return <Loader />;

  return (
    <Home/>
  );
}

export default App;
