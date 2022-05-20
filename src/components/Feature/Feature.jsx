const Feature = () => {
  return (
    <div>
      <feature>
        <div className="py-8  bg-gradient-to-b from-white via-green-200 to-green-500">
          <div className=" text-center md:flex md:text-left md:px-8 md:py-6 md:items-center">
          <div className="py-12 px-[15px] ">
            <h1 className="text-5xl font-semibold mb-2 ">Take a look inside</h1>
            <p className="max-w-md my-6 mx-auto">
              Te iisque labitur eos, nec sale argumentum scribentur no, augue
              disputando in vim. Erat fugit sit at, ius lorem deserunt
              deterruisset no.
            </p>
            <button className="border-transparent bg-gray-800 px-[30px] py-[12px] rounded-full my-6 text-white font-semibold hover:-translate-y-1 hover:duration-500 ">
              Learn More
            </button>
          </div>
          <div className=" px-[15px]">
            <img
              src="https://www.lapa.ninja/lab/atlas/img/feature-1.png"
              alt="feature1"
            />
          </div>
          </div>
          <div className=" text-center md:flex md:flex-row-reverse md:text-left md:px-8 md:items-center md:py-6 ">
            <div className="py-12 px-[15px] ">
              <h1 className="text-5xl font-semibold mb-2 ">
                Safe and reliable
              </h1>
              <p className="max-w-sm mx-auto my-6">
                Duo suas detracto maiestatis ad, commodo lucilius invenire nec
                ad, eum et oratio disputationi. Falli lobortis his ad
              </p>
              <button className="border-transparent bg-gray-800 px-[30px] py-[12px] rounded-full my-6 text-white font-semibold hover:-translate-y-1 hover:duration-500 ">
                Learn More
              </button>
            </div>
            <div className=" px-[15px]">
              <img
                src="https://www.lapa.ninja/lab/atlas/img/feature-2.png"
                alt="feature2"
              />
            </div>
          </div>
        </div>
      </feature>
      {/*Card*/}
      <section className="my-12 px-[15px] py-16  md:my-12 md:mx-[68.5px]  ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Check our pricing</h1>
          <div className="md:flex md:items-center md:justify-center md:gap-8 ">
          {/*Card1*/}
          <div className="my-12 px-[15px] lg:px-16 py-6">
            <h1 className="text-xl font-semibold my-4">STARTUP</h1>
            <h1 className="font-bold my-4">
              $ <span className="text-8xl">0</span> / MO.
            </h1>
            <h1 className="py-[5px]">Up to 5 Documents</h1>
            <h1 className="py-[5px]">Up to 3 Reviews</h1>
            <h1 className="py-[5px]">5 team Members</h1>
            <h1 className="py-[5px]">Limited Support</h1>
            <button className="my-4 border-2 border-black rounded-full px-[30px] py-3 font-semibold hover:bg-black hover:text-white hover:duration-500 hover:-translate-y-1 ">
              Get Free
            </button>
          </div>
          {/*Card 2*/}
          <div className="my-12 px-[15px] md:px-6 lg:px-16 py-6 bg-slate-800 text-white">
            <h1 className="text-xl font-semibold my-4">PREMIUM</h1>
            <h1 className="font-bold my-4">
              $ <span className="text-8xl">10</span> / MO.
            </h1>
            <h1 className="py-[5px]">Up to 15 Documents</h1>
            <h1 className="py-[5px]">Up to 10 Reviews</h1>
            <h1 className="py-[5px]">25 team Members</h1>
            <h1 className="py-[5px]">Limited Support</h1>
            <button className="my-4  text-black font-bold bg-green-300 border-transparent rounded-full px-[30px] py-3 hover:text-white  hover:duration-500 hover:-translate-y-1 ">
              Get Free
            </button>
          </div>
          {/*Card 3*/}
          <div className="my-12 px-[15px] lg:px-16 py-6">
            <h1 className="text-xl font-semibold my-4">PROFESSIONAL</h1>
            <h1 className="font-bold my-4">
              $ <span className="text-8xl">30</span> / MO.
            </h1>
            <h1 className="py-[5px]">Unlimited Documents</h1>
            <h1 className="py-[5px]">Unlimited Reviews</h1>
            <h1 className="py-[5px]">Unlimited Members</h1>
            <h1 className="py-[5px]">Unlimited Support</h1>
            <button className="my-4 border-2 border-black rounded-full px-[30px] py-3 font-semibold hover:bg-black hover:text-white hover:duration-500 hover:-translate-y-1 ">
              Get Free
            </button>
          </div>
          </div>
        </div>
      </section>
      {/*Logo Contact*/}
      <div className="bg-gray-300 flex flex-col  justify-evenly items-center py-8 md:flex-row  cursor-pointer " >
        <img
          className="py-2 px-[15px] md:px-0"
          src="https://www.lapa.ninja/lab/atlas/img/client-1.png"
          alt="logo contact"
        />
        <img
          className="py-2 px-[15px] md:px-0" 
          src="https://www.lapa.ninja/lab/atlas/img/client-2.png"
          alt="logo contact"
        />
        <img
          className="py-2 px-[15px] md:px-0" 
          src="https://www.lapa.ninja/lab/atlas/img/client-3.png"
          alt="logo contact"
        />
        <img
          className="py-2 px-[15px] md:px-0" 
          src="https://www.lapa.ninja/lab/atlas/img/client-4.png"
          alt="logo contact"
        />
        <img
          className="py-2 px-[15px] md:px-0" 
          src="https://www.lapa.ninja/lab/atlas/img/client-5.png"
          alt="logo contact"
        />
        <img
          className="py-2 px-[15px] md:px-0" 
          src="https://www.lapa.ninja/lab/atlas/img/client-6.png"
          alt="logo contact"
        />
      </div>
      {/*NearFooter*/}
      <div className=" bg-no-repeat bg-cover bg-[url('https://www.lapa.ninja/lab/atlas/img/contact-bk.jpg')] py-6   px-[15px] text-white ">
        <div className="py-6 md:flex md:justify-center md:items-center md:py-12 md:gap-14 2xl:gap-64"> 
          <div className="">
            <h1 className="text-5xl font-semibold mb-2" >Contact Us</h1>
            <p className="my-6 md:max-w-sm">
              Te iisque labitur eos, nec sale argumentum scribentur, augue
              disputando in vim. Erat fugit sit at, ius lorem.
            </p>
            <p className="pt-[5px]">Email : company_email@com</p>
            <p className="pt-[5px]">Phone : 361-688-5824</p>
            <p className="pt-[5px]">Address : 4826 White Avenue, Corpus Christi, Texas</p>
          </div>
          <div className="py-6 ">
            <div className="md:flex md:gap-2 ">
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-md font-medium text-green-400"
              >
                Your Name
              </label>
              <input
                type="text"
                class=" bg-transparent border-2 border-green-400 text-white text-sm rounded-lg  block w-full p-2.5  outline-none"
                placeholder="VD: Vu Phong Nguyen"
                required
              />  
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-md font-medium text-green-400"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class=" bg-transparent border-2 border-green-400 text-white text-sm rounded-lg  block w-full p-2.5  outline-none"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            </div>
            <div class="mb-3 xl:w-96">
              <label class="form-label inline-block mb-2 ">
                Example textarea
              </label>
              <textarea
                class="
        form-control
        px-3
        py-1.5
        font-normal
        border-solid 
        transition
        ease-in-out
        m-0
        bg-transparent border-2 border-green-400 text-white text-sm rounded-lg  block w-full p-2.5  outline-none
        
      "
                placeholder="Your message"
              ></textarea>
            </div>
            <button className=" font-bold w-full p-2.5 border-transparent bg-green-400 rounded-full hover:text-white hover:-translate-y-1 hover:duration-500">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;
