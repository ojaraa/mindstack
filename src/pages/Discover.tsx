// import { ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";

import type { EntryCollection } from "contentful";
import type { ArticleSkeleton } from "../model";
import { client } from "../api";
import { useEffect, useState } from "react";
import { getAssetUrl } from "../utils";

const Discover = () => {

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
    <div className="mt-16 mb-8">
      <div className="w-full sm:w-[60%] my-28 mx-auto grid gap-y-6">
        {/* <div className=""></div> */}

        {/* <div className="grid grid-cols-2 rounded-2xl h-[400px]">
          <div className="bg-black text-white p-6 rounded-l-2xl flex flex-col justify-center gap-y-5">
            <h1 className="text-[24px] sm:text-[24px] font-semibold font-abhaya text-font-color">
              How Developers Use AI to Speed Up Coding Without Relying on It Too
              Much.
            </h1>

            <p className="text-sm leading-6">
              The rise of AI in software development has been nothing short of
              meteoric. From intelligent code completion to automated testing,
              AI tools are rapidly transforming how developers work. However,
              there's a fine line between leveraging AI for efficiency and
              becoming overly dependent on it.
            </p>

            <Link to={""} className="flex items-center gap-x-0.5">
              <p className="text-sm">Read more</p>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="rounded-r-2xl overflow-hidden">
            <img src="/assets/images/journal-comp.jpg" />
          </div>
        </div> */}

        <h2 className="text-[24px] sm:text-[24px] font-semibold font-abhaya text-font-color">Discover Articles</h2>

        <div className="flex flex-wrap gap-y-4 gap-x-2">
            <div className="bg-[#f3f3f3] px-4 py-1.5 rounded-xl  font-medium cursor-pointer text-xs">
                Technology
            </div>
            <div className="bg-[#f3f3f3] px-4 py-1.5 rounded-xl  font-medium cursor-pointer text-xs">
                AI
            </div>
            <div className="bg-[#f3f3f3] px-4 py-1.5 rounded-xl  font-medium cursor-pointer text-xs">
                Programming
            </div>
            <div className="bg-[#f3f3f3] px-4 py-1.5 rounded-xl  font-medium cursor-pointer text-xs">
                Web Development
            </div>
            <div className="bg-[#f3f3f3] px-4 py-1.5 rounded-xl  font-medium cursor-pointer text-xs">
                Mobile Development
            </div>

        </div>



        <div className="grid sm:grid-cols-2 gap-y-8 gap-x-10 mt-4">
          {articles &&
            articles.items.map((item) => (
            <div className="flex flex-col gap-y-6" key={item.sys.id}>
              <div className="w-full h-[180px] rounded-md overflow-hidden">
                <img
                src={getAssetUrl(item.fields.blogImage)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="">
                <h3 className="leading-7  font-semibold font-abhaya text-font-color">
                  {item.fields.blogTitle as string}
                </h3>
                <p className="mt-2 leading-6 text-sm text-gray-600  ">
                  {item.fields.blogSnippet as string}....
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;

// {[1, 2, 3, 4, 5, 6].map((item) => (
//                 <div className="bg-black text-white p-6 rounded-2xl flex flex-col justify-center gap-y-5">

//                 </div>
//             ))}
