import React from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";

function OverviewSection({ handleOpenModel }) {
    return (
        <div className='bg-white p-4 flex flex-col gap-3 relative border border-gray-200'>
            <div>
                <span className=' text-xl border border-blue-500 px-4 rounded-full'>Overflow</span>
                <h1 className=' text-2xl mt-3 font-bold'>Sobha Crystal Meadows</h1>
                <h3 className=' mt-2 text-xl font-medium'>Sarjapur Bangalore</h3>
                <p className=' mt-2 leading-1 text-[17px] font-normal'>
                    Sobha Limited is presenting its “Sobha Crystal Meadows Row Houses” project situated at Sarjapur Road, Bangalore.
                    This project covers approx. 26.67 Acres of land in Bangalore. The location is perfect, surrounded by beautiful
                    greenery and peaceful lakes, offering a tranquil lifestyle in a busy city. Row houses are homes that are built in a
                    line next to each other along a street. They share walls with their neighbors but have separate entrances and unique
                    front designs. With 290 thoughtfully designed row villas spanning ground plus 3 floors, there is a luxury home to suit
                    everyone's taste and preference. The concept behind these row houses is to make the most of the available land, providing
                    residents with a sense of individuality while living in close proximity to others.


                </p>
                <button onClick={handleOpenModel} className=' mt-4 px-5 py-1 border border-blue-500 flex justify-center items-center gap-2'><FaCloudUploadAlt /> <span>Request Download Brochure</span></button>
            </div>
        </div>
    )
}

export default OverviewSection