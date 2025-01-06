import { getEntries } from "@/utils/get-contentful-data";
import Link from "next/link";
import Image from "next/image";
import { ContentfulPost, ContentfulCategories } from "../../types/contentful";

export default async function CategoriesSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const categories = (await getEntries({
    content_type: "blogCategory",
    fields_slug: slug,
  })) as unknown as ContentfulCategories[];

  const posts = (await getEntries({
    content_type: "blogPost",
  })) as unknown as ContentfulPost[];

  const filteredPosts = posts?.filter(
    (post) =>
      post.fields.categories &&
      post.fields.categories.fields.slug === categories[0].fields.slug
  );

  return (
    <section className="items-center justify-center mx-auto max-w-[1100px] p-6 h-screen">
      <div className="mb-6 text-center text-3xl font-semibold">
        <p>{filteredPosts[0]?.fields.categories.fields.name}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {filteredPosts?.map((post, index) => (
          <article
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <Link href={`/blog/${post.fields.slug}`}>
              <h2 className="text-xl font-bold p-4 border-b">
                {post.fields.title}
              </h2>
              <div className="relative h-64 w-full">
                {post.fields.projectImages.length > 0 && (
                  <Image
                    src={`https:${post.fields.projectImages[0].fields.file.url}`}
                    alt={`Featured Image`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
