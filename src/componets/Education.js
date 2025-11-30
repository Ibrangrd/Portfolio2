import React from "react";

const Education = () => {
  const items = [
    {
      institute: "Birsa Institute of Technology",
      place: "Sindri, Dhanbad",
      duration: "2021 – 2025",
      degree: "Bachelor of Technology (B.Tech)",
    },
    {
      institute: "Subhash Public School",
      place: "Giridih, Jharkhand",
      duration: "2020",
      degree: "Intermediate (PCM)",
    },
    {
      institute: "B.N. Saha Public School",
      place: "Bulaki Road, Giridih",
      duration: "2018",
      degree: "Matriculation",
    },
  ];

  return (
    <section className=" dark:text-slate-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold mb-10">Education</h2>

        <div className="relative border-l border-slate-700 ml-4">
          {items.map((item) => (
            <div key={item.institute} className="relative pl-6 pb-10">
              <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-sky-400"></span>

              <div className=" border border-slate-700 rounded-xl p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="font-semibold text-xl font-serif">
                    {item.institute}
                  </h3>
                  <p className="text-sm ">{item.duration}</p>
                </div>

                <p className="mt-2 text-sm text-sky-400">{item.place}</p>
                <p className="mt-1 text-sm dark:text-slate-200">{item.degree}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
