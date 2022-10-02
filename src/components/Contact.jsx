import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "Lm28810@gmail.com" },
    { logo: "logo-whatsapp", text: "248 885 9476" },
    {
      logo: "location",
      text: "United States",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto justify-center"
        >
         
          <div className="flex flex-col  gap-7 justify-center ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
