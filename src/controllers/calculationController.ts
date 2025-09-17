import { Request, Response } from "express";
import { db } from "../db/connection";

export const saveCalculation = async (req: Request, res: Response) => {
  try {
    const { expression, result } = req.body;
    if (!expression || !result) {
      return res.status(400).json({ message: "Invalid input" });
    }
    await db.query(
      "INSERT INTO calculations (expression, result) VALUES (?, ?)",
      [expression, result]
    );
    res.status(201).json({ message: "Saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getCalculations = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query("SELECT * FROM calculations ORDER BY id DESC");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
