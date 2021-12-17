import { sanityClient, PortableText } from "../sanity";
import Link from "next/link";

import { Navbar } from "../components/Navbar";

import { Main, Nav, OpeningsContainer, OpeningWrapper } from "../styles/styles";
import {
  Black,
  Container,
  OpeningDetails,
  OpeningName,
  Moves,
  Description,
  White,
  Sup,
} from "./opening/styles";

const Home = ({ openings }) => {
  return (
    <>
      {openings && (
        <OpeningsContainer>
          <article>
            <h3>
              Below are some of the most common openings in chess for both white
              and black pieces.{" "}
            </h3>
            <h3>
              If you’re not familiar with chess, make sure you check out the
              Pieces section to understand how they move.
            </h3>
          </article>
          {openings.map((opening, index) => (
            <Link
              key={opening._id}
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
                <Description>
                  <PortableText blocks={opening.blurb} />
                </Description>
              </OpeningWrapper>
            </Link>
          ))}
        </OpeningsContainer>
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[ _type == "opening" ]';
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
