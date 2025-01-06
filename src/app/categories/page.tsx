import { getEntries } from "@/utils/get-contentful-data";
import Link from "next/link";
import Image from "next/image";
import { ContentfulPost } from "../types/contentful";

export default async function CategoriesPage() {
  const categories = (await getEntries({
    content_type: "blogCategory",
  })) as unknown as ContentfulPost[];

  const newPost = (await getEntries({
    content_type: "blogPost",
    fields_new: true,
  })) as unknown as ContentfulPost[];

  if (!categories || categories.length === 0) {
    return <div className="text-center p-4">No categories found.</div>;
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index}>
            <Link href={`/categories/${category.fields.slug}`}>
              <div className="bg-white rounded-lg shadow-md relative overflow-hidden h-64 flex items-center justify-center transition-all duration-300 hover:scale-105">
                <Image
                  src={`https:${category.fields.image.fields.file.url}`}
                  alt={category.fields.name}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
                <div className="z-10">
                  <h2 className="text-3xl font-semibold text-center text-white z-10 bg-black bg-opacity-30 p-1 rounded">
                    {category.fields.name}
                  </h2>
                </div>
              </div>
            </Link>
            <div className="mt-4 p-2">
              <p className="font-semibold">New Project:</p>
              {newPost?.map((post, index) =>
                post.fields.categories.fields.name === category.fields.name ? (
                  <div key={index} className="mt-2">
                    <Link href={`/blog/${post.fields.slug}`}>
                      <div className=" text-black hover:text-white hover:bg-black w-fit p-1 hover:scale-105 transition-all duration-300">
                        {post.fields.title}
                      </div>
                    </Link>
                  </div>
                ) : null
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
