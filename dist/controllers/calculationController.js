"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCalculations = exports.saveCalculation = void 0;
const connection_1 = require("../db/connection");
const saveCalculation = async (req, res) => {
    try {
        const { expression, result } = req.body;
        if (!expression || !result) {
            return res.status(400).json({ message: "Invalid input" });
        }
        await connection_1.db.query("INSERT INTO calculations (expression, result) VALUES (?, ?)", [expression, result]);
        res.status(201).json({ message: "Saved successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
exports.saveCalculation = saveCalculation;
const getCalculations = async (req, res) => {
    try {
        const [rows] = await connection_1.db.query("SELECT * FROM calculations ORDER BY id DESC");
        res.json(rows);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
exports.getCalculations = getCalculations;
//# sourceMappingURL=calculationController.js.map