export interface ContentfulImage {
  fields: {
    file: {
      url: string;
    };
  };
}

export interface ContentfulCategories {
  fields: {
    popular: boolean;
    name: string;
    slug: string;
    description: string;
    image: ContentfulImage;
    id: number;
    fields: {
      slug: string;
    };
  };
}

export interface ContentfulPost {
  fields: {
    title: string;
    slug: string;
    image: ContentfulImage;
    categories: ContentfulCategories;
    description: string;
    history: string;
    author: string;
    mission: string;
    contact: string;
    projectImages: ContentfulImage[];
    popular: boolean;
    new: boolean;
    Featured: boolean;
    // tags: string[];
    // tagsColor: string;
    // tagsIcon: string;
    value: string;
    content: DescriptionValue;
    id: number;
    name: string;
  };
}
