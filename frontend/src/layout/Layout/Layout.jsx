// import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Routers from '../../routers/Router/Routers'

const Layout = () => {
  return ( <>
  <Header />
  <main>
    <Routers />
  </main>
  <Footer />
  </>
  );
};

export default Layout