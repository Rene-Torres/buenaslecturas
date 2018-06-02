import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Header/footer'

const Layout = (props) => {
  return (
    <div>
      <Header/>
      <div>
        {props.children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;