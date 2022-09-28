import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { ThemeProvider } from "../context/ThemeContext";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </ThemeProvider>
    </>
  );
}
