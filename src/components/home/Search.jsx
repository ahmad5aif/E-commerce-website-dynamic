import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseDB } from "../../firebase/service";

const Search = ({ setIsOpenPanel }) => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onSnapshot(
      collection(firebaseDB, "phoneCollection"),
      (doc) => {
        console.log("Current data: ", doc.docs);
        let data = [];
        doc.docs.forEach((e) =>
          data.push({
            data: e._document.data.value.mapValue.fields,
            id: e._key.path.segments[6],
          })
        );
        setProducts(data);
      }
    );
    return () => unsub();
  }, []);

  const fetchSearchResult = (value) => {
    const result = products.filter((item) => {
      return (
        value &&
        item.data.name.stringValue.toLowerCase().includes(value.toLowerCase())
      );
    });
    setData(result);
  };

  const handleChange = (value) => {
    setValue(value);
    fetchSearchResult(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setValue("");
    setData("");
    setIsOpenPanel(false);
    document.querySelector("body").style.overflow = "auto";
    navigate(`/shop/${e.target.id}`);
  };

  return (
    <>
      <div className="">
        <div className="flex mx-auto max-w-xl items-center justify-stretch  bg-white shadow-sm transition ease-in-out rounded-lg px-3 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-left text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            onChange={(e) => handleChange(e.target.value)}
            autoFocus="true"
            value={value}
            id="name"
            name="name"
            type="name"
            required
            placeholder="Type to Search..."
            className="block w-full appearance-none h-14 px-3 sm:text-base text-gray-900 placeholder:text-gray-500 focus:outline-none text-sm sm:leading-6"
          />
        </div>

        {/* searchresults */}
        <div className="mx-auto max-w-xl mt-2 shadow-sm">
          {data.length !== 0 && (
            <div className="sm:max-h-[70vh] max-h-96 p-1 flex flex-col rounded-md overflow-y-auto bg-white shadow-lg ring-1 ring-gray-900/5 transition ease-in-out delay-150">
              {data.map((item) => (
                <span
                  onClick={handleClick}
                  id={item.id}
                  className="text-sm font-medium tracking-wide px-6 py-4   cursor-pointer text-gray-800 leading-6 border-b border-[#f1f5f9] transition linear bg-white hover:bg-gray-100 hover:text-gray-900"
                >
                  {item.data.name.stringValue}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
