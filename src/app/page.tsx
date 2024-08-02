import React from "react"

const HomePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Developer Dashboard Homepage
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-8 mx-auto max-w-xl">
          Welcome to my Developer Dashboard! This is a basic home page
          showcasing my ability to create an analytics page. For every visitor
          that visits the homepage, the analytics page will update. Please check
          out the analytics tab to explore some insightful data visualizations
          and metrics.
        </p>
        <a
          href="/analytics"
          className="bg-blue-500 text-white text-lg py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-200 inline-block"
        >
          View Analytics
        </a>
      </div>
    </div>
  )
}

export default HomePage
