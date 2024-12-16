import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
      <footer className="bg-white p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">

            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link to="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/in/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</Link>
                </li>
                <li>
                    <Link to="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Twitter</Link>
                </li>
                <li>
                    <Link to="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hover:underline">YouTube</Link>
                </li>
            </ul>
      </footer>

  )
}
