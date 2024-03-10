import React from 'react';
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";

function GallerySection() {
    const imageData = [
        {
            id: 1,
            img: image1
        },
        {
            id: 2,
            img: image2
        },
        {
            id: 3,
            img: image1
        },
        {
            id: 4,
            img: image2
        },
        {
            id: 5,
            img: image1
        },
        {
            id: 6,
            img: image2
        },
        {
            id: 7,
            img: image1
        },
        {
            id: 8,
            img: image2
        },
        {
            id: 9,
            img: image1
        },
        {
            id: 10,
            img: image2
        },
    ]
    return (
        <div>
            <div className='bg-white p-4 mt-4 flex flex-col gap-3 relative border border-gray-200'>
                <div>
                    <span className=' text-xl border border-blue-500 px-4 rounded-full'>Gallery</span>
                    <div className=' mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-1 lg:p-5'>
                        {imageData.map((data, i) => (
                            <img className=' w-[220px] h-[150px] rounded-sm transition-all duration-2000 ease-in-out hover:w-[250px] hover:h-[170px]' key={i} src={data.img} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GallerySection