import bgImage from "../../../assets/home/chef-service.jpg"
const BistoInfo = () => {
    return (
        <div className='w-10/12 mx-auto mb-16'>
            <div
                className="w-full bg-cover lg:p-20 p-8 "
                style={{ backgroundImage: `url(${bgImage})` }} >
                <div className=" bg-white text-gray-800 lg:p-20 p-4 mx-auto text-center lg:space-y-3 space-y-1 hover:scale-105 transition-all duration-300">
                    <h2 className="lg:text-3xl text-2xl uppercase font-serif">Bistro Boss</h2>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum, repellendus blanditiis nemo, vero velit possimus temporibus soluta ducimus aspernatur repudiandae fugit voluptates ratione molestias? Nobis nesciunt nam blanditiis.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BistoInfo;