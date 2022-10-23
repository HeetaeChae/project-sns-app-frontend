import wrapper from "../store/configureStore";
import "../styles/globals.css";
import axios from "axios";

import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
