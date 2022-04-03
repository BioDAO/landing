import type { NextPage } from 'next';
import Head from "next/head";
import ResponsiveNav from "../components/ResponsiveNav"
import Main from '../components/Main'

export default function Home() {
  return (
    <div>
      <Head>  
        <meta name="viewport" content="width-device-width" />
        <meta charSet="utf-8" />
        <title>BioDAO - The global biotech ecosystem enabled by Web3.</title>
        <meta name="description" content="The global biotech ecosystem enabled by Web3."/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="BioDAOxyz" />
        <meta name="twitter:creator" content="@apecoin" />
        <meta property="og_url" content="https://biodao.xyz" />
        <meta property="og:locale" content="BioDAO" />
        <meta property="og:title" content="BioDAO - The global biotech ecosystem enabled by Web3" />
          
      </Head>
      <Main/>

      
    </div>
  );
}
