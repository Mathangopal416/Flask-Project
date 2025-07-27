import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchProductDetails } from "./api";
import ProductDetail from "./components/ProductDetail";
import SaltInfo from "./components/SaltInfo";
import Reviews from "./components/Reviews";
import Alternatives from "./components/Alternatives";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchProductDetails().then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="app-container">
      <ProductDetail product={data.product} />
      <SaltInfo salts={data.salts} />
      <Reviews reviews={data.reviews} />
      <Alternatives alternatives={data.alternatives} />
    </div>
  );
}

export default App;
