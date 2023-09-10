const UserDashBoard = () => {
    return (
       <main className="bg-primary-700">
        <div className="md:w-[80%] md:mx-auto">
            <section className="flex gap-8">
                <div className="bg-slate-600 md:w-[30%]">
                    <div>image</div>
                    <p>Ananya james</p>
                    <p>Frontend developer</p>
                </div>
                <div className="bg-slate-800 md:w-[70%]">
                    <article>
                        summary
                    </article>
                    <article>
                        skills
                    </article>
                </div>
            </section>
            <section className="bg-slate-400 md:px-6">
                <p>Basic Information</p>
                <div className="md:w-[70%] grid grid-cols-3 gap-4 ">
                    <article>
                        <span></span>
                        <span></span>
                    </article>
                    <article>
                        <span></span>
                        <span></span>
                    </article>
                    <article>
                        <span></span>
                        <span></span>
                    </article>
                    <article>
                        <span></span>
                        <span></span>
                    </article>
                    <article>
                        <span></span>
                        <span></span>
                    </article>
                    <article>
                        <span></span>
                        <span></span>
                    </article>
                </div>
                <button>Download Resume</button>
            </section>
        </div>
       </main>
    )
}

export default UserDashBoard