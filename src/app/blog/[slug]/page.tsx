import { getEntries } from "@/utils/get-contentful-data";
import Image from "next/image";
import { ContentfulImage, ContentfulPost } from "../../types/contentful";

export default async function PostOnePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const posts = (await getEntries({
    content_type: "blogPost",
    fields_slug: slug,
  })) as unknown as ContentfulPost[];

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        {posts[0].fields.title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts[0].fields.projectImages.map(
          (image: ContentfulImage, index: number) => (
            <div
              key={index}
              className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={`https:${image.fields.file.url}`}
                alt={`Featured Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          )
        )}
      </div>
      <div className="mt-8">
        <span className="text-lg font-semibold">About the Project:</span>
        <div className="mt-4">
          <p>{posts[0].fields.content.content[0].content[1].value}</p>
          <p className="mt-4">
            {posts[0].fields.content.content[1].content[0].value}
          </p>
          <p className="mt-4">
            {posts[0].fields.content.content[2].content[0].value}
          </p>
        </div>
      </div>
    </section>
  );
}
