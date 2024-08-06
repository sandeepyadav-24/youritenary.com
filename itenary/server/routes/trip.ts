import express from "express";

import tripPlannerController from "../controller/tripplanner";

const router = express.Router();

router.post("/", tripPlannerController);

export default router;
