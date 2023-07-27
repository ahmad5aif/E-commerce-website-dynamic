import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { firebaseDB } from "../../firebase/service";

const ProductCard = ({
  id,
  imgUrl,
  imgalt,
  brandName,
  productName,
  productPrice,
}) => {
  const [isCisked, setIsCisked] = useState(false);

  const userId = useSelector((state) => {
    return state.user[2];
  });

  const isLoggedIn = useSelector((state) => {
    return state.login;
  });

  const navigate = useNavigate();

  const handleAddtoCart = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      setIsCisked(true);
      addDoc(
        collection(firebaseDB, "cart"),
        {
          userId: userId,
          id: id,
          brand: brandName,
          name: productName,
          imgUrl: imgUrl,
          price: productPrice,
          color: "Black",
          quantity: 1,
        },
        { merge: true }
      );
    } else {
      navigate("/signin");
    }
  };

  const handleBuy = () => {
    navigate(`/shop/${id}`);
  };

  return (
    <>
      <div className="group/item relative">
        <div className="lg:w-full lg:h-60 md:w-48 md:h-48 sm:h-60 sm:w-60 w-36 h-36 overflow-hidden rounded-md bg-gray-200 group-hover/item:opacity-75">
          <Link to={"/shop/" + id}>
            <img
              src={imgUrl}
              alt={imgalt}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </Link>
        </div>
        <div className="mt-2 flex justify-between items-stretch flex-col">
          <div>
            <p className="text-sm text-gray-800 capitalize">{brandName}</p>
            <h3 className="text-lg font-medium text-gray-900 capitalize">
              {productName}
            </h3>
            <span className="text-sm font-medium line-through text-red-500">
              ₹{parseInt(productPrice) + 3850}
            </span>
            <span className="text-md font-bold text-gray-800 ">
              {" " + "₹" + productPrice}
            </span>
          </div>
          <div className="sm:w-full mt-2 flex justify-center divide-x divide-gray-900/5 bg-gray-50 invisible sm:group-hover/item:visible">
            {!isCisked ? (
              <>
                <button
                  onClick={handleAddtoCart}
                  className="flex w-1/2 items-center justify-center  text-sm md:text-md font-semibold  text-red-500 hover:bg-gray-100 rounded-md "
                >
                  Add to cart
                </button>

                <button
                  onClick={handleBuy}
                  className="flex  w-1/2 items-center justify-center p-2 text-sm md:text-md font-semibold text-red-500 hover:bg-gray-100 rounded-md"
                >
                  Buy
                </button>
              </>
            ) : (
              <Link
                to={"/cart/" + userId}
                className="w-full text-center items-center justify-center p-2 text-sm md:text-md font-semibold text-green-800 bg-green-200 rounded-lg"
              >
                &#10003; Go to cart
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
