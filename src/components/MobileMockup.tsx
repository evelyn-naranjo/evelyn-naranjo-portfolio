interface MobileMockupProps {
  color?: string;
}

export default function MobileMockup({ color = 'from-rose-600 to-rose-700' }: MobileMockupProps) {
  return (
    <div className="flex items-center justify-center">
      {/* Phone Mockup */}
      <div className="relative w-full max-w-xs">
        {/* Outer Frame */}
        <div className="bg-gray-900 rounded-3xl p-3 shadow-2xl" style={{ aspectRatio: '9/19.5' }}>
          {/* Screen */}
          <div className={`bg-gradient-to-br ${color} rounded-3xl h-full flex flex-col overflow-hidden relative`}>
            {/* Status Bar */}
            <div className="bg-black/20 h-6 flex items-center justify-between px-6 pt-1">
              <span className="text-white text-xs font-semibold">9:41</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8">
              <div className="w-12 h-12 bg-white/30 rounded-full mb-6 backdrop-blur-sm"></div>
              <div className="h-3 bg-white/30 rounded-full w-3/4 mb-3 backdrop-blur-sm"></div>
              <div className="h-2 bg-white/20 rounded-full w-full mb-2 backdrop-blur-sm"></div>
              <div className="h-2 bg-white/20 rounded-full w-5/6 backdrop-blur-sm"></div>
            </div>

            {/* Home Indicator */}
            <div className="flex justify-center pb-2">
              <div className="w-32 h-1 bg-white/40 rounded-full"></div>
            </div>
          </div>

          {/* Speaker */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1.5 bg-gray-900 rounded-b-2xl"></div>
        </div>
      </div>
    </div>
  );
}
