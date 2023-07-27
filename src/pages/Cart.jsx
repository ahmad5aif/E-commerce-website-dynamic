import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Query } from "appwrite";
import { useSelector } from "react-redux";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { firebaseDB } from "../firebase/service";

export default function Cart({ setOpenCart }) {
  const { userId } = useParams();

  const [cartItem, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = query(
      collection(firebaseDB, "cart"),
      where("userId", "==", userId)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cartArray = [];
      querySnapshot.forEach((doc) => {
        cartArray.push({ data: doc.data(), docId: doc._key.path.segments[6] });
      });
      setCartItem(cartArray);
      const amount = Array.from(
        cartArray,
        (item) => item.data.price * item.data.quantity
      );
      setTotal(amount.reduce((a, b) => a + b, 0));
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    setLoading(true);
    await deleteDoc(doc(firebaseDB, "cart", e.target.id));
    setLoading(false);
  };

  return (
    <>
      <div className="flex h-screen flex-col overflow-y-auto bg-white pointer-events-auto md:w-full px-6 md:px-20 sm:px-24 mt-6">
        <div className="flex-1 overflow-y-auto px-6 sm:px-6">
          <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl ">
            Cart
          </h2>
          {total === 0 ? (
            <div className="md:flex flex-auto w-full items-center justify-around">
              <div className="text-center text-4xl mt-40 ">
                <p>Your bag is currently empty</p>
                <Link
                  to="/shop"
                  className="font-medium text-red-500 hover:text-red-400 ml-2 text-sm"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
              <div className="sm:ml-24 ml-32 md:mt-24 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth=".5"
                  stroke="currentColor"
                  class="md:w-60 md:h-60 h-20 w-20 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartItem.map((product) => (
                    <li key={product.docId} className="flex py-6">
                      <div className="sm:h-36 sm:w-36 h-28 w-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.data.imgUrl}
                          alt={product.data.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900 flex-col">
                            <h3 className="capitalize">{product.data.brand}</h3>
                            <h3 className="capitalize">
                              <Link>{product.data.name}</Link>
                            </h3>
                            <div>
                              <span className="text-md">
                                ₹{product.data.price}
                              </span>
                              <span className="ml-4 text-sm text-gray-500 line-through">
                                ₹{product.data.price + 3500}
                              </span>
                            </div>
                          </div>
                          <p className="mt-1 text-sm text-gray-700">
                            {product.data.color}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-700">
                            Qty {product.data.quantity}
                          </p>

                          <div className="flex">
                            <button
                              onClick={handleDelete}
                              id={product.docId}
                              type="button"
                              className="font-medium text-red-500 hover:text-red-400"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        {total !== 0 && (
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>₹{total}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>

            <div className="mt-6">
              <Link
                to="/"
                className="flex items-center justify-center rounded-md border border-transparent bg-red-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-600"
                aria-disabled
              >
                Checkout
              </Link>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                <button
                  type="button"
                  className="font-medium text-red-500 hover:text-red-400 ml-2"
                  onClick={() => setOpenCart(false)}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
