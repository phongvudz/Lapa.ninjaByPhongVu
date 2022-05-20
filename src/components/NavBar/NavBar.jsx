const NavBar = () => {
  return (
    <nav className="w-full  bg-top-left md:py-16 md:px-8 lg:px-10 2xl:px-64  bg-cover  py-8  px-[15px] bg-[url('https://www.lapa.ninja/lab/atlas/img/banner-bk.jpg')]">
      <div className="">
        <div className="flex items-center justify-between">
          <img
            className="w-[80px] "
            src="https://www.lapa.ninja/lab/atlas/img/logo.png" alt="logo website"
          />
          <h1 className="text-white hover:border-b-2 hover:border-white text-xl font-light ">
            Get Early Access
          </h1>
        </div>
        <div className="flex flex-col text-center justify-center items-center text-white md:justify-start md:items-start md:text-left">
          <h1 className="text-6xl  font-bold my-12 max-w-sm  md:text-7xl md:max-w-xl ">
            A New Way To Start Business
          </h1>
          <p className="text-xl  max-w-md my-6 font-light leading-relaxed md:max-w-2xl lg:max-w-3xl">
            Lorem ipsum dolor sit amet, id nec enim autem oblique, ei dico
            mentitum duo. Illum iusto laoreet his te. Lorem partiendo mel ex. Ad
            vitae admodum voluptatum per.
          </p>
          <button className="bg-green-300 text-black rounded-full my-6 px-[30px] py-3 font-semibold hover:text-white hover:duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
