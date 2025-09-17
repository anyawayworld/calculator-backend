import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { saveCalculation, getCalculations } from "./controllers/calculationController";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post("/api/calculations", saveCalculation);
app.get("/api/calculations", getCalculations);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
