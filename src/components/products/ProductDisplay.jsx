import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../hooks/productSlice";
import Loading from "../Loading";
import { firebaseDB } from "../../firebase/service";

const brands = ["Samsung", "Apple", "Motorola", "Google", "Xiaomi"];

const ProductDisplay = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const filterData = useSelector((state) => {
    return state.filter;
  });

  const sortData = useSelector((state) => {
    return state.sort;
  });

  const products = useSelector((state) => {
    return state.products;
  });

  useEffect(() => {
    setLoading(true);
    const colRef = collection(firebaseDB, "phoneCollection");
    let q = query(
      colRef,
      where("brand", "in", filterData.length === 0 ? brands : filterData)
    );
    const unsub = onSnapshot(q, (doc) => {
      setLoading(false);
      let data = [];
      doc.docs.forEach((e) =>
        data.push({
          data: e._document.data.value.mapValue.fields,
          id: e._key.path.segments[6],
        })
      );
      if (sortData !== "" && sortData === "orderAsc") {
        data.sort(
          (a, b) => a.data.price.integerValue - b.data.price.integerValue
        );
        dispatch(setProducts(data));
      } else if (sortData !== "" && sortData === "orderDesc") {
        data.sort(
          (a, b) => b.data.price.integerValue - a.data.price.integerValue
        );
        dispatch(setProducts(data));
      } else {
        dispatch(setProducts(data));
        console.log(data);
      }
    });
    return () => unsub();
  }, [filterData, sortData]);

  return (
    <>
      <Filter />
      {loading ? (
        <div className="h-screen">
          <Loading />
        </div>
      ) : (
        <div className="relative flex justify-center">
          <div className="lg:px-24 md:px-20 sm:px-6 lg:max-w-full md:max-w-3xl sm:max-w-xl">
            <span className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl my-2">
              All
            </span>
            <span className="text-4xl font-bold tracking-tight text-red-500 sm:text-6xl my-2">
              {" "}
              Deals
            </span>
            <div className="mt-8 grid grid-cols-2 gap-x-5 sm:gap-y-8 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 justify-evenly w-full">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  imgUrl={product.data.imgUrl.stringValue}
                  imgalt={product.data.name.stringValue}
                  brandName={product.data.brand.stringValue}
                  productName={product.data.name.stringValue}
                  productPrice={product.data.price.integerValue}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDisplay;
