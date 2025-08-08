"use client"
import React, { useEffect, useState } from 'react'
interface AboutMeProps {
  refProp: React.RefObject<HTMLElement | null>;
}

export function AboutMe({refProp}: AboutMeProps) {

    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 4000);
        return () => clearTimeout(timer); // Delay of 1 second before showing the hero section
    }, [])

    return (
        <>
            <section className='bg-[rgb(9,11,14)] min-h-screen p-[50px] ' ref={refProp}>

                <div className={`
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
                    {/* Header */}
                    <section className="text-center mb-8" >
                        <h1 className="text-[#f0c96e] text-5xl md:text-4xl font-bold mb-4">About Me</h1>
                        <p className="text-[rgb(138,150,168)]">
                            Passionate about telling stories through the lens
                        </p>
                    </section>
                    <section className=" text-[rgb(138,150,168)] px-2 md:px-1 py-12">
                        {/* Main Info Section */}
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-12">
                            {/* Text Content */}
                            <div className="flex-1">
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Hi, I'm Alex Johnson
                                </h1>
                                <p className="text-sm leading-relaxed">
                                    With over 8 years of experience in photography, I specialize in capturing
                                    the beauty of everyday moments and transforming them into extraordinary
                                    memories. My journey began with a simple love for light and composition
                                    and has evolved into a passion for storytelling through visual art.
                                    <br />
                                    <br />
                                    I believe that every photograph should tell a story, evoke emotion,
                                    and preserve memories that last a lifetime. Whether it's an intimate
                                    portrait session, a grand wedding celebration, or the raw beauty of
                                    nature, I approach each project with creativity, professionalism,
                                    and genuine care.
                                </p>

                                {/* Stats */}
                                <div className="flex flex-wrap gap-8 mt-8">
                                    <div>
                                        <p className="text-3xl font-bold text-[#f0c96e]">500+</p>
                                        <span className="block text-sm">Projects Completed</span>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-[#f0c96e]">8+</p>
                                        <span className="block text-sm">Years Experience</span>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-[#f0c96e]">15+</p>
                                        <span className="block text-sm">Awards Won</span>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Image */}
                            <div className="flex-shrink-0">
                                <img
                                    src="/about-me.jpg"
                                    alt="Alex Johnson"
                                    className="rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.6)] w-72 md:w-96 object-cover"
                                />
                            </div>
                        </div>

                        {/* Services Section */}
                        <h2 className="text-center text-2xl font-bold text-white mb-8">
                            Services I Offer
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {/* Card 1 */}
                            <div className="bg-[#13151b] rounded-xl p-6
         text-center shadow-md hover:shadow-lg transition duration-300">
                                <p className="mx-auto mb-4 text-2xl">📸</p>
                                <h3 className="text-white font-semibold mb-2">Portrait Photography</h3>
                                <p className="text-sm">
                                    Professional headshots and personal portraits that capture your essence
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#13151b] rounded-xl p-6 text-center shadow-md
         hover:shadow-lg transition duration-300">

                                <p className="mx-auto mb-4 text-3xl">💍</p>
                                <h3 className="text-white font-semibold mb-2">Wedding Photography</h3>
                                <p className="text-sm">
                                    Documenting your special day with artistic flair and emotional depth
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#13151b] rounded-xl p-6
         text-center shadow-md hover:shadow-lg transition duration-300">
                                <p className="mx-auto mb-4 text-3xl">🏔️</p>
                                <h3 className="text-white font-semibold mb-2">Landscape Photography</h3>
                                <p className="text-sm">
                                    Breathtaking natural scenes and architectural compositions
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-[#13151b] rounded-xl p-6
         text-center shadow-md hover:shadow-lg transition duration-300">
                                <p className="mx-auto mb-4 text-2xl">🏢</p>
                                <h3 className="text-white font-semibold mb-2">Commercial Photography</h3>
                                <p className="text-sm">
                                    Professional images for businesses, products, and marketing campaigns
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}