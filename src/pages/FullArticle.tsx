import { AlarmClock, Dot } from "lucide-react";
import { client } from "../api";
import { useParams } from "react-router-dom";
import type { ArticleSkeleton } from "../model";
import type { Entry } from "contentful";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { getAssetTitle, getAssetUrl } from "../utils";
import { parseISO, format } from "date-fns";
import BlogPostLoader from "../components/BlogPostLoader";

const FullArticle = () => {
  const [fullArticle, setFullArticle] = useState<Entry<
    ArticleSkeleton,
    "WITHOUT_UNRESOLVABLE_LINKS",
    string
  > | null>(null);
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams();

  const getFullArticle = async () => {
    setIsLoading(true)
    try {
      const article = await client.getEntry<ArticleSkeleton>(id as string);
      console.log(article);
      setFullArticle(article);
      setIsLoading(false)
    } catch (error) {
      console.log("Error fetching full article:", error);
    }
  };

  useEffect(() => {
    getFullArticle();
  }, [id]);

  console.log(fullArticle);

  return (
    <div className="mt-16 mb-8">
      <div className="w-full sm:w-[50%] my-28 mx-auto grid gap-y-16">
        {isLoading ? <BlogPostLoader/> : (
  <div className="">
          <h1 className="text-[24px] sm:text-[32px] font-semibold font-abhaya text-font-color">
            {fullArticle?.fields.blogTitle}
          </h1>
          <div className="flex items-center gap-x-1 text-sm text-gray-400">
            <div className="flex items-center gap-x-1 ">
              <AlarmClock size={15} />
              <p>
                {fullArticle?.fields.createdAt
                  ? format(
                      parseISO(fullArticle.fields.createdAt as string),
                      "dd MMM  yyyy"
                    )
                  : ""}
              </p>
            </div>
            <Dot className="" size={36} />
            <p className="">{fullArticle?.fields.author}</p>
          </div>

          <div className="w-full h-[280px]  rounded-[10px] my-[3%] mx-auto">
            <img
              src={getAssetUrl(fullArticle?.fields.blogImage)}
              alt={getAssetTitle(fullArticle?.fields.blogImage)}
              className="h-full w-full rounded-[10px] object-cover shadow-md"
            />
          </div>

          <div className="prose prose-sm sm:prose-base dark:prose-invert leading-7 text-font-color">
            <ReactMarkdown>{fullArticle?.fields?.blogArticle}</ReactMarkdown>
          </div>
        </div>
        )} 
      
      </div>
    </div>
  );
};

export default FullArticle;
