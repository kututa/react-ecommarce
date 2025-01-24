import { useState } from 'react';
import './App.css';
import Header from './assets/components/header.jsx';
import HomePage from './assets/components/Homepage.jsx';
import ProductListing from './assets/components/ProductList.jsx';
import Banner from './assets/components/Banner.jsx';

function App() {
  return (
    <>
      <Header />

      <HomePage />
<ProductListing />

<Banner />

    </>
  );
}

export default App;
