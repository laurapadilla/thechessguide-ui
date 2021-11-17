import React from "react";
import { sanityClient } from "../../sanity";

const Opening = ({ name }) => {
  return <h1>{name}</h1>;
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "opening" && slug.current == $pageSlug][0] {
    name, id, piece, description, moves, resources[]{...}
  }`;
  const opening = await sanityClient.fetch(query, { pageSlug });

  if (!opening) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        name: opening.name,
        id: opening.id,
        description: opening.description,
        piece: opening.piece,
        moves: opening.moves,
        resources: opening.resources,
      },
    };
  }
};

export default Opening;
