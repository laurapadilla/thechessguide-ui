import React from "react";
import { sanityClient, PortableText } from "../../sanity";
import {
  Black,
  Container,
  OpeningDetails,
  OpeningName,
  Moves,
  Description,
  White,
  Sup,
} from "./styles";
import Link from "next/link";

const Opening = ({ name, id, description, piece, moves, resources }) => {
  console.log(resources);
  return (
    <>
      <Container>
        <OpeningDetails>
          <OpeningName>
            <Sup>{id}</Sup>
            {name}
          </OpeningName>
          {piece === "black" ? <Black /> : <White />}
        </OpeningDetails>
        <Moves>{moves}</Moves>
        <Description>
          <PortableText blocks={description} />
        </Description>
        {resources.map((item, index) => (
          <div key={index}>
            <Link href={item.url}>{item.resourceName}</Link>
          </div>
        ))}
      </Container>
      <Link href="/">Back</Link>
    </>
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
