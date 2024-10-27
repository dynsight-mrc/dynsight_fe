import React from "react";

function WorkingHoursWidget() {
  return (
    <div >
      <span className="text-thin text-teltonika-800">Horaires d'ouvertures</span>
      <div className="flex h-full flex-row mt-3">
        <div className="w-1/3 flex flex-col text-gray-500 text-thin">
          <span></span>
          <span>Sunday</span>
          <span>Moday</span>
          <span>Tuesday</span>
          <span>Wednesday</span>
          <span>Thursday</span>
          <span>Friday</span>
        </div>
        <div className="w-2/3 flex flex-col text-gray-600">
          <span>09:00 - 17:00</span>
          <span>09:00 - 17:00</span>

          <span>09:00 - 17:00</span>
          <span>09:00 - 17:00</span>
          <span>09:00 - 17:00</span>
          <span>09:00 - 17:00</span>
        </div>
      </div>
    </div>
  );
}

export default WorkingHoursWidget;
