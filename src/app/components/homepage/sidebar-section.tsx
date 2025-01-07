import { getEntries } from "@/utils/get-contentful-data";
import Link from "next/link";
import Image from "next/image";
import { ContentfulPost } from "../../types/contentful";

export default async function SidebarPage() {
  const categories = (await getEntries({
    content_type: "blogCategory",
  })) as unknown as ContentfulPost[];

  if (!categories || categories.length === 0) {
    return <div className="text-center p-4">No categories found.</div>;
  }

  return (
    <section>
      {categories.map((category, index) => (
        <Link key={index} href={`/categories/${category.fields.slug}`}>
          <div className="bg-white rounded-lg shadow-md relative lg:overflow-hidden h-12 m-3 flex items-center justify-center transition-all duration-300 hover:scale-105">
            <Image
              src={`https:${category.fields.image.fields.file.url}`}
              alt={category.fields.name}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <h2 className="text-1xl font-semibold text-center text-white z-10 bg-black bg-opacity-30 p-1 rounded">
              {category.fields.name}
            </h2>
          </div>
        </Link>
      ))}
    </section>
  );
}
