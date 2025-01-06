import { getEntries } from "@/utils/get-contentful-data";
import { ContentfulPost } from "../types/contentful";

export default async function BlogPage() {
  const posts = (await getEntries({
    content_type: "blogAbout",
  })) as unknown as ContentfulPost[];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-3">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-3 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-gray-600 text-lg text-center">
          {posts[0].fields.description}
        </p>
      </div>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-3xl mt-16">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">History</h2>
        <p className="text-gray-600">{posts[0].fields.history}</p>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-3xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Author</h2>
        <p className="text-gray-600">{posts[0].fields.author}</p>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-3xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Mission And Vision
        </h2>
        <p className="text-gray-600">{posts[0].fields.mission}</p>
      </section>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-3xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Contact Information
        </h2>
        <p className="text-gray-600">{posts[0].fields.contact}</p>
      </div>
    </section>
  );
}
