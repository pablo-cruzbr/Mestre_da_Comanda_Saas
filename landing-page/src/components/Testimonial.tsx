import React from 'react'
import img from "../assets/review.jpg"
const Testimonial = () => {
  return (
    <section className="py-16 px-14 sm:px-4 bg-white dark:bg-black text-black dark:text-white transition">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className=" flex justify-center">
                <img 
                src={img} 
                alt="Delivery Guy" 
                className="w-3/4 sm:w-2/3 md:w-full max-w-sm rounded-2xl "
                />
            </div>

            <div className="text-center md:text-2xl-start">
                <h2 className="text-orange-500 font-medium uppercase mb-2 text-sm sm:text-base pl-3">
                 Our Reviews
                </h2>

                <h3 className="text-2xl sm:text-3xl md:text-4-l font-bold mb-6 pl-3">
                    What They Say?
                </h3>
            </div>
        </div>
    </section>
  )
}

export default Testimonial
