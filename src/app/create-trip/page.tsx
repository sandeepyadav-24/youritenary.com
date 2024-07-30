"use client";
import React, { useEffect, useState } from "react";
import { Budget, Adventure } from "@/constants/Option";

import Navbar from "@/components/Navbar";
import Options from "@/components/Options";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

interface FormData {
  budget: string;
  people: number;
}

const page = () => {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState<FormData>({
    budget: "",
    people: 0,
  });
  const handleChange = (name: string, value: any) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <main>
      <Navbar />
      <div className="mx-60">
        <h1 className="font-bold text-3xl my-2">
          Tell us your travel preferences
        </h1>
        <h2>
          Just provide some basic information, and our trip planner generate a
          customized itennary based on your preferences.
        </h2>
        <div className="Questions">
          <div className="first my-5 f">
            <h1 className="font-semibold my-1 ">
              What is destination of choice?
            </h1>
            <div>
              <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
                selectProps={{
                  value: place,
                  onChange: (v: any) => {
                    setPlace(v);
                    handleChange("location", v);
                  },
                }}
              />
            </div>
          </div>

          <div className="second my-5">
            <h1 className="font-semibold my-1">
              How many days are you planning your trip?
            </h1>
            <input
              type="number"
              onChange={(e) => handleChange("noOfDays", e.target.value)}
            />
          </div>
          <div className="third my-5">
            <h1 className="font-semibold">What is your budget?</h1>
            <div className="flex  flex-wrap">
              {Budget.map((e, index) => (
                <div
                  className={`border-black border-[1px] mx-5 p-2 ${
                    formData?.budget == e.heading &&
                    "shadow-lg bg-black text-white"
                  }`}
                  onClick={() => handleChange("budget", e.heading)}
                  key={index}
                >
                  <h1>{e.heading}</h1>
                  <h2>{e.desc}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="fourth">
            <h1>Who do you plan on travelling with on your next adventure?</h1>
            <div className="flex  flex-wrap">
              {Adventure.map((e, index) => (
                <div
                  className={`border-black border-[1px] mx-5 p-2 ${
                    formData?.people == e.people &&
                    "shadow-lg bg-black text-white"
                  }`}
                  onClick={() => handleChange("people", e.people)}
                  key={index}
                >
                  <h1>{e.heading}</h1>
                  <h2>{e.desc}</h2>
                  <h2>{e.people}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="bg-black text-white">Generate Trip</button>
      </div>
    </main>
  );
};

export default page;
