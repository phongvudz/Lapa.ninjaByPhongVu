const Section =() =>{
    return(
        <section className="my-12 px-[15px] py-[8px]">
            <div >
                <h1 className="text-center text-5xl font-bold my-12">Smartest protection for your site</h1>
                <div className=" md:flex  md:justify-around md:items-center">
                <div className="text-center">
                    <img className="mx-auto" src="https://www.lapa.ninja/lab/atlas/img/smart-protect-1.jpg" alt="logo" />
                    <h1 className="text-2xl font-semibold mb-2 ">Anti-spam</h1>
                    <p className="mb-4">Lorem ipsum dolor sit amet porro his no his deleniti</p>
                </div>
                <div className="text-center">
                    <img className="mx-auto" src="https://www.lapa.ninja/lab/atlas/img/smart-protect-2.jpg" alt="logo "/>
                    <h1 className="text-2xl font-semibold mb-2">Phishing Detect</h1>
                    <p className="mb-4">Ne error antiopam usu. Sed vocen concludaturque ea</p>
                </div>
                <div className="text-center">
                    <img className="mx-auto" src="https://www.lapa.ninja/lab/atlas/img/smart-protect-3.jpg" alt="logo"/>
                    <h1 className="text-2xl font-semibold mb-2">Smart Scan</h1>
                    <p className="mb-4">Et usu ocurreret elaboraret doctus prodesse assueverit.</p>
                </div>
                </div>
            </div>
        </section>
    );
}
export default Section;