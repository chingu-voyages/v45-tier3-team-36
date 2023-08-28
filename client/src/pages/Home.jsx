const Home = () => {
    return (
        <main>
            <section className="bg-gradient-to-r from-secondary-500 to-secondary-400">
            <article className="relative pt-[6rem] pb-[10rem] md:w-[90%] md:mx-auto">
                <section className="text-primary-500 px-2 md:px-0">
                    <h2 className="text-[1.7rem] md:text-[3rem] font-normal leading-normal">200+ Jobs Listed</h2>
                    <h2 className="text-[2.2rem] md:text-[3.5rem] font-normal leading-normal">Find Your Dream Job</h2>
                    <p className="mt-[1rem] text-[1rem] md:text-[1.4rem] font-normal leading-normal w-[90%] md:w-[40%]">Navigate Your Career Journey Seamlessly with TalentBridge - Your Job Search Companion</p>
                    <button className="mt-6 text-[1rem] font-normal leading-normal cursor-pointer hover:opacity-[0.6] px-6 py-2 rounded-[.2rem] bg-primary-600">Find Jobs</button>
                </section>

                <div className="hero-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </div>
            </article>
            </section>
        </main>
    )
}

export default Home