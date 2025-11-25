export const DemoBadge = () => (
  <div className="fixed right-4 bottom-4 z-10 sm:right-6 sm:bottom-6">
    <a
      href="https://github.com/ehsanghaffar/next16-docker-tw4-starter"
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative overflow-hidden rounded-lg bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 p-0.5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="rounded-md bg-white dark:bg-gray-950 px-4 py-3">
          <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
            <span className="text-sm">⭐ Star on GitHub</span>
          </div>
        </div>
      </div>
    </a>
  </div>
);
