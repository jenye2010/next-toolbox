import dynamic from 'next/dynamic';

/**
 * reference:
 * https://stackoverflow.com/questions/53139884/next-js-disable-server-side-rendering-on-some-pages
 */

interface Props {
  children: React.ReactNode;
}

const content = ({ children }: Props) => <>{children}</>;
export const NoSSR = dynamic(() => Promise.resolve(content), {
  ssr: false,
});
