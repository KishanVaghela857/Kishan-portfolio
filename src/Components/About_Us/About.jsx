import React from "react";
import ProfileImg from "../HomePage/KishanProfile1.png"; // Use your image
// You can use react-icons for social icons if you want

const AboutMe = () => {


    return (
        <section id="aboutScreen" className="min-h-screen bg-transparent flex flex-col items-center justify-center relative px-4" >
            {/* Section Heading */}
            <h1 className="text-4xl font-extrabold text-cyan-400 mb-10 mt-4 tracking-wide" style={{ marginBottom: '25px' }}>About Me</h1>

            {/* Main Card */}
            <div style={{height: '450px'}} className="bg-[#181818] rounded-xl shadow-lg flex flex-col md:flex-row items-center p-8 gap-8 w-full">
                {/* Profile Image */}
                <div className="border-4 border-cyan-400 rounded-lg overflow-hidden w-74 h-74 flex-shrink-0" style={{ marginLeft: '15px' }}>
                    <img src={ProfileImg} alt="Profile" className="w-full h-full object-cover grayscale" />
                </div>
                {/* Details */}
                <div className="flex-1 text-white">
                    <h2 className="text-3xl font-bold mb-2" style={{ marginBottom: '20px' }}>
                        Hello, I Am <span className="text-cyan-400">KISHAN VAGHELA</span>
                    </h2>
                    <p className="text-gray-300 mb-4">
                        {/* Your about text here */}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 text-gray-200 text-sm mb-6" style={{ marginBottom: '20px' }}>
                        {/* <div><span className="font-bold">Name:</span> Your Name</div> */}
                        <div className=" hover:text-white"><span className="font-bold  hover:text-cyan-400">Age:</span> 19</div>
                        <div className=" hover:text-white"><span className="font-bold  hover:text-cyan-400">Address:</span> Gujrat, B.K, Deesa</div>
                        <div className=" hover:text-white"><span className="font-bold  hover:text-cyan-400">Phone:</span> +91 9723405985</div>
                        <div className=" hover:text-white"><span className="font-bold  hover:text-cyan-400">Email:</span><a href="mailto:vaghelakishan857@gmail.com"> vaghelakishan857@gmail.com</a></div>
                    </div>
                    <button style={{ width: '170px', height: '30px' }} className="bg-cyan-400 text-black px-6 py-2 rounded font-bold shadow hover:bg-yellow-500 transition">
                        <a href="">Download CV</a>
                    </button>
                </div>
            </div>
            {/* Navigation Arrows */}
            {/* <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl">&#8592;</button>
    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl">&#8594;</button> */}
        </section>
    )
};

export default AboutMe;

