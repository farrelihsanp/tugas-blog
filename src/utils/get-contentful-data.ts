import * as contentful from "contentful";

const client = contentful.createClient({
  space: "3s6kvp1vkhac",
  accessToken: "1YChLmxtyI5BRJoCj1hrUghNmoY6fO0aa0gRnbgyv9o",
  environment: "master",
});

export async function getEntries({
  content_type,
  fields_popular,
  fields_slug,
  fields_title,
  fields_featured,
  fields_new,
  keyword,
  limit,
  skip,
}: {
  content_type: string;
  fields_popular?: boolean;
  fields_slug?: string;
  fields_title?: string;
  fields_featured?: boolean;
  fields_new?: boolean;
  keyword?: string;
  limit?: number;
  skip?: number;
}) {
  try {
    const data = await client.getEntries({
      content_type,
      limit,
      skip,
      "fields.popular": fields_popular,
      "fields.slug": fields_slug,
      "fields.title": fields_title,
      "fields.Featured": fields_featured,
      "fields.new": fields_new,
      query: keyword,
    });
    return data.items;
  } catch (error) {
    console.error(error);
    return null;
  }
}
