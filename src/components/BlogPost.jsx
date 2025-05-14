import React from "react";

function BlogPost({ title, content, date }) {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{content}</p>
    </div>
  );
}

export default BlogPost;
