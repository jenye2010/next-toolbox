import { Item_Digital } from '@/components/item';
import { NextPage } from "next";

interface Props {
  __nextDefaultLocale?: string;
}

const Index: NextPage<Props> = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-primaryBright p-24`}
    >
      <div>
        <Item_Digital />
      </div>
    </main>
  )
}

export async function getStaticProps() {
  return {
    props: {
      __nextDefaultLocale: "default",
    },
  };
}

export default Index;