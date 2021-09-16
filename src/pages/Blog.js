import React from "react";
import { useSelector } from "react-redux";

const Blog = () => {
  const blogData = useSelector((store) => store.app.blog);

  console.log(blogData);

  return <div>Blog</div>;
};
export default Blog;
