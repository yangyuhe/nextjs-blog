import Link from "next/link";
import Head from "next/head";
export default function FirstPost(props) {
  return (
    <div>
      <Head>
        <title>hexiang is good</title>
        <link rel="icon" href="/favicon.ico?v=2"></link>
      </Head>
      <h1 className="h1">First Post</h1>
      <h2 className="global">First Post</h2>
      <Link href="/">back to </Link>
      <style jsx>{`
        .h1 {
          color: red;
        }
        .demo {
          width: 10px;
        }
      `}</style>
      <style jsx global>{`
        .global {
          height: 10px;
        }
      `}</style>
    </div>
  );
}
export function getServerSideProps(context) {
  return { props: { hello: "xx" } };
}
