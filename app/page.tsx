import { DemoBadge } from "@/components/demo-badge";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 z-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.5) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, rgba(168, 85, 247, 0.4) 0%, transparent 70%),
            radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.3) 0%, transparent 65%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/30 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-600/20">
              ✨ Modern Starter Template
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Build Amazing Apps
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
              Next.js 16 + Docker + Tailwind CSS 4 + Auth.js 5 + TypeScript starter template to
              kickstart your next project with modern best practices.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <span className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
              Next.js 16
            </span>
            <span className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
              TypeScript
            </span>
            <span className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
              Docker
            </span>
            <span className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
              Tailwind CSS 4
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 cursor-pointer">
              <a
                href="https://github.com/ehsanghaffar/next16-docker-tw4-starter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started →
              </a>
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <DemoBadge />
    </div>
  );
}
