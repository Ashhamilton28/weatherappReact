import React from "react";

function OtherLargerCities() {
  return (
    <div>
      <div className="flex gap-4">
        <h3 className="text-white font-bold">Other large cities</h3>
        <p className="text-white gap-6">
          Show All <span>&gt;</span>
        </p>
      </div>

      <div>
        <div className="text-white">
          <p>US</p>
          <p>California</p>
          <p>Mostly Sunny</p>
        </div>
      </div>
    </div>
  );
}

export default OtherLargerCities;
