"use client"; 

import Link from "next/link";
import { Blogs } from "../components/blog";
import Image from "next/image";
const Blogpage = () => {
  return (
    <main className="container mx-auto px-4 py-12 bg-gray-100">
        <div className="text-center  mb-7">
            <h1 className="text-purple-900 text-2xl font-bold tracking-tight md:text-5xl capitalize">
            Explore Our Latest Blogs
            </h1>
            <div className="w-48 h-1 mb-2 rounded-full bg-pink-600 inline-flex"></div>
          </div>
    
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Blogs.map((blog) => (
        <li
          key={blog.id}
          className="bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow  p-6"
        >
          <Image src={blog.image} alt={blog.title} width={500} height={500} className="w-full h-48 object-contain rounded-t-lg mb-4 hover:scale-110 duration-500 hover:duration-500 rounded-lg hover:rounded-lg" />
          <p className="text-black text-2xl font-bold hover:text-purple-900 transition-colors duration-300 cursor-pointer  mb-4 line-clamp-2 ">
            {blog.title}
          </p>
          <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
            {blog.content}
          </p>
          <div className="py-2">
            <h1>{blog.date}</h1>
          </div>
          <Link href={`/blog/${blog.id}`} className="hover:text-[#7A1CAC] text-2xl font-medium font-serif leading-relaxed cursor-pointer pt-5">
            Read More...
          </Link>
        </li>
      ))}
    </ul>
  </main>
  )
}

export default Blogpage