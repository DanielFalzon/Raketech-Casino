import React from "react";
import Loader from "../ItemComponents/Loader";
import { useParams } from "react-router-dom";
import { useAxiosGet } from "../Hooks/useAxiosGet";

function CasinoReview() {
  const { id } = useParams();
  const url = `http://localhost:8000/wp-json/wp/v2/casino/${id}?_embed`;

  let casino = useAxiosGet(url);
  let content = null;

  if (casino.error) {
    content = (
      <p>
        There was an error or the page doesn't exist please refresh or try again
        later...
      </p>
    );
  }

  if (casino.loading) {
    content = <Loader />;
  }

  if (casino.data) {
    content = (
      <section>
        <img
          alt="example"
          className="pb-4"
          src={casino.data._embedded["wp:featuredmedia"][0].source_url}
          width="100%"
        />
        <div className="jumbotron">
          <h1 className="text-center pb-3"> {casino.data.title.rendered}</h1>

          <div
            dangerouslySetInnerHTML={{ __html: casino.data.content.rendered }}
          ></div>
        </div>
      </section>
    );
  }

  return <div className="container mt-2">{content}</div>;
}

export default CasinoReview;
