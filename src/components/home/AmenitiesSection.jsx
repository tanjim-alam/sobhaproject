import React from 'react';
import cctv from "../../assets/cctv.svg";
import chess from "../../assets/chess.svg";
import discoball from "../../assets/disco-ball.svg";
import gym from "../../assets/gym.svg";
import dance from "../../assets/dance.svg";
import jog from "../../assets/jog.svg";
import kids from "../../assets/kids.svg";
import mine from "../../assets/mine.svg";
import cricket from "../../assets/cricket.svg";
import yoga from "../../assets/yoga.svg";
import supermarket from "../../assets/supermarket.svg";
import aerobicsroom from "../../assets/aerobicsroom.png";
import creche from "../../assets/creche.svg";
import healthclub from "../../assets/health-club.svg";
function AmenitiesSection() {
    const amenitiesData = [
        {
            name: "Aerobics Room",
            image: aerobicsroom
        },
        {
            name: "CCTV",
            image: cctv
        },
        {
            name: "Chess",
            image: chess
        },
        {
            name: "Disco Ball",
            image: discoball
        },
        {
            name: "GYM",
            image: gym
        },
        {
            name: "Dance",
            image: dance
        },
        {
            name: "Jog",
            image: jog
        },
        {
            name: "Football Field",
            image: kids
        },
        {
            name: "Aerobics Room",
            image: mine
        },

        {
            name: "Yoga",
            image: yoga
        },

        {
            name: "Cricket Net",
            image: cricket
        },
        {
            name: "Grocery Store",
            image: supermarket
        },
        {
            name: "Creche",
            image: creche
        },
        {
            name: "Health Club",
            image: healthclub
        },
    ]
    return (
        <div>
            <div className='bg-white p-4 mt-4 flex flex-col gap-3 relative border border-gray-200'>
                <div>
                    <span className=' text-xl border border-blue-500 px-4 rounded-full'>Amenities</span>
                    <div className='grid-cols-2 sm:grid-cols-3 px-2 py-4 grid md:grid-cols-4 lg:grid-cols-7 lg:p-5 gap-3'>
                        {amenitiesData.map((data, i) => (
                            <div key={i} className=' w-[150px] h-[150px] shadow-md p-2 hover:border-2 border-black hover:transition-all  hover:duration-300'>
                                <div className='w-full h-[85%] p-4'>
                                    <img className=' w-full h-[100%]' src={data.image} alt="" />
                                </div>
                                <p className=' text-center'>{data.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmenitiesSection