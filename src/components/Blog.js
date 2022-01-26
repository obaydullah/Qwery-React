import React from "react";
import article1 from "../img/article-1.jpg";

export default function Blog() {
  return (
    <>
      <article className="article__area">
        <div className="container">
          <div className="article__inner">
            {/* ////Left Image//// */}
            <div className="article__img">
              <img src={article1} alt="Blog Post" />
            </div>

            {/* ////Right Text///// */}
            <div className="article__text">
              <h4 class="heading__secondary margin__bottom--big">
                Explore the nature beauty
              </h4>

              <h1 class="heading__primary">Have you enjoy your Holiday?</h1>
              <p class="article__para ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis modi aspernatur perspiciatis laudantium incidunt
                labore quibusdam nisi alias tenetur dolor.Lorem ipsum dolor sit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
                eos?
              </p>

              <a href="#" class="article__btn">
                Read more
                <i class="fas fa-arrow-right article__btn--arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
