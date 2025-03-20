import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, Heart, Share2, MessageSquare } from 'lucide-react';
import './App.css'
import Header from './assets/Header';
import Sidebar from './assets/Sidebar';

const VideoHostingPlatform = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  // Sample video data
  const videos = [
    { id: 1, title: 'Amazing Sunset Timelapse', author: 'NatureFilms', views: '1.2M', timeAgo: '2 days ago', thumbnail: '/api/placeholder/640/360', duration: '3:45', likes: 45000 },
    { id: 2, title: 'Learn React in 30 Minutes', author: 'CodeMaster', views: '856K', timeAgo: '1 week ago', thumbnail: '/api/placeholder/640/360', duration: '28:15', likes: 32000 },
    { id: 3, title: 'My Trip to Japan 2025', author: 'TravelVlogger', views: '422K', timeAgo: '3 days ago', thumbnail: '/api/placeholder/640/360', duration: '12:30', likes: 18700 },
    { id: 4, title: 'Easy Homemade Pizza Recipe', author: 'ChefCooking', views: '1.5M', timeAgo: '5 days ago', thumbnail: '/api/placeholder/640/360', duration: '15:20', likes: 60200 },
  ];
  
  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
          <Sidebar />
        
        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Trending Videos</h1>
            <p className="text-gray-600 dark:text-gray-400">Watch what the world is viewing right now</p>
          </div>
          
          {/* Featured Video */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden mb-8">
            <div className="relative aspect-video bg-black">
              <img 
                src="/api/placeholder/1280/720" 
                alt="Video thumbnail" 
                className="w-full h-full object-cover"
              />
              
              {/* Video Controls Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="h-16 w-16 bg-blue-600 bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="h-8 w-8 text-white" /> : <Play className="h-8 w-8 text-white ml-1" />}
                </button>
              </div>
              
              {/* Video Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                <div className="flex items-center justify-between text-white mb-2">
                  <div className="flex items-center space-x-4">
                    <button onClick={() => setIsPlaying(!isPlaying)}>
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </button>
                    <button onClick={() => setIsMuted(!isMuted)}>
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </button>
                    <span className="text-sm">1:15 / 3:45</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Settings className="h-5 w-5" />
                    <Maximize className="h-5 w-5" />
                  </div>
                </div>
                
                <div className="h-1 bg-gray-600 rounded-full">
                  <div className="h-1 bg-blue-600 rounded-full" style={{width: '30%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Beautiful Northern Lights in Norway | 4K Drone Footage</h2>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">3.5M views • 1 week ago</p>
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-blue-400"></div>
                    <div>
                      <p className="font-medium">NatureExplorers</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">2.1M subscribers</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                    <Heart className="h-4 w-4" />
                    <span>125K</span>
                  </button>
                  <button className="flex items-center space-x-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm">Witness the incredible Northern Lights (Aurora Borealis) captured with drone footage in Tromsø, Norway. One of nature's most spectacular displays, filmed in stunning 4K resolution.</p>
                <button className="text-blue-600 dark:text-blue-400 text-sm mt-2">Show more</button>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Comments (1.2K)</h3>
                  <button className="text-sm text-blue-600 dark:text-blue-400">Sort by</button>
                </div>
                <div className="flex space-x-4">
                  <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0"></div>
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="Add a comment..." 
                      className="w-full px-3 py-2 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map(video => (
              <div key={video.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium mb-1 line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{video.author}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{video.views} views • {video.timeAgo}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default VideoHostingPlatform;