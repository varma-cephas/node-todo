import { home } from "../controller/home.js";
import express from "express"
export const index = express.Router();

index.get("/", home)