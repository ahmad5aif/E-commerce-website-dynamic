import React from "react";

function Categories() {
  return (
    <div
      id="brand"
      className="flex flex-col sm:px-24 md:px-20 px-6 pt-8 sm:w-auto w-[80vw]"
    >
      <div className="flex flex-col ml-5 mb-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-start ">
          Discover all your
          <p className="text-4xl font-bold tracking-tight text-red-600 sm:text-6xl text-start mt-2">
            Favourite brands
          </p>
        </h1>
      </div>

      <div className="grid justify-center items-center lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-3 gap-4 place-items-center place-content-center lg:gap-y-8 w-[80vw] sm:w-auto">
        <div
          className="md:h-44 md:w-44 sm:h-24 sm:w-24 h-16 w-16 overflow-hidden  rounded-lg sm:opacity-0 lg:opacity-100 flex 
        justify-center items-center hover:backdrop-filter hover:bg-slate-100 hover:scale-95 transition-all delay-75"
        >
          <svg
            viewBox="0 0 14 44"
            width="48"
            height="48"
            className="sm:h-60 sm:w-60 h-32 w-32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
          </svg>
        </div>
        <div
          className="md:h-44 md:w-44 sm:h-24 sm:w-24 h-16 w-16 hover:bg-slate-100 hover:scale-95 transition-all delay-75 
        overflow-hidden rounded-lg flex justify-center items-center"
        >
          <img
            src="https://seeklogo.com/images/X/xiaomi-logo-3867428FC8-seeklogo.com.png"
            alt=""
            className="sm:h-20 sm:w-20 h-14 w-14 object-cover object-center rounded-[30%]"
          />
        </div>
        <div
          className="md:h-44 md:w-44 sm:h-24 sm:w-24 h-16 w-16 hover:bg-slate-100 hover:scale-95 transition-all delay-75 
        overflow-hidden rounded-lg flex justify-center items-center sm:opacity-0 lg:opacity-100"
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgODAgMjQiIHdpZHRoPSI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJtMCAwaDgwdjI0aC04MHoiIGZpbGw9IiNmZmM5MTUiLz48cGF0aCBkPSJtMzMuMDIgNy4xNDg4ODg4OWMxLjI1MzMzMzMgMCAyLjQ2MjIyMjIuNDI0NDQ0NDQgMy4zNzc3Nzc4IDEuMTc1NTU1NTV2LTEuMDA0NDQ0NDRoMS43MTc3Nzc4djEwLjkzMTExMTFoLTEuNzE3Nzc3OHYtMWMtLjkuNzQ2NjY2Ny0yLjEwODg4ODkgMS4xNjg4ODg5LTMuMzc3Nzc3OCAxLjE2ODg4ODktMS41NTU1NTU2IDAtMi45NzExMTExLS41NzU1NTU2LTMuOTg0NDQ0NC0xLjYyLTEuMDA0NDQ0NS0xLjAzMTExMTEtMS41NTU1NTU2LTIuNDUzMzMzMy0xLjU1NTU1NTYtNC4wMDY2NjY3IDAtMS41NTU1NTU1LjU1MzMzMzMtMi45ODIyMjIxOSAxLjU1NTU1NTYtNC4wMTc3Nzc3NCAxLjAxNTU1NTUtMS4wNDg4ODg4OSAyLjQzMTExMTEtMS42MjY2NjY2NyAzLjk4NDQ0NDQtMS42MjY2NjY2N3ptLTExLjg5MTExMTEtLjA0YzEuNDA2NjY2NyAwIDIuNjgyMjIyMi41MTMzMzMzMyAzLjU5NTU1NTUgMS40NDg4ODg4OS45NzExMTEyLjk5NTU1NTU1IDEuNDg4ODg4OSAyLjM5MzMzMzMyIDEuNSA0LjA0NjY2NjYydi41NjIyMjIzaC04Ljg0NjY2NjZjLjEwNjY2NjYgMi4wNTMzMzMzIDEuNjczMzMzMyAzLjU3Nzc3NzcgMy43MTExMTExIDMuNTc3Nzc3NyAxLjQ2MjIyMjIgMCAyLjUwODg4ODktLjYyNDQ0NDQgMy4yOTU1NTU1LTEuOTY0NDQ0NGwuMDk1NTU1Ni0uMTYyMjIyMiAxLjQ4ODg4ODkuOTU3Nzc3OC0uMDg2NjY2Ny4xNDg4ODg4Yy0xLjAwODg4ODkgMS43MzU1NTU2LTIuNjY2NjY2NiAyLjY1MzMzMzQtNC43OTU1NTU1IDIuNjUzMzMzNC0zLjIxMTExMTEgMC01LjQ1MzMzMzQtMi4zMTMzMzM0LTUuNDUzMzMzNC01LjYyNDQ0NDUgMC0zLjI3MTExMTA4IDIuMzExMTExMS01LjY0NDQ0NDQxIDUuNDk1NTU1Ni01LjY0NDQ0NDQxem00NS42OTU1NTU1IDBjMS40MDY2NjY3IDAgMi42ODIyMjIzLjUxMzMzMzMzIDMuNTk1NTU1NiAxLjQ0ODg4ODg5Ljk3MTExMTEuOTk1NTU1NTUgMS40ODg4ODg5IDIuMzkzMzMzMzIgMS41IDQuMDQ2NjY2NjJ2LjU2MjIyMjNoLTguODQ2NjY2N2MuMTA2NjY2NyAyLjA1MzMzMzMgMS42NzMzMzM0IDMuNTc3Nzc3NyAzLjcxMTExMTEgMy41Nzc3Nzc3IDEuNDYyMjIyMyAwIDIuNTA4ODg4OS0uNjI0NDQ0NCAzLjI5NTU1NTYtMS45NjQ0NDQ0bC4wOTU1NTU2LS4xNjIyMjIyIDEuNDg4ODg4OC45NTc3Nzc4LS4wODY2NjY2LjE0ODg4ODhjLTEuMDA4ODg4OSAxLjczNTU1NTYtMi42NjY2NjY3IDIuNjUzMzMzNC00Ljc5NTU1NTYgMi42NTMzMzM0LTMuMjExMTExMSAwLTUuNDUzMzMzMy0yLjMxMzMzMzQtNS40NTU1NTU1LTUuNjI0NDQ0NSAwLTMuMjcxMTExMDggMi4zMTMzMzMzLTUuNjQ0NDQ0NDEgNS40OTc3Nzc3LTUuNjQ0NDQ0NDF6bS01MS44NTMzMzMzLjE4ODg4ODg5djEuNjMzMzMzMzNoLTQuOTc3Nzc3Nzd2OS4zMTc3Nzc3OWgtMS43Mzc3Nzc3N3YtMTAuOTUxMTExMTJ6bTQwLjg0LS4xNDg4ODg4OWMyLjQ4ODg4ODkgMCA0LjAzNTU1NTYgMS43MDg4ODg4OSA0LjAzNTU1NTYgNC40NjAwMDAwMXY2LjYyaC0xLjczNzc3Nzh2LTYuNjJjMC0xLjcxNzc3Nzc5LS45ODQ0NDQ1LTIuODI2NjY2NjgtMi41MDg4ODg5LTIuODI2NjY2NjgtMS45NiAwLTIuNjU3Nzc3OCAxLjM1MTExMTA4LTIuNjU3Nzc3OCAyLjYxNTU1NTU4djYuODMzMzMzM2gtMS43Mzc3Nzc4di02LjYyYzAtMS43NDQ0NDQ0My0uOTUzMzMzMy0yLjgyNjY2NjY2LTIuNDg4ODg4OC0yLjgyNjY2NjY2LTEuMjY0NDQ0NSAwLTIuNjE1NTU1Ni45ODIyMjIyMy0yLjYxNTU1NTYgMi40NDQ0NDQ0NnY2Ljk5NTU1NTVoLTEuNzM3Nzc3OHYtMTAuOTI4ODg4ODRoMS43Mzc3Nzc4djEuMDZjLjcxNzc3NzgtLjc4MjIyMjIzIDEuNzQtMS4yMDY2NjY2NyAyLjkzMzMzMzMtMS4yMDY2NjY2NyAxLjc2NjY2NjcgMCAyLjczMzMzMzQuODkzMzMzMzMgMy4yNTMzMzM0IDEuNzQuNzkxMTExMS0xLjEwODg4ODg5IDIuMDU3Nzc3Ny0xLjc0IDMuNTI0NDQ0NC0xLjc0em0tMTMuNzA0NDQ0NC0zLjA3Nzc3Nzc4djE0LjE1Nzc3Nzc5aC0xLjczNzc3Nzh2LTE0LjE1Nzc3Nzc5em0tOS4xNzMzMzM0IDQuODE3Nzc3NzhjLTIuMTE3Nzc3NyAwLTMuNzE1NTU1NSAxLjY4MDAwMDAxLTMuNzE1NTU1NSAzLjkwNjY2NjcxIDAgMi4yMTU1NTU1IDEuNTk3Nzc3OCAzLjg4NDQ0NDQgMy43MTU1NTU1IDMuODg2NjY2NiAyLjE5Nzc3NzggMCAzLjY3MzMzMzQtMS41NjIyMjIyIDMuNjczMzMzNC0zLjg4NjY2NjYgMC0yLjMzNTU1NTYtMS40NzU1NTU2LTMuOTA2NjY2NzEtMy42NzMzMzM0LTMuOTA2NjY2NzF6bS0xMS44NDQ0NDQ0LS4xNDg4ODg4OWMtMS43NTExMTExIDAtMy4yMTMzMzMzIDEuMTY0NDQ0NDQtMy42MzExMTExIDIuODU3Nzc3OGg3Yy0uMzA2NjY2Ny0xLjcxNzc3NzgtMS42MzU1NTU2LTIuODU3Nzc3OC0zLjM2ODg4ODktMi44NTc3Nzc4em00NS42OTMzMzMzIDBjLTEuNzUxMTExMSAwLTMuMjEzMzMzMyAxLjE2NDQ0NDQ0LTMuNjMxMTExMSAyLjg1Nzc3NzhoN2MtLjMwNjY2NjctMS43MTc3Nzc4LTEuNjM1NTU1NS0yLjg1Nzc3NzgtMy4zNjg4ODg5LTIuODU3Nzc3OHoiIGZpbGw9IiMxMTEiLz48L2c+PC9zdmc+"
            alt=""
            className="h-full w-full object-contain object-center"
          />
        </div>

        <div
          className="md:h-44 md:w-44 sm:h-24 sm:w-24 h-16 w-16 hover:bg-slate-100 hover:scale-95 transition-all delay-75 
        overflow-hidden rounded-lg flex justify-center items-center"
        >
          <img
            src="https://seeklogo.com/images/O/oneplus-logo-8454565195-seeklogo.com.png"
            alt=""
            className="sm:h-20 sm:w-20 h-16 w-16 object-contain object-center"
          />
        </div>
        <div
          className="md:h-44 md:w-44 sm:h-24 sm:w-24 h-16 w-16 hover:bg-slate-100 hover:scale-95 transition-all delay-75 
        overflow-hidden rounded-lg flex justify-center items-center sm:opacity-0 lg:opacity-100"
        >
          <img
            src="https://dlcdnimgs.asus.com/images/logo/logo-001.svg"
            alt=""
            className="h-full w-full object-contain object-center"
          />
        </div>
        <div
          className="md:h-44 md:w-44 sm:h-24 sm:w-24 h-16 w-16 hover:bg-slate-100 hover:scale-95 transition-all delay-75 
        overflow-hidden rounded-lg flex justify-center items-center"
        >
          <img
            src="https://www.asus.com/media/Odin/images/header/ROG_hover.svg"
            alt=""
            className="h-28 w-28 object-contain object-center"
          />
        </div>
        <div
          className="md:h-44 md:w-44 sm:h-24 sm:w-24 h-16 w-16 hover:bg-slate-100 hover:scale-95 transition-all delay-75 
        overflow-hidden rounded-lg flex justify-center items-center sm:opacity-0 lg:opacity-100"
        >
          <img
            src="https://brmotorolanew.vtexassets.com/arquivos/c-rd-motorola@2x.png?v=637459707056400000"
            alt=""
            className="h-full w-full object-contain object-center"
          />
        </div>
        <div
          className="md:h-44 md:w-44 sm:h-24 sm:w-24 h-16 w-16 hover:bg-slate-100 hover:scale-95 transition-all delay-75 
        overflow-hidden rounded-lg flex justify-center items-center sm:opacity-0 lg:opacity-100"
        >
          <img
            src="https://seeklogo.com/images/S/samsung-logo-4BDAA5DC5B-seeklogo.com.png"
            alt=""
            className="h-full w-full object-contain object-center"
          />
        </div>
        <div
          className="md:h-44 md:w-44 sm:h-24 sm:w-24 h-16 w-16 hover:bg-slate-100 hover:scale-95 transition-all delay-75 
        overflow-hidden rounded-lg flex justify-center items-center sm:opacity-0 lg:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="22"
            className="h-28 w-28"
            viewBox="0 0 85 22"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0905 13.7856H10.0898H10.0888C5.80572 13.7403 3.03806 11.7032 3.03806 8.59604C3.03806 5.48888 5.80572 3.45175 10.0888 3.40651C14.3738 3.45175 17.1411 5.48888 17.1411 8.59604C17.1411 11.7032 14.3738 13.7403 10.0905 13.7856ZM10.2155 0.898183C10.2144 0.89832 10.1292 0.896816 10.0863 0.895996C10.0424 0.896543 9.95715 0.898183 9.95715 0.898183C4.09395 0.993718 0 4.1591 0 8.5961C0 13.0331 4.09395 16.1986 9.95578 16.294C9.95578 16.294 10.0424 16.2948 10.0851 16.2946C10.1299 16.295 10.2157 16.294 10.2157 16.294C16.0774 16.1986 20.1712 13.0331 20.1712 8.5961C20.1712 4.1591 16.0774 0.993718 10.2155 0.898183Z"
              fill="black"
              className="fill"
            ></path>{" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M74.9195 13.7856H74.9188H74.9177C70.6348 13.7403 67.8671 11.7032 67.8671 8.59604C67.8671 5.48888 70.6348 3.45175 74.9177 3.40651C79.2027 3.45175 81.9701 5.48888 81.9701 8.59604C81.9701 11.7032 79.2027 13.7403 74.9195 13.7856ZM75.0445 0.898183C75.0434 0.89832 74.9584 0.896816 74.9152 0.895996C74.8715 0.896543 74.7862 0.898183 74.7862 0.898183C68.923 0.993718 64.829 4.1591 64.829 8.5961C64.829 13.0331 68.923 16.1986 74.785 16.294C74.785 16.294 74.8715 16.2948 74.9141 16.2946C74.9591 16.295 75.0448 16.294 75.0448 16.294C80.9065 16.1986 85.0003 13.0331 85.0003 8.5961C85.0003 4.1591 80.9065 0.993718 75.0445 0.898183Z"
              fill="black"
              className="fill"
            ></path>{" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M53.3494 13.7856H53.3487H53.3477C49.0648 13.7403 46.2971 11.7032 46.2971 8.59604C46.2971 5.48888 49.0648 3.45175 53.3477 3.40651C57.6326 3.45175 60.4001 5.48888 60.4001 8.59604C60.4001 11.7032 57.6326 13.7403 53.3494 13.7856ZM53.4745 0.898183C53.4734 0.89832 53.3884 0.896816 53.3452 0.895996C53.3015 0.896543 53.2162 0.898183 53.2162 0.898183C50.423 0.943695 48.032 1.68638 46.2932 2.93081V1.61846H43.2591V21.1043H46.2932V14.2617C48.0317 15.506 50.4223 16.2486 53.2149 16.294C53.2151 16.2942 53.3015 16.2948 53.344 16.2946C53.3891 16.295 53.4747 16.294 53.4747 16.294C59.3364 16.1986 63.4303 13.0331 63.4303 8.5961C63.4303 4.1591 59.3364 0.993718 53.4745 0.898183Z"
              fill="black"
              className="fill"
            ></path>{" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.7169 13.7856H31.7162H31.7154C27.4323 13.7403 24.6646 11.7032 24.6646 8.59604C24.6646 5.48888 27.4323 3.45175 31.7154 3.40651C36.0003 3.45175 38.7677 5.48888 38.7677 8.59604C38.7677 11.7032 36.0003 13.7403 31.7169 13.7856ZM31.8472 0.898183C31.8459 0.89832 31.7609 0.896816 31.7179 0.895996C31.674 0.896543 31.5887 0.898183 31.5887 0.898183C28.7955 0.943695 26.4045 1.68638 24.6657 2.93081V1.61846H21.6317V21.1043H24.6657V14.2617C26.4044 15.506 28.7949 16.2486 31.5873 16.294C31.5873 16.294 31.674 16.2948 31.7166 16.2946C31.7616 16.295 31.8473 16.294 31.8473 16.294C37.709 16.1986 41.8028 13.0331 41.8028 8.5961C41.8028 4.1591 37.709 0.993718 31.8472 0.898183Z"
              fill="black"
              className="fill"
            ></path>
          </svg>
        </div>
        <div
          className="md:h-44 md:w-44 sm:h-24 sm:w-24 h-16 w-16 hover:bg-slate-100 hover:scale-95 transition-all delay-75 
        overflow-hidden rounded-lg flex justify-center items-center"
        >
          <svg
            width="72px"
            height="24px"
            viewBox="0 0 103 28"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="h-28 w-28"
          >
            <g
              id="海外一期"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="F14-PC-返回顶部Normal"
                transform="translate(-241.000000, -29.000000)"
              >
                <g id="编组-6">
                  <g id="vivo" transform="translate(240.000000, 29.000000)">
                    <g
                      id="vivo-LOGO"
                      transform="translate(1.000000, 0.000000)"
                      fill="#000"
                    >
                      <path
                        className="vep-wap-logo-path"
                        d="M92.1201187,22.7773568 L83.3531521,22.7773568 C78.4247857,22.7773568 77.9864276,18.7356293 77.9864276,17.5007165 C77.9864276,16.2658037 78.4247857,12.2240763 83.3531521,12.2240763 L92.1201187,12.2240763 C97.0484851,12.2240763 97.4868432,16.2658037 97.4868432,17.5007165 C97.4868432,18.7356293 97.0484851,22.7773568 92.1201187,22.7773568 M92.1201187,7.77940186 L83.3531521,7.77940186 C74.2419976,7.77940186 73.4316287,15.2256518 73.4316287,17.5007165 C73.4316287,19.7759758 74.2419976,27.2222258 83.3531521,27.2222258 L92.1201187,27.2222258 C101.231468,27.2222258 102.041837,19.7759758 102.041837,17.5007165 C102.041837,15.2256518 101.231468,7.77940186 92.1201187,7.77940186"
                        id="Fill-1"
                      ></path>
                      <path
                        className="vep-wap-logo-path"
                        d="M71.6722232,8.23532926 L68.8307758,8.23532926 C67.6137631,8.23532926 67.362967,8.44312615 66.8934784,9.13947923 C66.4241842,9.83602688 58.2963682,22.2443033 58.2963682,22.2443033 C58.0372058,22.6258479 57.7622835,22.7801391 57.4200413,22.7801391 C57.0779936,22.7801391 56.8028767,22.6258479 56.5437143,22.2443033 C56.5437143,22.2443033 48.4158983,9.83602688 47.9466042,9.13947923 C47.4771155,8.44312615 47.2263194,8.23532926 46.0095013,8.23532926 L43.1678593,8.23532926 C42.5139217,8.23532926 42.2146786,8.74664971 42.6257973,9.37101323 C43.0369161,9.99537674 52.3331032,24.1107786 52.3331032,24.1107786 C53.8394361,26.3265005 54.9449623,27.2222841 57.4200413,27.2222841 C59.8951202,27.2222841 61.0008409,26.3265005 62.5073684,24.1107786 C62.5073684,24.1107786 71.8031664,9.99537674 72.2142852,9.37101323 C72.6254039,8.74664971 72.3263554,8.23532926 71.6722232,8.23532926"
                        id="Fill-4"
                      ></path>
                      <path
                        className="vep-wap-logo-path"
                        d="M33.9316764,9.43928657 C33.9316764,8.57716293 34.273335,8.2353098 35.1354586,8.2353098 L37.2832769,8.2353098 C38.1454005,8.2353098 38.4872537,8.57716293 38.4872537,9.43928657 L38.4872537,26.0182879 C38.4872537,26.8804115 38.1454005,27.2222647 37.2832769,27.2222647 L35.1354586,27.2222647 C34.273335,27.2222647 33.9316764,26.8804115 33.9316764,26.0182879 L33.9316764,9.43928657 Z"
                        id="Fill-7"
                      ></path>
                      <path
                        className="vep-wap-logo-path"
                        d="M29.2512459,8.23532926 L26.4097985,8.23532926 C25.1925912,8.23532926 24.9417952,8.44312615 24.4723065,9.13947923 C24.0030124,9.83602688 15.8753909,22.2443033 15.8753909,22.2443033 C15.6160339,22.6256534 15.3411116,22.7801391 14.9988694,22.7801391 C14.6566271,22.7801391 14.3817048,22.6256534 14.1225424,22.2443033 C14.1225424,22.2443033 5.9947264,9.83602688 5.52543229,9.13947923 C5.05613818,8.44312615 4.80514754,8.23532926 3.5883294,8.23532926 L0.746492834,8.23532926 C0.0162852061,8.23532926 -0.206687867,8.74664971 0.204625463,9.37101323 C0.615744226,9.99537674 9.91193135,24.1107786 9.91193135,24.1107786 C11.4180697,26.3265005 12.5237904,27.2222841 14.9988694,27.2222841 C17.4741429,27.2222841 18.5796691,26.3265005 20.0861965,24.1107786 C20.0861965,24.1107786 29.3821891,9.99537674 29.7931133,9.37101323 C30.2044266,8.74664971 29.9814536,8.23532926 29.2512459,8.23532926"
                        id="Fill-13"
                      ></path>
                      <path
                        className="vep-wap-logo-path"
                        d="M33.7359621,4.43800671 C33.0359123,3.73815144 33.0359123,3.18324812 33.7359621,2.48319828 L35.231983,0.987177377 C35.9318383,0.287127538 36.4869362,0.287127538 37.1867914,0.986982811 L38.6830069,2.48319828 C39.3828622,3.18324812 39.3828622,3.73815144 38.6830069,4.43800671 L37.1867914,5.93422218 C36.4869362,6.63427202 35.9318383,6.63427202 35.231983,5.93422218 L33.7359621,4.43800671 Z"
                        id="Fill-10"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Categories;
