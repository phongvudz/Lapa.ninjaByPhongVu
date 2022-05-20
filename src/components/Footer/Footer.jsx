const Footer = () => {
  return (
    <footer className=" bg-slate-800 px-12 py-8 text-white" >
      <div className="flex flex-col justify-center items-center px-[15px] md:flex-row md:justify-between">
        <p className="my-2">Copyright © 2018 Chen, Yi-Ya.</p>
        <div className="flex gap-2 md:gap-6 my-2">
        <svg className="bg-white rounded-full hover:bg-green-400    "
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 640 640"
        >
          <path d="M380.001 120.001h99.993V0h-99.993c-77.186 0-139.986 62.8-139.986 139.986v60h-80.009V320h79.985v320h120.013V320h99.994l19.996-120.013h-119.99v-60.001c0-10.843 9.154-19.996 19.996-19.996v.012z" />
        </svg>
        <svg className="bg-white rounded-full hover:bg-green-400  "
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 128 128"
        >
          <path
            fill="#231f20"
            d="M63.999 7.989c-30.883 0-56.009 25.126-56.009 56.01 0 30.885 25.126 56.012 56.009 56.012 30.885 0 56.011-25.127 56.011-56.012-.001-30.884-25.127-56.01-56.011-56.01zm29.81 41.402a23.97 23.97 0 0 1-5.464 5.798c.009.325.015.65.015.975 0 16.334-12.429 33.229-33.229 33.229a33.135 33.135 0 0 1-17.905-5.244.997.997 0 0 1-.402-1.177.99.99 0 0 1 1.056-.658c.877.101 1.746.151 2.584.151 4.08 0 7.968-1.097 11.381-3.193a12.318 12.318 0 0 1-8.842-8.221 1.003 1.003 0 0 1 .204-.969.993.993 0 0 1 .938-.317c.188.036.377.067.565.093-3.473-2.213-5.726-6.104-5.726-10.412v-.143a1 1 0 0 1 1.485-.874c.435.241.886.45 1.349.626a12.318 12.318 0 0 1-2.742-7.762c0-2.178.577-4.322 1.668-6.199a1 1 0 0 1 1.64-.13c5.319 6.522 13.051 10.625 21.368 11.381a12.57 12.57 0 0 1-.088-1.493c0-6.797 5.531-12.327 12.329-12.327 3.207 0 6.31 1.265 8.599 3.487a21.637 21.637 0 0 0 6.351-2.519 1 1 0 1 1 1.464 1.163 12.225 12.225 0 0 1-2.32 4.188 21.278 21.278 0 0 0 2.487-.924 1 1 0 0 1 1.235 1.471z"
          />
        </svg>
        <svg className="bg-white rounded-full hover:bg-green-400  "
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="40px"
          height="40px"
        >
          {" "}
          <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z" />
        </svg>
        <svg className="bg-white rounded-full hover:bg-green-400  "
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="40px"
          height="40px"
        >
          {" "}
          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
        </svg>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
