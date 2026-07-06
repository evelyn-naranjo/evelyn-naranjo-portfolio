interface WebMockupProps {
  color?: string;
}

export default function WebMockup({ color = 'from-indigo-600 to-indigo-700' }: WebMockupProps) {
  return (
    <div className="flex items-center justify-center">
      {/* Laptop Mockup */}
      <div className="relative w-full max-w-sm">
        {/* Screen */}
        <div className={`bg-gradient-to-br ${color} rounded-xl p-1 shadow-2xl`}>
          <div className="bg-white rounded-lg p-4">
            {/* Browser Header */}
            <div className="bg-gray-100 rounded-t-lg px-4 py-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
            </div>
            
            {/* Content Area */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-40 rounded-b-lg flex items-center justify-center">
              <div className="text-center px-4">
                <div className="h-6 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full mb-3 w-2/3 mx-auto"></div>
                <div className="h-4 bg-gray-300 rounded-full mb-2 w-full"></div>
                <div className="h-4 bg-gray-300 rounded-full w-4/5 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Base */}
        <div className="flex justify-center">
          <div className="w-2/3 h-3 bg-gray-800 rounded-b-2xl shadow-lg"></div>
        </div>
        <div className="w-1/4 h-1 bg-gray-600 mx-auto rounded-full"></div>
      </div>
    </div>
  );
}
