"use client";
import React, { useEffect, useState } from "react";
import { Budget, Adventure } from "../../constants/Option";
import { toast } from "react-toastify";
import { AI_PROMPT } from "../../constants/Option";
import Script from "next/script";
//import { chatSession } from "../../services/AIModal";
import Navbar from "@/components/Navbar";
import axios from "axios";

import GooglePlacesAutocomplete from "react-google-places-autocomplete";

// Interface for Form Data
interface FormData {
  budget: string;
  people: number;
  noOfDays: number;
  location: string;
}

const page = () => {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState<FormData>({
    budget: "",
    people: 0,
    noOfDays: 0,
    location: "",
  });

  // Handle Generator Function
  const handleGenerate = async () => {
    if (
      !formData.budget ||
      formData.people === 0 ||
      formData.noOfDays === 0 ||
      !formData.location
    ) {
      toast("Please fill all the details before generating the trip.");
      return;
    }

    //console.log(formData.location.value.description);

    const body = {
      location: formData.location.value.description,
      totalDays: formData.noOfDays.toString(),
      travelers: formData.people.toString(),
      budget: formData.budget,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/tripplanner",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching Trip data:", error);
    }

    {
      /**const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData.location)
      .replace("{totalDays}", formData.noOfDays.toString())
      .replace("{traveler}", formData.people.toString())
      .replace("{Budget}", formData.budget)
      .replace("{totalDays}", formData.noOfDays.toString());

    console.log(FINAL_PROMPT); */
    }

    //const result = await chatSession.sendMessage(FINAL_PROMPT);
    //console.log(result);
  };

  // Handle Change Function
  const handleChange = (name: string, value: any) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //console.log(process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY);

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
              onChange={(e) =>
                handleChange("noOfDays", parseInt(e.target.value))
              }
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
        <button className="bg-black text-white" onClick={handleGenerate}>
          Generate Trip
        </button>
      </div>
    </main>
  );
};

export default page;
