import { sanityClient } from "../sanity";

const Home = () => {
  return <>Left col navigation</>;
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
