import Layout from "@/components/Layout";
import RecentAds from "@/components/RecentAds";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
   <body>
    <main className="main-content">
     <Layout title="TGC - Home">
        <RecentAds></RecentAds>
      </Layout>
    </main>
  </body>
    </>
  );
}
