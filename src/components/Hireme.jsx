import React from "react";
import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg"></p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            What It's Like To Work With Me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-lg mt-4 text-white leading-6">
            If you are looking for someone who is easy to get along with, takes pride in creating and developing quality apps, websites, and code, that's me. <span className="text-yellow-400">I have a background in Cybersecurity and Networking,</span> but don't let that turn you off because <span className="text-yellow-400">it has helped me become a better developer,</span>always keeping security and optimization in mind. 
          </p>
          <br/>
          <p className="text-yellow-400 text-lg"> The cherry on top, I'm kind of funny!</p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
