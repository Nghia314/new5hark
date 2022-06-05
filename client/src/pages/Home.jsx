import React from "react";

function Home() {
  const wordList = [
    "Walk",
    "Sleep",
    "Code",
    "Learn"
  ];

  // <button className="btn btn-neutral px-12">Walk</button>

  return (
    <>
    <div className="p-3">
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-neutral px-12">Walk</button>
          <button className="btn btn-neutral px-12">Sleep</button>
          <button className="btn btn-neutral px-12">Code</button>
          <button className="btn btn-neutral px-12">Learn</button>
        </div>
    </div>
    <div className="relative">
      <div className="sticky top-0 card bg-neutral max-w-[50rem] m-3 p-3">
        <h1 className="card-title text-3xl font-bold text-center">Do Watcha Dig!</h1>
        <p className="p-3">Some text to represent our tagline</p>

        <a className="btn btn-primary" href="#">START</a>
      </div>
    </div>
    </>
  );
}

export default Home;
