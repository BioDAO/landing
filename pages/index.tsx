import type { NextPage } from 'next';
import Head from "next/head";
import ResponsiveNav from "../components/ResponsiveNav"

export default function Home() {
  return (
    <div>
      <Head>  
          <title>BioDAO - The global biotech ecosystem enabled by Web3.</title>
      </Head>
      <ResponsiveNav/>
    </div>
  );
}
