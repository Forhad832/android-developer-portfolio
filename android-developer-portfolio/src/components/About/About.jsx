import React from 'react';

import user from '../../assets/user.png'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
        <div>
            <h1 className="text-3xl font-bold">About Forhad Hossen</h1>
            <p className="py-6">I am an Android Developer.An Android Developer is a software developer who specializes in designing applications for android operating systems. Android is an operating system that is a hot cake in the market. Developing applications for android is on the boom, so the demand for an android developer is very high. According to the Bureau of Labor Statistics, the demand for software developers, which includes Android developers, is expected to rise by 17 per cent through 2024. Android and iOS developers are almost the same. An Android developer should have some necessary technical and non-technical skills which help them to make a career in the Android development field.</p>
            <button className="btn btn-primary px-16">Get Hire</button>
          </div>
          <img src={user} className="max-w-xs rounded-full shadow-2xl" />
        
        </div>
      </div>
    );
};

export default About;