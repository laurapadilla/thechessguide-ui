import React from "react";
import { ArrowLeft } from "react-feather";
import { sanityClient, PortableText } from "../../sanity";

import {
  TextWrapper,
  Black,
  Container,
  OpeningDetails,
  OpeningName,
  Moves,
  White,
  Sup,
  BackLinkWrapper,
  Wrapper,
} from "../../styles/styles";
import Link from "next/link";

const Opening = ({ name, id, fullDescription, piece, moves, resources }) => {
  return (
    <Container>
      <Wrapper>
        <OpeningDetails>
          <OpeningName>
            {name}
            <Sup>{id}</Sup>
          </OpeningName>
          {piece === "black" ? <Black /> : <White />}
        </OpeningDetails>
        <Moves>{moves}</Moves>
        <TextWrapper>
          <PortableText blocks={fullDescription} />
        </TextWrapper>
        <h3>Resources</h3>
        {resources.map((item, index) => (
          <div key={index}>
            <Link href={item.url}>{item.resourceName}</Link>
          </div>
        ))}
        <BackLinkWrapper>
          <ArrowLeft />
          <Link href="/">Openings</Link>
        </BackLinkWrapper>
      </Wrapper>
    </Container>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "opening" && slug.current == $pageSlug][0] {
    name, id, piece, blurb, fullDescription, moves, resources[]{...}
  } `;
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
