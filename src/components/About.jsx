import React from "react";
import aboutImg from "../assets/images/about.jpg";
const About = () => {
  const info = [
    { text: "Years Experience", count: "07" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Here's a Bit More <span className="text-cyan-600">About Me</span>
        </h3>
             <p className="text-gray-400 my-3 text-lg"></p>
                  
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-white my-20 ">
              <p className=" lg:text-left text-justify max-w-lg text-xl mt-4 text-gray-200 leading-6  mx-auto font-semi-bold">
                My goal is to create user-friendly applications with clean and crisp interfaces. I have spent the last seven years in the technology industry and possess credible experience with everything relating to React. My next adventure will involve collaborating with a company that thrives on developer innovation, challenges, and meaningful projects. My previous experience includes Cybersecurity and Networking, which has helped me become a better developer. Therefore, security and optimization are the backbones of any successful project.
                  
              </p>
              <br/>
              <p className='text-2xl tracking-wide text-yellow-400'>Interested in knowing more?</p>
              
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./src/assets/Resume.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
