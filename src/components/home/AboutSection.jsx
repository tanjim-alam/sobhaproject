import React from 'react'

function AboutSection({ handleOpenModel }) {
    return (
        <div>
            <div className='bg-white p-4 mt-4 flex flex-col gap-3 relative border border-gray-200'>
                <div>
                    <h3 className=' text-2xl text-center font-semibold'>About</h3>
                    <h2 className=' text-xl font-medium'>About Developer</h2>
                    <p className=' mt-2 leading-1 text-[17px] font-normal'>
                        Sobha Crystal Meadows Row Houses offers a wide range of amenities and facilities for its residents. You can take a refreshing
                        swim in the pool or relax in the spa to calm your mind. Fitness enthusiasts can stay active in the fully-equipped gym, while
                        sports lovers can play matches on the well-maintained tennis courts. The colorful and beautiful gardens provide a cozy environment
                        for walks or enjoying fresh air. The project also ensures 24/7 security for the safety and peace of mind of the residents.
                        These row houses have a uniform architectural design that creates an attractive neighborhood, while still allowing residents to have
                        their privacy with their own entrance, backyard, and terrace. The neighborhood is well connected to major transportation hubs, making it
                        easy to explore the city and reach your destination quickly. Additionally, you will find educational institutions, healthcare facilities, and entertainment zones nearby.

                        Choosing a row house at Sarjapur Road also means enjoying the convenience of maintenance with smaller, low-maintenance yards.
                        Additionally, it strikes a balance between the privacy of an independent house and the cost advantages of shared walls,
                        making it more accessible for homeowners. The close proximity of neighboring houses contributes to a sense of security, as residents
                        feel more connected and aware of their surroundings. These project developments are designed for efficient land use, aligning with
                        sustainable urban planning practices.

                        Let's talk about the price of Sobha Crystal Meadows Row Houses. They believe in providing value for your investment while still
                        offering luxury. The prices have been carefully designed to make this exquisite lifestyle accessible to everyone, ensuring that you
                        can experience elegance without spending a lot of money. You will find a home that fits your budget and meets your expectations.
                        So why wait? Come and be a part of this amazing community at Sobha Crystal Meadows, where every day feels like a celebration of the good life.

                        Sobha Limited, a renowned real estate developer, extends its commitment to transparency and accountability by ensuring that all its row
                        house projects in Bangalore are registered with the Real Estate Regulatory Authority (RERA). Sobha Upcoming Projects adds an extra layer
                        of confidence for homebuyers, assuring them of the legality and credibility of their investments. {" "}
                        <span onClick={handleOpenModel} className=' text-blue-600 underline cursor-pointer'> Read more...</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection