"use client";
import Comments from "@/app/components/comments/page";
import Image from "next/image";
import Link from "next/link"; // For navigation
import { notFound } from "next/navigation";
import { Blogs } from "@/app/components/blog";

const Slugpage = ({ params }: { params: { id: string } }) => {
  const post = Blogs.find((p) => p.id === params.id);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <main className="container mx-auto px-4 py-12 font-serif bg-gray-50 min-h-screen">
        {/* Title Section */}
        <h1 className="md:text-4xl text-xl text-center font-extrabold text-gray-900 mb-4 flex justify-center items-center">
          {post.title}
        </h1>

        {/* Date Section */}
        <p className="md:text-3xl text-black mb-8 text-center">{post.date}</p>

        {/* Image Section */}
        <div className="mb-8 flex justify-center items-center">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={400}
            className="md:w-2/4 h-auto object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Content Section */}
        <article className="bg-white border border-purple-500 rounded-lg shadow-md p-8 mb-12 text-center">
          <p className="text-lg text-gray-800 leading-relaxed">{post.content}</p>
        </article>

        {/* Comments Section */}
        <section className="bg-white border border-gray-300 rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comments</h2>
          <Comments />
        </section>

        {/* Button Section */}
        <div className="flex justify-center">
          <Link href="/blog">
            <button className="bg-[#7A1CAC] text-white px-6 py-3 rounded-md hover:bg-[#9737cb] transition-colors duration-300">
              Go Back to Blogs
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Slugpage;
