import React, { useState } from 'react';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    { label: 'USA', value: 'usa', count: 12 },
    { label: 'UK', value: 'uk', count: 34 },
    { label: 'Germany', value: 'germany', count: 4 },
    { label: 'Sri Lanka', value: 'sri-lanka', count: 5 },
    { label: 'India', value: 'india', count: 9 },
    { label: 'Australia', value: 'australia', count: 4 },
  ];

  return (
    <div className="w-64">
      {/* Dropdown Button */}
      <button
        className="w-full bg-gray-800 text-white py-2 px-4 rounded flex justify-between items-center"
        onClick={toggleDropdown}
      >
        Location
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="mt-2 bg-gray-800 text-white rounded shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex justify-between items-center py-2 px-4 hover:bg-gray-700 cursor-pointer"
            >
              <span>{option.label}</span>
              <span>{option.count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
