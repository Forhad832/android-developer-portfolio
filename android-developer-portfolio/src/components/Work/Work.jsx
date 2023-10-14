import React from 'react';
import android from '../../assets/android.png'
import desk from '../../assets/des.png'
import c from '../../assets/C_Logo.png'
import cc from '../../assets/c++.png'
import java from '../../assets/java.png'
import python from '../../assets/python.png'
const Work = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="flex justify-between  flex-col lg:flex-row gap-4 py-24">
                <div className="overflow-x-auto flex-1">
                    <h4 className='text-3xl font-medium mb-6'>What i do </h4>
                    <div className=" flex flex-col gap-3 w-fit">
                        <ul className="steps steps-vertical">
                            <li className="step step-primary">  <div className="flex mt-8 bg-primary text-base-300 rounded-md gap-10 p-2 px-8">
                                <div>
                                    <img className='w-8' src={android} alt="" />
                                </div>
                                <div>
                                    <h4>Android App Development</h4>
                                </div>
                            </div></li>
                            <li className="step step-primary">   <div className="flex bg-primary text-base-300 rounded-md gap-10 p-2 px-8">
                                <div>
                                    <img className='w-8' src={desk} alt="" />
                                </div>
                                <div>
                                    <h4>Android App Development</h4>
                                </div>
                            </div></li>
                           
                            <li className="step ">   <div className="flex bg-base-300 gap-10 p-2 w-full px-8">
                                <div>
                                    <img className='w-8' src="" alt="" />
                                </div>
                                <div>
                                    <h4>Loading....</h4>
                                </div>
                            </div></li>
                        </ul>


                    </div>

                </div>
                <div className='flex-1'>
                    <h4 className='text-3xl font-medium mb-6'>Languages </h4>
                    <div className='flex mt-8 gap-12'>
                        <div>
                            <img className='w-20' src={c} alt="" />
                        </div>
                        <div>
                            <img className='w-20' src={cc} alt="" />
                        </div>
                        <div>
                            <img className='w-20' src={java} alt="" />
                        </div>
                        <div>
                            <img className='w-20' src={python} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;