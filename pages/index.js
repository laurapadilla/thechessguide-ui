import { sanityClient, PortableText } from "../sanity";
import Link from "next/link";

import {
  OpeningWrapper,
  Text,
  Black,
  Container,
  Wrapper,
  OpeningDetails,
  OpeningName,
  Moves,
  White,
  Sup,
} from "../styles/styles";

const Home = ({ openings }) => {
  return (
    <>
      {openings && (
        <Container>
          <Wrapper>
            <article>
              <Text>
                Below are some of the most common openings in chess for both
                white and black pieces.{" "}
              </Text>
              <Text>
                If you’re not familiar with chess, make sure you check out the
                Pieces section to understand how they move.
              </Text>
            </article>
            {openings.map((opening) => (
              <Link
                key={opening.id}
                href={`opening/${opening.slug.current}`}
                passHref>
                <OpeningWrapper>
                  <OpeningDetails>
                    <OpeningName>
                      <Sup>{opening.id}</Sup>
                      {opening.name}
                    </OpeningName>
                    {opening.piece === "black" ? <Black /> : <White />}
                  </OpeningDetails>
                  <Moves>{opening.moves}</Moves>
                  <Text>
                    <PortableText blocks={opening.blurb} />
                  </Text>
                </OpeningWrapper>
              </Link>
            ))}
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[ _type == "opening"]';
  const openings = await sanityClient.fetch(query);

  if (!openings.length) {
    return {
      props: {
        openings: [],
      },
    };
  } else {
    return {
      props: {
        openings,
      },
    };
  }
};

export default Home;
