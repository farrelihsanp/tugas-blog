import { getEntries } from "@/utils/get-contentful-data";
import { ContentfulPost } from "../types/contentful";

export default async function BlogPage() {
  const posts = (await getEntries({
    content_type: "blogAbout",
  })) as unknown as ContentfulPost[];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-5 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 mb-5 w-full max-w-3xl transition-transform transform hover:scale-105">
        <h1 className="text-3xl font-bold text-left text-gray-800 mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-gray-700 text-lg text-left">
          {posts[0].fields.description}
        </p>
      </div>

      <section className="bg-white shadow-lg rounded-lg p-8 mb-5 w-full max-w-3xl transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-semibold text-left text-gray-800 mb-3">
          History
        </h2>
        <p className="text-gray-600 text-left">{posts[0].fields.history}</p>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-8 mb-5 w-full max-w-3xl transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-semibold text-left text-gray-800 mb-3">
          Author
        </h2>
        <p className="text-gray-600 text-left">{posts[0].fields.author}</p>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-8 mb-5 w-full max-w-3xl transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-semibold text-left text-gray-800 mb-3">
          Mission And Vision
        </h2>
        <p className="text-gray-600 text-left">{posts[0].fields.mission}</p>
      </section>

      <div className="bg-white shadow-lg rounded-lg p-8 mb-5 w-full max-w-3xl transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-semibold text-left text-gray-800 mb-3">
          Contact Information
        </h2>
        <p className="text-gray-600 text-left">{posts[0].fields.contact}</p>
      </div>
    </section>
  );
}
