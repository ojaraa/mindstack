import type { Asset, EntryFieldTypes, EntrySkeletonType ,} from "contentful";

interface BlogImageAsset extends Asset {
  fields: {
    title: string;
    description: string;
    file?: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}
export interface ArticleSkeleton extends EntrySkeletonType {
contentTypeId: "mindstackBlog";
 fields: {
    blogTitle: EntryFieldTypes.Text;
    blogSnippet: EntryFieldTypes.Text;
    author: EntryFieldTypes.Text;
    createdAt: EntryFieldTypes.Date;
    blogImage: BlogImageAsset;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    blogArticle: EntryFieldTypes.Text;
  };
}

// interface BlogImageAsset extends Asset {
//   fields: {
//     title: string;
//     description: string;
//     file: {
//       url: string;
//       details: {
//         size: number;
//         image: {
//           width: number;
//           height: number;
//         };
//       };
//       fileName: string;
//       contentType: string;
//     };
//   };
// }

// export interface ArticleSkeleton extends EntrySkeletonType {
//   contentTypeId: "mindstackBlog";
//   fields: {
//     blogTitle: string;
//     blogSnippet: string;
//     author: string;
//     createdAt: string;
//     blogImage: BlogImageAsset;
//     tags: string[];
//     blogArticle: string;
//   };
// }