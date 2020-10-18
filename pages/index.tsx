import React from "react";
import { GetServerSideProps } from "next";

type Props = {
  name: string;
};

const Home: React.FunctionComponent<Props> = ({ name }) => (
  <div>
    <p>Hello {name}!</p>
  </div>
);
export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const name = query.name instanceof Array ? query.name.join(", ") : query.name;
  return {
    props: {
      name: name || "World",
    },
  };
};
