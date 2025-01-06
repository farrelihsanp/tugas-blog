import { getEntries } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";
import { ContentfulCategories } from "../../types/contentful";

export default async function PopularSection() {
  const popularCategory = (await getEntries({
    content_type: "blogCategory",
    fields_popular: true,
  })) as unknown as ContentfulCategories[];

  return (
    <section className="max-w-7xl mx-auto p-6">
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Categories
        </h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          sed maxime voluptatibus odio voluptates nobis dicta eaque veritatis
          maiores voluptatem, neque, inventore laboriosam magni quo impedit vel
          expedita, sapiente in.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-9">
        {popularCategory.map((category, index) => (
          <Link key={index} href={`/categories/${category.fields.slug}`}>
            <div className="bg-white rounded-lg shadow-md relative overflow-hidden h-64 flex items-center justify-center transition-all duration-300 hover:scale-105">
              <Image
                src={`https:${category.fields.image.fields.file.url}`}
                alt={category.fields.name}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
              <h2 className="text-3xl font-semibold text-center text-white z-10 bg-black bg-opacity-30 p-1 rounded">
                {category.fields.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
