import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Counter from "../components/products/Counter";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import { firebaseDB } from "../firebase/service";

const Product = () => {
  const { productId } = useParams();

  const [item, setItem] = useState({});
  const [isCisked, setIsCisked] = useState(false);

  const [color, setColor] = useState("Yellow");

  const count = useSelector((state) => {
    return state.itemCount;
  });

  const userId = useSelector((state) => {
    return state.user[2];
  });

  const isLoggedIn = useSelector((state) => {
    return state.login;
  });

  const navigate = useNavigate();

  // fetching item based on params below
  useEffect(() => {
    const unsub = onSnapshot(
      doc(firebaseDB, "phoneCollection", productId),
      (doc) => {
        setItem(doc.data());
      }
    );
    return () => unsub();
  }, [productId]);

  const handleAddtoCart = (e) => {
    console.log(userId);
    e.preventDefault();
    if (isLoggedIn) {
      setIsCisked(true);
      addDoc(
        collection(firebaseDB, "cart"),
        {
          userId: userId,
          id: productId,
          brand: item.brand,
          name: item.name,
          imgUrl: item.imgUrl,
          price: item.price,
          color: color,
          quantity: count,
        },
        { merge: true }
      );
    } else {
      navigate("/signin");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="overflow-y-auto mt-6 md:px-20 lg:px-24 px-6 flex flex-col">
      <div className="flex sm:flex-row flex-col sm:gap-5">
        <div className="sm:w-1/2 md:max-h-max rounded-lg bg-gray-100">
          <img
            className="object-cover object-center h-full w-full rounded-lg"
            src={item.imgUrl}
            alt={item.name}
          />
        </div>
        <div className="sm:w-1/2 lg:mt-12 flex flex-col justify-center">
          <h2 className="text-2xl mb-2 font-semibold text-gray-800 sm:pr-12 capitalize">
            {item.brand}
          </h2>
          <h2 className="text-3xl sm:mb-8 font-bold text-gray-900 sm:pr-12 capitalize">
            {item.name}
          </h2>
          <div className="mt-2 mb-2 sm:mb-8">
            <span className="text-2xl font-bold text-red-500">
              ₹{item.price}
            </span>
            <span className=" ml-4 text-md text-gray-500 line-through">
              ₹{parseInt(item.price) + 3500}
            </span>
          </div>

          <div className="mt-2">
            <h4 className="text-md font-medium text-gray-900">
              Specifications
            </h4>
            <p className="mt-2 text-sm  text-gray-800">
              Exynos 1280 (5 nm) chipset gives tremendous performance. This
              comes with Super AMOLED, 120Hz, 1000 nits (peak) display having
              Corning Gorilla Glass 5 protection.
            </p>
          </div>
          {/* Rating  */}
          <div className="mt-4">
            <div className="mb-2">
              <h4 className="text-sm font-medium text-gray-900">Rating</h4>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <svg
                  className="text-red-500 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="text-red-500 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="text-red-500 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="text-red-500 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="text-gray-200 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="sr-only">3.9 out of 5 stars</p>
              <p className="ml-3 text-sm font-medium text-gray-500">
                675 reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      <section
        aria-labelledby="options-heading"
        className="flex sm:my-8 sm:flex-row flex-col justify-between gap-5"
      >
        <div className="sm:mt-6 mt-4 sm:w-1/4 w-1/2">
          <h4 className="text-sm font-medium text-gray-900">Quantity</h4>
          <Counter />
        </div>

        <div className="sm:mt-6 sm:w-1/4 w-1/4 ">
          <h4 className="text-sm font-medium text-gray-900">Color</h4>
          {/* <!-- Colors --> */}
          <fieldset className="mt-4">
            <legend className="sr-only">Choose a color</legend>
            <span className="flex items-center space-x-3">
              <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-yellow-200">
                <input
                  onChange={(e) => e.target.checked && setColor(e.target.value)}
                  type="radio"
                  value="Yellow"
                  name="color-choice"
                  className="sr-only"
                  aria-labelledby="color-choice-0-label"
                />
                <span id="color-choice-0-label" className="sr-only">
                  Yellow
                </span>
                <span
                  aria-hidden="true"
                  className="h-8 w-8 bg-yellow-300 rounded-full border border-black border-opacity-10 active:ring-gray-600 active:ring-1 active:ring-offset-2"
                ></span>
              </label>
              <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                <input
                  onChange={(e) => e.target.checked && setColor(e.target.value)}
                  type="radio"
                  name="color-choice"
                  value="Gray"
                  className="sr-only"
                  aria-labelledby="color-choice-1-label"
                />
                <span id="color-choice-1-label" className="sr-only">
                  Gray
                </span>
                <span
                  aria-hidden="true"
                  className="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10 active:ring-gray-600 active:ring-1 active:ring-offset-2"
                ></span>
              </label>

              <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                <input
                  onChange={(e) => e.target.checked && setColor(e.target.value)}
                  type="radio"
                  name="color-choice"
                  value="Black"
                  className="sr-only"
                  aria-labelledby="color-choice-2-label"
                />
                <span id="color-choice-2-label" className="sr-only">
                  Violet
                </span>
                <span
                  aria-hidden="true"
                  className="h-8 w-8 bg-violet-500 rounded-full border border-black border-opacity-10 active:ring-gray-600 active:ring-1 active:ring-offset-2"
                ></span>
              </label>
            </span>
          </fieldset>
        </div>
        <div className="flex w-full sm:w-1/2 sm:mt-6">
          {!isCisked ? (
            <button
              onClick={handleAddtoCart}
              type="submit"
              className="sm:my-6 flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-8 py-3 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-1 focus:ring-red-400"
            >
              Add to cart
            </button>
          ) : (
            <p className="sm:my-6 flex w-full items-center justify-center rounded-md border border-transparent bg-green-200 px-8 py-3 text-base font-medium text-green-800">
              &#10003; Added to cart
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
export default Product;
