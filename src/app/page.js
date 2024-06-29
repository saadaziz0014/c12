"use client";

import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState();
  const [data, setData] = useState();
  const hitApi = async () => {
    if (!date) {
      window.alert("Please enter date");
      return;
    }
    const res = await fetch(`/api/calc?date=${date}`);
    let data = await res.json();
    setData(data);
  };
  return (
    <>
      <div className="flex justify-center my-10">
        <div className="flex flex-col gap-10">
          <h1 className="text-3xl text-white text-center">Home - C12</h1>
          <input
            type="date"
            className="p-2 rounded-lg"
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            className="p-2 w-full rounded-lg text-white bg-blue-500"
            onClick={hitApi}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="mx-3 my-2 grid grid-cols-4">
        {data && (
          <>
            {data.map((d, i) => (
              <div key={i} className="mt-3">
                <h1 className="text-xl text-white">Table {i + 1}</h1>
                <h1 className="text-md text-white">Left Top : {d.leftTop}</h1>
                <h1 className="text-md text-white">Top Right : {d.topRight}</h1>
                <h1 className="text-md text-white">
                  Right Bottom : {d.rightBottom}
                </h1>
                <h1 className="text-md text-white">
                  Bottom Left : {d.bottomLeft}
                </h1>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
