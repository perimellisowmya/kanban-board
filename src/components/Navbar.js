import React, { useState, useEffect, useRef } from 'react';
import ChevronDownIcon from '@heroicons/react/solid/ChevronDownIcon';
import { useNavigate } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [groupingValue, setGroupingValue] = useState('');
  const [orderingValue, setOrderingValue] = useState('');
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleGroupingChange = (event) => {
    const value = event.target.value;
    setGroupingValue(value);
    switch (value) {
      case '/':
        navigate(value);
        break;
      case '/tickets':
        navigate(value);
        break;
      case '/priority':
        navigate(value);
        break;
      default:
        break;
    }
    localStorage.setItem('groupingValue', value);
  };

  const handleOrderingChange = (event) => {
    const value = event.target.value;
    setOrderingValue(value);
    switch (value) {
      case 'priority':
        // Handle sorting by priority
        break;
      case 'title':
        // Handle sorting by title
        break;
      default:
        break;
    }
    localStorage.setItem('orderingValue', value);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      handleClickOutside(event);
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const storedGroupingValue = localStorage.getItem('groupingValue');
    const storedOrderingValue = localStorage.getItem('orderingValue');
    if (storedGroupingValue) {
      setGroupingValue(storedGroupingValue);
    }
    if (storedOrderingValue) {
      setOrderingValue(storedOrderingValue);
    }
  }, []);

  return (
    <div className="bg-white">
      <div className="flex items-center bg-white-200 py-3 px-4">
        <button
          onClick={handleToggle}
          className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          <span>Display</span>
          <ChevronDownIcon className="w-5 h-5" />
        </button>
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-4 mt-2 bg-white border border-gray-300 rounded-lg shadow-md z-10"
        >
          <div className="p-4 space-y-4">
            <div className="flex items-center">
              <span className="mr-2">Grouping</span>
              <select
                value={groupingValue}
                onChange={handleGroupingChange}
                className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none"
              >
                <option value="/">Status</option>
                <option value="/tickets">User</option>
                <option value="/priority">Priority</option>
              </select>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Ordering</span>
              <select
                value={orderingValue}
                onChange={handleOrderingChange}
                className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>
        
      )}
      
    </div>
  );
}

export default Navbar;
