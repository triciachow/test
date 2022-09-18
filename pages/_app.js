import Footer from "../components/Footer";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  );
}
