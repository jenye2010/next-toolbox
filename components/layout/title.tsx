import Head from 'next/head';

interface Props {
  children?: string;
}

export const Title = ({ children = '' }: Props) => {
  return (
    <Head>
      <title>
        {`${children}${children === '' ? '' : ' - '}${process.env.NEXT_PUBLIC_TITLE}`}
      </title>
    </Head>
  );
};
