import React from "react";

const Page = ({ params }) => {
  const { keyword } = params;
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-24 overflow-hidden">
      <div className="w-full">
        <h1 className="text-color-primary font-bebas text-7xl text-center mb-12">
          ORIENTAL FIGHTER
        </h1>
        <div className="grid place-content-center">
          <div className="container-box">
            <div
              className="box box-1"
              style={{
                "--img": "url(/img/Hero161-portrait.png)",
              }}
              data-text="Zilong"
            ></div>
            <div
              className="box box-2"
              style={{
                "--img": "url(/img/Hero841-portrait.png)",
              }}
              data-text="Ling"
            ></div>
            <div
              className="box box-3"
              style={{
                "--img": "url(/img/Hero871-portrait.png)",
              }}
              data-text="Baxia"
            ></div>
            <div
              className="box box-4"
              style={{
                "--img": "url(/img/Hero891-portrait.png)",
              }}
              data-text="Wanwan"
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
