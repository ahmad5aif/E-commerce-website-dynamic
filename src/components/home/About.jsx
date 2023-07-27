import React from "react";

const links = [
  { name: "Internship program", href: "#" },
  { name: "Meet our leadership", href: "#" },
  { name: "Open roles", href: "#" },
  { name: "Our values", href: "#" },
];

const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "50+" },
];

const socials = [
  {
    name: "Instagram",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        id="instagram"
        className="sm:w-10 sm:h-10 w-6 h-6"
      >
        <linearGradient
          id="a"
          x1="1.464"
          x2="14.536"
          y1="14.536"
          y2="1.464"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFC107"></stop>
          <stop offset=".507" stopColor="#F44336"></stop>
          <stop offset=".99" stopColor="#9C27B0"></stop>
        </linearGradient>
        <path
          fill="url(#a)"
          d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
        ></path>
        <linearGradient
          id="b"
          x1="5.172"
          x2="10.828"
          y1="10.828"
          y2="5.172"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFC107"></stop>
          <stop offset=".507" stopColor="#F44336"></stop>
          <stop offset=".99" stopColor="#9C27B0"></stop>
        </linearGradient>
        <path
          fill="url(#b)"
          d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
        ></path>
        <linearGradient
          id="c"
          x1="11.923"
          x2="12.677"
          y1="4.077"
          y2="3.323"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFC107"></stop>
          <stop offset=".507" stopColor="#F44336"></stop>
          <stop offset=".99" stopColor="#9C27B0"></stop>
        </linearGradient>
        <circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle>
      </svg>
    ),
  },
  {
    name: "Facebook",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Ebene 1"
        viewBox="0 0 1024 1024"
        id="facebook-logo-2019"
        className="sm:w-10 sm:h-10 w-6 h-6"
      >
        <path
          fill="#1877f2"
          d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
        ></path>
        <path
          fill="#fff"
          d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Youtube",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2500"
        height="1756"
        viewBox="5.368 13.434 53.9 37.855"
        id="youtube"
        className="sm:w-10 sm:h-10 w-6 h-6"
      >
        <path
          fill="#FFF"
          d="M41.272 31.81c-4.942-2.641-9.674-5.069-14.511-7.604v15.165c5.09-2.767 10.455-5.301 14.532-7.561h-.021z"
        ></path>
        <path
          fill="#E8E0E0"
          d="M41.272 31.81c-4.942-2.641-14.511-7.604-14.511-7.604l12.758 8.575c.001 0-2.324 1.289 1.753-.971z"
        ></path>
        <path
          fill="#CD201F"
          d="M27.691 51.242c-10.265-.189-13.771-.359-15.926-.803-1.458-.295-2.725-.95-3.654-1.9-.718-.719-1.289-1.816-1.732-3.338-.38-1.268-.528-2.323-.739-4.9-.323-5.816-.4-10.571 0-15.884.33-2.934.49-6.417 2.682-8.449 1.035-.951 2.239-1.563 3.591-1.816 2.112-.401 11.11-.718 20.425-.718 9.294 0 18.312.317 20.426.718 1.689.317 3.273 1.267 4.203 2.492 2 3.146 2.035 7.058 2.238 10.118.084 1.458.084 9.737 0 11.195-.316 4.836-.57 6.547-1.288 8.321-.444 1.12-.823 1.711-1.479 2.366a7.085 7.085 0 0 1-3.76 1.922c-8.883.668-16.426.813-24.987.676zM41.294 31.81c-4.942-2.641-9.674-5.09-14.511-7.625v15.166c5.09-2.767 10.456-5.302 14.532-7.562l-.021.021z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Twitter",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        id="twitter"
        className="sm:w-10 sm:h-10 w-6 h-6"
      >
        <path
          fill="#03A9F4"
          d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"
        ></path>
      </svg>
    ),
  },
];

const About = ({ scrollRef }) => {
  return (
    <>
      <div
        ref={scrollRef}
        id="about-section"
        className="relative isolate overflow-hidden bg-transparent pt-16 sm:pt-4 sm:px-24 md:px-20 border-t-1 bg-slate-100"
      >
        <div className="mx-auto max-w-full px-6">
          <div className="mx-auto max-w-2xl lg:mx-0 sm:px-0 px-6">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-start ">
                Work with us
                <p className="text-4xl font-bold tracking-tight text-red-600 sm:text-6xl text-start mt-4">
                  Reach out
                </p>
              </h1>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-8 w-20 h-20 text-red-500 animate-bounce"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="mt-6 max-w-7xl text-md sm:text-lg leading-8 text-gray-500">
              This time, our new collection will shelter you from the harsh
              elements of a world that doesn't care if you live or die.
            </p>
          </div>
          <div className="mx-auto sm:mt-6 mt-3 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-2 sm:place-items-center place-items-center gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-900 md:grid-cols-2 md:flex lg:gap-x-10 underline underline-offset-4 sm:no-underline">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:translate-y-1 transition-all hover:text-red-500 "
                >
                  {link.name}{" "}
                  <p className="hidden sm:block" aria-hidden="true">
                    &rarr;
                  </p>
                </a>
              ))}
            </div>
            <dl className="sm:mt-10 mt-6 sm:place-items-start place-items-center grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse group">
                  <dt className="text-base leading-7 text-gray-500 group-hover:-translate-y-10 transition-all delay-75">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl text-center sm:text-start font-bold leading-9 tracking-tight text-gray-900 group-hover:translate-y-10 transition-all delay-75 ">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <dl className="sm:mt-10 mt-6 place-items-center sm:place-items-start grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {socials.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col-reverse group gap-2"
                >
                  <a
                    href="#"
                    className="sm:text-2xl text-lg text-center font-semibold leading-9 tracking-tight text-gray-900 group-hover:-translate-y-12 transition-all delay-75 "
                  >
                    {item.name}
                  </a>
                  <dt className="mx-auto sm:mx-0 group-hover:translate-y-12 transition-all delay-75 ">
                    {item.svg}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <p className="sm:mt-8 mt-4 text-sm leading-8 text-gray-500 text-center">
          ©Copyright 2023
        </p>
      </div>
    </>
  );
};

export default About;
