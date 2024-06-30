"use client";

import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState();
  const [data, setData] = useState();
  let pictures = [
    "/assets/t1.jpg",
    "/assets/t2.jpg",
    "/assets/t3.jpg",
    "/assets/t4.jpg",
    "/assets/t5.jpg",
    "/assets/t6.jpg",
    "/assets/t7.jpg",
    "/assets/t8.jpg",
    "/assets/t9.jpg",
    '/assets/t10.jpg',
    '/assets/t11.jpg',
    '/assets/t12.jpg',
    '/assets/t13.jpg',
    '/assets/t14.jpg',
    '/assets/t15.jpg',
    '/assets/t16.jpg',
    '/assets/t17.jpg',
    '/assets/t18.jpg',
    '/assets/t19.jpg',
    '/assets/t20.jpg',
    '/assets/t21.jpg',
  ];
  const hitApi = async () => {
    if (!date) {
      window.alert("Please enter date");
      return;
    }
    const res = await fetch(`/api/calc?date=${date}`);
    let data = await res.json();
    console.log(data);
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
      <div className="mx-3 my-2 grid grid-cols-2">
        {data && (
          <>
            {data.map((d, i) => (
              <div key={i} className="mt-6">
                <div className="flex gap-3 items-center">
                  <img src={pictures[i]} alt="t1" className="w-56 h-56" />
                  <div>
                    <h1 className="text-md text-white">
                      Left Top : {d.leftTop}
                    </h1>
                    <h1 className="text-md text-white">
                      Top Right : {d.topRight}
                    </h1>
                    <h1 className="text-md text-white">
                      Right Bottom : {d.rightBottom}
                    </h1>
                    <h1 className="text-md text-white">
                      Bottom Left : {d.bottomLeft}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
