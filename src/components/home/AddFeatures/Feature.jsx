import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Feature() {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  const cards = [
    {
      bgColor: '#213040',
      icon: 'mdi:book-outline',
      title: 'Teaching and Learning',
      description: 'Enhancing educational experiences through innovative methods.',
    },
    {
      bgColor: '#38b788',
      icon: 'clarity:group-line',
      title: 'Collaboration',
      description: 'Empowering teamwork and cross-functional communication.',
    },
    {
      bgColor: '#fab56d',
      icon: 'mdi:book-outline',
      title: 'Resources',
      description: 'Access to quality materials for optimal learning.',
    },
    {
      bgColor: '#f27256',
      icon: 'mdi:book-outline',
      title: 'Support',
      description: 'Reliable guidance and assistance at every step.',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 px-6 md:px-12 my-24">
      {cards.map((card, index) => {
        const isOpen = openCardIndex === index;

        return (
          <motion.div
            key={index}
            layout
            transition={{ layout: { duration: 0.5, type: 'spring' } }}
            onClick={() => handleCardClick(index)}
            className={`relative cursor-pointer text-white shadow-xl rounded-2xl flex flex-col justify-center items-center 
            ${isOpen ? 'w-[320px] p-6' : 'w-[200px] p-4'} h-[320px] transition-all duration-500`}
            style={{ backgroundColor: card.bgColor }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div layout="position" className="flex flex-col items-center text-center">
              <motion.div
                className="text-[4rem] mb-2"
                animate={{ scale: isOpen ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <Icon icon={card.icon} />
              </motion.div>

              <motion.h3
                className="text-lg font-bold"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {card.title}
              </motion.h3>

              <AnimatePresence>
                {isOpen && (
                  <motion.p
                    className="text-sm mt-4 px-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {card.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
