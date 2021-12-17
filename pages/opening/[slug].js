import React from "react";
import { ArrowLeft } from "react-feather";
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
  BackLinkWrapper,
} from "./styles";
import Link from "next/link";

const Opening = ({ name, id, fullDescription, piece, moves, resources }) => {
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
          <PortableText blocks={fullDescription} />
        </Description>
        {resources.map((item, index) => (
          <div key={index}>
            <Link href={item.url}>{item.resourceName}</Link>
          </div>
        ))}
        <BackLinkWrapper>
          <ArrowLeft />
          <Link href="/">Openings</Link>
        </BackLinkWrapper>
      </Container>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "opening" && slug.current == $pageSlug][0] {
    name, id, piece, blurb, fullDescription, moves, resources[]{...}
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
        blurb: opening.blurb,
        fullDescription: opening.fullDescription,
        piece: opening.piece,
        moves: opening.moves,
        resources: opening.resources,
      },
    };
  }
};

export default Opening;
