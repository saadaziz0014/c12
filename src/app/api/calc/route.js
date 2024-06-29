import { NextResponse } from "next/server";
import calculateTone from "@/helper/tone";
import calculateTtwo from "@/helper/ttwo";
import calculateTthree from "@/helper/tthree";
import calculateTfour from "@/helper/tfour";
import calculateTfive from "@/helper/tfive";
import calculateTsix from "@/helper/tsix";
import calculateTseven from "@/helper/tseven";
import calculateTeight from "@/helper/teight";

let horizontal = [
  ["V", "L", "B", "R", "H", "X", "N", "D", "T", "J"],
  ["U", "K", "A", "Q", "G", "W", "M", "C", "S", "I"],
  ["T", "J", "Z", "P", "F", "V", "L", "B", "R", "H"],
  ["S", "I", "Y", "O", "E", "U", "K", "A", "Q", "G"],
  ["R", "H", "X", "N", "D", "T", "J", "Z", "P", "F"],
  ["Q", "G", "W", "M", "C", "S", "I", "Y", "O", "E"],
  ["P", "F", "V", "L", "B", "R", "H", "X", "N", "D"],
  ["O", "E", "U", "K", "A", "Q", "G", "W", "M", "C"],
  ["N", "D", "T", "J", "Z", "P", "F", "V", "L", "B"],
  ["M", "C", "S", "I", "Y", "O", "E", "U", "K", "A"],
];

export const GET = async (req) => {
  let url = new URL(req.url);
  let date = url.searchParams.get("date");
  let data = [];
  let dataTone = calculateTone(date);
  data.push(dataTone);
  let dateTtwo = calculateTtwo(date);
  data.push(dateTtwo);
  let dateThree = calculateTthree(date);
  data.push(dateThree);
  let dateFour = calculateTfour(date);
  data.push(dateFour);
  let dateFive = calculateTfive(date);
  data.push(dateFive);
  let dateSix = calculateTsix(date);
  data.push(dateSix);
  let dateSeven = calculateTseven(date);
  data.push(dateSeven);
  let dateEight = calculateTeight(date);
  data.push(dateEight);
  return NextResponse.json(data);
};
