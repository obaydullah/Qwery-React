import React from "react";
import Header from "../Header";
import Blog from "../Blog";
import BlogTwo from "../BlogTwo";
import ArticleFull from "../ArticleFull";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Blog />
        <ArticleFull />
        <BlogTwo />
        <Footer />
      </main>
    </>
  );
}
