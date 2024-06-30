import { NextResponse } from "next/server";
import calculateTone from "@/helper/tone";
import calculateTtwo from "@/helper/ttwo";
import calculateTthree from "@/helper/tthree";
import calculateTfour from "@/helper/tfour";
import calculateTfive from "@/helper/tfive";
import calculateTsix from "@/helper/tsix";
import calculateTseven from "@/helper/tseven";
import calculateTeight from "@/helper/teight";
import calculateTnine from "@/helper/tnine";
import calculateTten from "@/helper/tten";
import calculateTeleven from "@/helper/televen";
import calculateTtwelve from "@/helper/ttwelve";
import calculateTthirteen from "@/helper/tthirteen";
import calculateTfourteen from "@/helper/tfourteen";
import calculateTfifteen from "@/helper/tfifteen";
import calculateTsixteen from "@/helper/tsixteen";
import calculateTseventeen from "@/helper/tseventeen";
import calculateTeighteen from "@/helper/teighteen";
import calculateTnineteen from "@/helper/tnineteen";
import calculateTtwenty from "@/helper/ttwenty";
import calculateTtwentyone from "@/helper/ttwentyone";

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
  let dateNine = calculateTnine(date);
  data.push(dateNine);
  let dateTen = calculateTten(date);
  data.push(dateTen);
  let dateEleven = calculateTeleven(date);
  data.push(dateEleven);
  let dateTwelve = calculateTtwelve(date);
  data.push(dateTwelve);
  let dateThirteen = calculateTthirteen(date);
  data.push(dateThirteen);
  let dateFourteen = calculateTfourteen(date);
  data.push(dateFourteen);
  let dateFifteen = calculateTfifteen(date);
  data.push(dateFifteen);
  let dateSixteen = calculateTsixteen(date);
  data.push(dateSixteen);
  let dateSeventeen = calculateTseventeen(date);
  data.push(dateSeventeen);
  let dateEighteen = calculateTeighteen(date);
  data.push(dateEighteen);
  let dateNineteen = calculateTnineteen(date);
  data.push(dateNineteen);
  let dateTwenty = calculateTtwenty(date);
  data.push(dateTwenty);
  let dateTwentyOne = calculateTtwentyone(date);
  data.push(dateTwentyOne);
  return NextResponse.json(data);
};
