import React from 'react';
import app from '../../assets/app.avif'
import ProjectDetail from '../ProjectDetail/ProjectDetail';
const Hero = () => {
    return (
        <div className='min-h-screen pt-24 bg-[#191919]'>
            <div className="hero mt-24">
                <div className="hero-content flex-col-reverse  lg:flex-row">
                    <div className='flex-1 text-base-300'>
                        <h1 className="text-5xl font-bold">App Master Forhad !</h1>
                        <p className="py-6">I am a programmer. Coding is my life .I love to do  Android app and  Desktop app Development. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam labore ducimus quibusdam voluptatum aspernatur dolor omnis facilis dignissimos quae.</p>
                        <button className="btn  btn-primary">Get Started</button>
                    </div>
                    <div className='flex-1 flex justify-end'>
                        <img src={app} className="max-w-sm  rounded-lg shadow-2xl" />
                    </div>

                </div>
                
            </div>
            <div className='container mx-auto px-4'>
           <ProjectDetail></ProjectDetail>
           </div>
        </div>


    );
};

export default Hero;