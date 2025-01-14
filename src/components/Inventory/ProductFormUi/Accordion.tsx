import React, { ReactNode } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';

type AccordionProps = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, isOpen, onToggle, children }) => {
  return (
    <section className="bg-white rounded mt-6">
      <button
        type="button"
        className="w-full flex justify-between items-center py-3 transition-colors duration-300 border-b-2"
        onClick={onToggle}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="transition-transform duration-300">
          <IoIosArrowDropdown
            className={`text-3xl ${isOpen ? 'transform rotate-180' : ''}`}
          />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default Accordion;
