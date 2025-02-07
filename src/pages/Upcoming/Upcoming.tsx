import React from 'react';
import Dropdown from '@/components/dropdownMenu/DropdownMenu'; // Import your dropdown component
import UpcomingCard from '@/components/UpcomingCard/UpcomingCard';

const MainPage: React.FC = () => {
  return (
    <div className="bg-primary">
      <h1 className="text-2xl font-bold ms-60">Upcoming Events</h1>
      <div>
        <div className="flex justify-between items-center mb-6">  
          <input
            type="text"
            placeholder="Search by name"
            className="bg-gray-800 text-white me-80 px-4 py-2 rounded w-1/3 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="flex bg-gray-900 text-white min-h-screen p-6 gap-6">
          {/* Sidebar with Dropdown Menus */}
          <aside className="flex flex-col gap-2">
           <Dropdown />
           <Dropdown />
           <Dropdown />
          </aside>
          {/* Main Content with Cards */}
          <main className="flex-1">
            {/* Cards */}
            <div className="flex flex-col gap-6">
              <UpcomingCard/>
              <UpcomingCard/>
              <UpcomingCard/>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainPage;