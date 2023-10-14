import React from 'react';
import android from '../../assets/an.png'
import desk from '../../assets/des.png'
const Project = () => {
    return (
        <div className="bg-base-300">
            <div className="container mx-auto px-4">
                <h2 className='text-3xl pt-12 font-bold text-center'>My Projects</h2>
                <div className='w-56 mt-12 mx-auto'>
                <div className="tabs tabs-boxed">
                    <a className="tab tab-active">All</a>
                    <a className="tab ">Android</a>
                    <a className="tab">Desktop</a>
                </div>
                </div>
                <div className='grid grid-cols-1 py-12 lg:grid-cols-3 gap-4'>
                    <div className="card lg:w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={android} alt="Shoes" className="rounded-xl w-32" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Android App </h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis perspiciatis quos?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">About More ...</button>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={desk} alt="Shoes" className="rounded-xl w-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Desktop App </h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis perspiciatis quos?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">About More ...</button>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={android} alt="Shoes" className="rounded-xl w-32" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Android App </h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis perspiciatis quos?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">About More ...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;