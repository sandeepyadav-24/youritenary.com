import { Request, Response } from "express";
import { model } from "../index";

const tripPlannerController = (req: Request, res: Response) => {
  async function run() {
    const { location, totalDays, travelers, budget } = req.body;
    {
      /**const location = req.query.location;
    const totalDays = req.query.totalDays;
    const travelers = req.query.travelers;
    const budget = req.query.budget; */
    }

    const AI_PROMPT = `Generate Travel Plan for Location:  ${location}, for 
    ${totalDays} Days for ${travelers} with a ${budget} budget, 
    give me hotels options list with hotelName, hotel address, 
    Price, hotel image url, geo Coordinates, rating , descriptions 
    and suggest itinerary with placeName, Place Details , Place Image Url, 
    Geo Coordinates, ticket Pricing, Time travel each of the location for 
    ${totalDays} days with each day plan with best 
    time to visit in JSON format`;
    console.log("Before");

    const prompt = "what is capital of delhi?";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log("generated");

    //const text = response.text();
    res.send(response);
    console.log("After ");
  }

  run();
};

export default tripPlannerController;
