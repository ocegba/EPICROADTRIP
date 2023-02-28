import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';



function Layout({ children, title }) {

  document.title = title
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;