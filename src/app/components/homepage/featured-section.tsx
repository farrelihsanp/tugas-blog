import { getEntries } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";
import { ContentfulPost } from "../../types/contentful";

export default async function FeaturedSection() {
  const posts = (await getEntries({
    content_type: "blogPost",
    fields_featured: true,
  })) as unknown as ContentfulPost[];

  return (
    <section className="max-w-7xl mx-auto p-6">
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad
          sunt porro iure illum voluptatum rem quas blanditiis minus aspernatur
          doloremque deserunt, delectus laboriosam perspiciatis praesentium
          magni. Laboriosam, nulla delectus.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts?.map((post, index) => (
          <article
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105"
          >
            <Link href={`/blog/${post.fields.slug}`}>
              <div className="relative h-48 w-full">
                <Image
                  className="object-cover"
                  src={`https:${post.fields.projectImages[0].fields.file.url}`}
                  alt={post.fields.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (min-width: 640px) 50vw, 33vw"
                />
              </div>
            </Link>
            <div className="flex-1 p-4 flex flex-col">
              <Link href={`/blog/${post.fields.slug}`}>
                <h3 className="text-lg font-semibold transition-colors">
                  {post.fields.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-500 mt-1">
                Category:{" "}
                <span className="font-medium">
                  {post.fields.categories.fields.name}
                </span>
              </p>
              <div className="mt-auto">
                <Link
                  href={`/blog/${post.fields.slug}`}
                  className="mt-2 inline-block text-white bg-black hover:bg-gray-600 font-medium text-xs px-3 py-1 text-center transition-colors"
                >
                  Read more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
