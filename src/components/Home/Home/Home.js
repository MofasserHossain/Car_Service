import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Services />
        <Review />
        <Team />
      </main>
      <footer style={{ backgroundColor: '#e4ebef' }} className=" py-5">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
