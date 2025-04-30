import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-3xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Muhammad Awais</h1>
          <p className="text-lg text-gray-600">Cyber Security</p>
          <p className="text-sm text-gray-500">awais@gmail.com | (123) 456-7890 | ISB, PK</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Summary</h2>
          <p className="text-gray-600">
            Passionate and detail-oriented Software Engineer with 5+ years of experience building web applications and services. Skilled in React, Next.js, Node.js, and cloud technologies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800">Senior Developer - Tech Corp</h3>
            <p className="text-sm text-gray-500">Jan 2020 - Present</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Developed scalable web applications using Next.js and Node.js.</li>
              <li>Led a team of 5 developers and coordinated Agile sprints.</li>
              <li>Implemented CI/CD pipelines improving deployment speed by 30%.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-bold text-gray-800">B.S. in Computer Science</h3>
            <p className="text-sm text-gray-500">FAST NUCES, 2019 - 2025</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Next.js</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Node.js</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">TypeScript</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">AWS</span>
          </div>
        </section>
      </div>
    </div>
  );
}
