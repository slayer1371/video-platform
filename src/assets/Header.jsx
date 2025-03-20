import { Upload, Search } from "lucide-react"

export default function Header(){
    return <>
     {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
        <div className="flex items-center space-x-2">
          <div className="text-xl font-bold text-blue-600">RecruitMate</div>
        </div>
        
        <div className="flex-1 mx-4 max-w-2xl">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search videos..." 
              className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 h-5 w-5" />
          </div>
        </div>
        
        {/* <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </button>
          <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600"></div>
        </div> */}
      </header>
    </>
}