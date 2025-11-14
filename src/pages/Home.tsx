import { type EntryCollection } from "contentful";
import { AlarmClock, Dot } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { ArticleSkeleton } from "../model";
import { client } from "../api";
import { getAssetTitle, getAssetUrl } from "../utils";
import { parseISO, format } from "date-fns";
import BlogPostLoader from "../components/BlogPostLoader";

const Home = () => {
  const [articles, setArticles] =
    useState<EntryCollection<ArticleSkeleton> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const getArticles = async () => {
    setIsLoading(true);
    try {
      const entries = await client.getEntries<ArticleSkeleton>({
        content_type: "mindstackBlog",
      });
      setArticles(entries);
      console.log(entries);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching articles:", error);
    }

    console.log("Articles state:", articles);
  };

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <div className="mt-16 mb-8 min-h-screen">
      <div className="w-full sm:w-[50%] my-28 mx-auto grid gap-y-16">
        {isLoading
          ? //   <div>Loading.....</div>
            Array.from({ length: 3 }).map((_, index) => (
              <BlogPostLoader key={index} />
            ))
          : articles &&
            articles.items.map((article) => (
              <Link
                to={`${article.sys.id}`}
                className="mb-8"
                key={article.sys.id}
              >
                <h1 className="text-[24px] sm:text-[32px] font-semibold font-abhaya text-font-color">
                  {(article?.fields.blogTitle as string) ?? ""}
                </h1>
                <div className="flex items-center gap-x-1 text-sm text-gray-400">
                  <div className="flex items-center gap-x-1 ">
                    <AlarmClock size={15} />

                    <p>
                      {format(
                        parseISO(article?.fields.createdAt as string),
                        "EEE MMM dd yyyy"
                      )}
                    </p>
                  </div>
                  <Dot className="" size={36} />

                  <p>{article?.fields.author as string}</p>
                </div>

                <div className="w-full h-[280px]  rounded-[10px] my-[3%] mx-auto">
                  <img
                    src={getAssetUrl(article?.fields.blogImage)}
                    alt={getAssetTitle(article?.fields.blogImage)}
                    className="h-full w-full rounded-[10px] object-cover shadow-md"
                  />
                </div>

                <div className="text-sm">
                  <p className="leading-6">
                    {article?.fields.blogSnippet as string}...
                  </p>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Home;
