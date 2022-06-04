import React from 'react';
import Chart from './Chart';

function Container() {

  return (
    <>
    <div className="container mx-auto">
      <div className="card max-w-3xl p-3">
        <div className="card-body border-solid border-2 border-sky-800 bg-slate-800 border-solid rounded">
          <h2 className="text-center text-3xl font-bold">Monthly Chart Summary</h2>
          <Chart />
        </div>
      </div>
    </div>
    </>
  );
}

export default Container;