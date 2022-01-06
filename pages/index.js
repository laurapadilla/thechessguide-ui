import { sanityClient, PortableText } from "../sanity";
import Link from "next/link";

import {
  OpeningWrapper,
  TextWrapper,
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
            {openings.map((opening) => (
              <Link
                key={opening.id}
                href={`opening/${opening.slug.current}`}
                passHref>
                <OpeningWrapper>
                  <OpeningDetails>
                    <OpeningName>
                      {opening.name}
                      <Sup>{opening.id}</Sup>
                    </OpeningName>
                    {opening.piece === "black" ? <Black /> : <White />}
                  </OpeningDetails>
                  <Moves>{opening.moves}</Moves>
                  <TextWrapper>
                    <PortableText blocks={opening.blurb} />
                  </TextWrapper>
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
  const query = '*[ _type == "opening"] | order(id asc)';
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
