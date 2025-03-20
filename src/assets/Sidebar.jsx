import { useState } from "react";

export default function Sidebar(){
    const [currentTab, setCurrentTab] = useState('trending');

    return <>
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 hidden md:block">
          <nav>
            <ul className="space-y-2">
              <li>
                <button 
                  className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${currentTab === 'home' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  onClick={() => setCurrentTab('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${currentTab === 'trending' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  onClick={() => setCurrentTab('trending')}
                >
                  Trending
                </button>
              </li>

              <li>
                <button 
                  className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${currentTab === 'library' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  onClick={() => setCurrentTab('library')}
                >
                  Library
                </button>
              </li>
            </ul>
          </nav>
        </aside>
    </>
}