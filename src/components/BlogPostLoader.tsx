import ContentLoader from "react-content-loader";

const BlogPostLoader = () => {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 800 900"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      {/* Title */}
      <rect x="0" y="20" rx="4" ry="4" width="100%" height="35" />
      <rect x="0" y="70" rx="4" ry="4" width="65%" height="35" />

      {/* Meta info */}
      <circle cx="15" cy="135" r="10" />
      <rect x="35" y="125" rx="3" ry="3" width="120" height="20" />

      <circle cx="180" cy="135" r="10" />
      <rect x="200" y="125" rx="3" ry="3" width="150" height="20" />

      {/* Hero image */}
      <rect x="0" y="180" rx="10" ry="10" width="100%" height="350" />

      {/* Body text */}
      <rect x="0" y="550" rx="3" ry="3" width="100%" height="10" />
      <rect x="0" y="575" rx="3" ry="3" width="100%" height="10" />
      <rect x="0" y="595" rx="3" ry="3" width="100%" height="10" />
      <rect x="0" y="615" rx="3" ry="3" width="85%" height="10" />
    </ContentLoader>
  );
};

export default BlogPostLoader;
