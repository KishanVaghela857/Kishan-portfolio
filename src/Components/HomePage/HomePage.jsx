import React from 'react'
// import './BG.css';
// // eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import variants from '../variants/Vriants';
import ImgProfile from './kishanProfile.png'
// import HomeAnimation from './HomeRightAni'

function HeroSection() {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="homeScreen"
            className="min-h-[90vh] flex items-center justify-center bg-transparent px-4"
        >
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12 md:gap-0">
                {/* Left Side */}
                <div className="flex-1 flex flex-col items-start justify-center text-left">
                    <p className="text-lg text-white mb-2">Hello, It's Me</p>
                    <h1 className="text-5xl sm:text-5xl font-extrabold text-white mb-2">KISH△N V△GHEL△</h1>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">And I'm a <span className="text-cyan-400">Frontend Dev</span></h2>
                    <p className="text-gray-300 mb-6 max-w-md">I don't just code websites — I craft experiences. Grind in silence, let the UI shine</p>
                    {/* Social Icons */}
                    <div className="flex gap-4 mb-8" style={{marginTop:'20px'}}>
                        {/* <a href="#" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors duration-200"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56v14.91c0 .97-.79 1.76-1.76 1.76H1.76A1.76 1.76 0 0 1 0 19.47V4.56C0 3.59.79 2.8 1.76 2.8h20.47C23.21 2.8 24 3.59 24 4.56zM7.19 19.47V9.75H3.56v9.72h3.63zm-1.81-11.1c1.16 0 1.88-.77 1.88-1.73-.02-.98-.72-1.73-1.86-1.73-1.14 0-1.88.75-1.88 1.73 0 .96.72 1.73 1.84 1.73h.02zm13.62 11.1v-5.39c0-1.44-.52-2.42-1.82-2.42-.99 0-1.58.67-1.84 1.32-.09.22-.11.53-.11.84v5.65h-3.63s.05-9.17 0-10.12h3.63v1.43c.48-.74 1.34-1.8 3.26-1.8 2.38 0 4.17 1.56 4.17 4.89v5.6h-3.63z"/></svg></a>
                        <a href="#" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors duration-200"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.09 4.07 7.38 1.64 4.9c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.94 3.62-.72-.02-1.39-.22-1.98-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.11 2.94 3.97 2.97A8.6 8.6 0 0 1 0 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z"/></svg></a> */}
                        <a href="https://github.com/KishanVaghela857/" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors duration-200"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.07 8.24 8.93.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.23 0 4.64-2.81 5.67-5.49 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.4 20.07 24 16.41 24 12c0-5.5-4.46-9.96-9.96-9.96z"/></svg></a>
                        <a href="https://github.com/KishanVaghela857/" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors duration-200"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-7 19h-3v-7h3v7zm-1.5-8.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 8.25h-3v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4h-3v-7h3v1c.41-.58 1.19-1.41 2.5-1.41 1.93 0 3.5 1.57 3.5 3.5v3.91z"/></svg></a>
                    </div>
                    {/* Download CV Button */}
                    <a href="#" className="rounded-full bg-cyan-400 text-[#181924] hover:bg-cyan-500 transition-colors duration-200" style={{marginTop:'20px', width: '170px', height: '40px', textAlign: 'center', fontFamily: 'sans-serif', justifyContent: 'center', alignContent: 'center', fontWeight: 'bolder'}}>Download CV</a>
                </div>
                {/* Right Side */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="relative">
                        <div className="w-84 h-84 bg-cyan-400 rounded-[2.5rem] flex items-center justify-center shadow-2xl" style={{clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'}}>
                            <img src={ImgProfile} alt="profile" className="w-76 h-76 object-cover rounded-[2.2rem]"/>
                        </div>
                        {/* Blue glow */}
                        <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none" style={{boxShadow: '0 0 60px 10px #06b6d4', clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'}}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
