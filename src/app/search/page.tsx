"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { getEntries } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";
import { ContentfulPost } from "../types/contentful";

function SearchContent() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");
  const [results, setResults] = useState<ContentfulPost[]>([]);

  useEffect(() => {
    async function getSearchResult() {
      if (keyword) {
        const data = (await getEntries({
          content_type: "blogPost",
          keyword: keyword!,
        })) as unknown as ContentfulPost[];
        setResults(data ?? []);
      }
    }
    getSearchResult();
  }, [keyword]);

  return (
    <section className="flex flex-col min-h-screen">
      <div className="max-w-7xl mx-auto p-4 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.length > 0 ? (
            results.map((post, index) => (
              <div
                key={index}
                className="bg-white shadow-md border border-gray-200 rounded-lg mb-5 flex flex-col transition-all duration-300 hover:scale-105"
              >
                <Link href={`/blog/${post.fields.slug}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      className="rounded-t-lg object-cover"
                      src={`https:${post.fields.projectImages?.[0]?.fields?.file?.url}`}
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
                    lorem
                  </p>

                  <p className="text-sm text-gray-500 mb-3">
                    Category: {post.fields.categories?.fields?.name}
                  </p>
                </div>
                <div className="flex m-5">
                  <Link
                    href={`/blog/${post.fields.slug}`}
                    className="text-white bg-black hover:bg-gray-500 font-medium rounded text-xs px-3 py-1"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 sm:col-span-2 md:col-span-3 text-center p-5">
              <h2 className="text-5xl font-bold text-black">
                No results found
              </h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
