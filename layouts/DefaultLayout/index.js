import Head from 'next/head';
import PropTypes from 'prop-types';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';

const DefaultLayout = ({ children }) => (
  <>
    <Head>
      <title>Weather App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <Navbar />

    {children}
  </>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
