//This component is created by Swati.

import * as React from "react";

function InputField({ label, className }) {
  return (
    <div className="flex gap-1">
      <label className="my-auto w-[101px] text-sm font-medium">{label}</label>
      <input
        className={`shrink-0 bg-white text-center rounded-2xl shadow-primary h-[53px] w-[283px] outline-none pl-4`}
        autoComplete="off"
      />
    </div>
  );
}

export default function CreateClassPopup() {
  const inputFields = [
    { label: "Class" },
    { label: "Section" },
    { label: "Class Room.No" },
    { label: "Year" },
  ];

  return (
    <section className="flex flex-col bg-white rounded-3xl max-w-[955px] max-md:px-5">
      <div className="flex gap-5 justify-between px-px mt-3 text-base leading-5 text-black max-md:flex-wrap">
        {inputFields.slice(0, 2).map((field, index) => (
          <InputField
            key={index}
            label={field.label}
            className={field.className}
          />
        ))}
      </div>
      <div className="flex gap-3 justify-between px-px mt-3 text-base leading-5 text-black max-md:flex-wrap">
        {inputFields.slice(2, 4).map((field, index) => (
          <InputField
            key={index}
            label={field.label}
            className={field.className}
          />
        ))}
      </div>
    </section>
  );
}
