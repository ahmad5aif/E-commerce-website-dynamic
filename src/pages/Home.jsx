import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Hero />
      <Categories />
    </>
  );
}

export default Home;
