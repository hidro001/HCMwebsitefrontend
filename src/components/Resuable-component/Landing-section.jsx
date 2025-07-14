import React from 'react'

function LandingSection() {
    return (
        <section className="partition_slide overflow-hidden relative before:absolute  before:inset-0 before:bg-[#e0eef9]  before:opacity-100">
            <div>
                <div className="absolute -top-10 -left-10 h-28 w-28 rounded-full bg-[#39c9bb] opacity-20 animate-bounce z-0" />
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 h-28 w-28 rounded-full bg-[#f56d6d] opacity-20 animate-slide z-0" />
                <div className="absolute top-[30%] -right-4 h-28 w-28 bg-[#39c9bb] opacity-20 animate-[spin_2s_linear_infinite] z-0" />
                <div className='w-[20%] relative top-[32rem] -left-35'><div className=" absolute h-28 w-28 rounded-full bg-[#f56d6d] opacity-20 animate-slide" /></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-centepr gap-10 relative ">
                <div>
                    <h1 className="text-[#193f77] text-2xl md:text-5xl font-semibold leading-snug mb-6">
                        Human <span className="text-[#39bef4]">Maximizer</span>:<br />
                        Managing productivity of <span className="text-[#39bef4]">workplace</span>, feature by<br />feature.
                    </h1>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Streamlining your management operations and ticking all your HR boxes with no bother.
                        We make it easy to keep tabs on how everyone's doing, manage your staff details,
                        and give you a proper look at productivity to get the most out of work hours.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <button className="bg-[#193f77] text-white px-6 py-2 rounded-full hover:bg-[#132c5c] transition">Book a Demo</button>
                        <button className="border border-[#39bef4] text-[#39bef4] px-6 py-2 rounded-full hover:bg-[#39bef4] hover:text-white transition">Watch a Video</button>
                    </div>
                </div>

                <div className="bg-gray-300 rounded-xl shadow-xl p-4 z-10 h-fit mt-20">
                    <img
                        src="/images/home/hcm-dash-board.jpg"
                        alt="Dashboard"
                        className="object-contain rounded-xl h-fit w-[100vw]"
                    />
                </div>
            </div>
        </section>
    )
}

export default LandingSection
