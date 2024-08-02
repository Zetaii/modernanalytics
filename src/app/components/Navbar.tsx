// components/Navbar.tsx

import React from "react"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a
            href="/"
            className="text-white text-2xl font-bold hover:text-gray-300"
          >
            ModernAnalytics
          </a>
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/analytics" className="text-gray-300 hover:text-white">
            Analytics
          </a>
        </div>
        <div className="text-white text-lg font-bold">Created By: Zetai</div>
      </div>
    </nav>
  )
}

export default Navbar
