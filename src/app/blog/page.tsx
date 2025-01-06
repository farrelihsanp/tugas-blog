import { getEntries } from "@/utils/get-contentful-data";
import Link from "next/link";
import Image from "next/image";
import { ContentfulPost } from "../types/contentful";

export default async function BlogPage() {
  const posts = (await getEntries({
    content_type: "blogPost",
  })) as unknown as ContentfulPost[];

  return (
    <section className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts?.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-gray-200 rounded-lg mb-5 flex flex-col transition-all duration-300  hover:scale-105"
          >
            <Link href={`/blog/${post.fields.slug}`}>
              <div className="relative h-48 w-full">
                <Image
                  className="rounded-t-lg object-cover"
                  src={`https:${post.fields.projectImages[0].fields.file.url}`}
                  alt="Featured Image"
                  fill
                  sizes="(max-width: 640px) 100vw, (min-width: 640px) 50vw, 33vw"
                />
              </div>
            </Link>
            <div className="p-5 flex-1">
              <Link href={`/blog/${post.fields.slug}`}>
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  {post.fields.title}
                </h5>
              </Link>
              <p className="font-normal text-gray-700 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>

              <p className="text-sm text-gray-500 mb-3">Category: lorem</p>
            </div>
            <div className="flex m-5">
              {" "}
              <Link
                href={`/blog/${post.fields.slug}`}
                className="text-white bg-black hover:bg-gray-500 font-medium rounded text-xs px-3 py-1"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
