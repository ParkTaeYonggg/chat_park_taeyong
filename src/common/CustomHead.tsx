import Head from "next/head";

const CustomHead = ({ title }: { title: string }): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default CustomHead;
