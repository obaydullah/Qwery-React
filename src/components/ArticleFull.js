import React from "react";

export default function ArticleFull() {
  return (
    <>
      <article className="article__full">
        <div className="container">
          <div class="article__full--content">
            <div class="article__full--content-text">
              <h4 class="heading__secondary margin__bottom--small">Bromo</h4>

              <h1 class="heading__primary margin__bottom--small ">
                Stedy your steps, We will climb together!
              </h1>
              <p class="article__para margin__bottom--big">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis modi aspernatur perspiciatis laudantium incidunt
                labore quibusdam nisi alias tenetur dolor.Lorem ipsum dolor sit.
                lorem10
              </p>

              <a href="#" class="article__btn">
                Read more
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
