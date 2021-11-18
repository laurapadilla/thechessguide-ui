import React from "react";
import { sanityClient } from "../../sanity";
import styled from "styled-components";

const Container = styled.main`
  background-color: aliceblue;
  padding: 4rem;
`;

const OpeningName = styled.h1`
  font-size: 2.25rem;
`;
const Moves = styled.h4`
  font-size: 2rem;
  font-weight: normal;
`;

export const Sup = styled.sup`
  font-size: 1.5rem;
  vertical-align: top;
  margin-right: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: gray;
`;

const Opening = ({ name, id, description, piece, moves, resources }) => {
  return (
    <Container>
      <article>
        <OpeningName>
          <Sup>{id}</Sup>
          {name}
        </OpeningName>
      </article>
      <p>{piece}</p>
      <Moves>{moves}</Moves>
      <Description>{description}</Description>
    </Container>
  );
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
