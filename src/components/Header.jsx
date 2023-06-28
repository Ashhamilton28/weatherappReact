import React from "react";

function Header() {
  return (
    <div className="flex pt-5 items-center justify-between px-4">
      {/* far left 3 icons */}
      <div className="flex gap-4 items-center">
        <div className="rounded-full max-w-min bg-dark-gray-color">
          <span className="p-3 text-white material-symbols-outlined">
            grid_view
          </span>
        </div>

        <div className="rounded-full max-w-min bg-dark-gray-color">
          <span className="p-3 text-white material-symbols-outlined">
            notifications
          </span>
        </div>

        <div className="flex gap-2">
          <span className="text-white material-symbols-outlined">
            location_on
          </span>
          <p className="text-white">
            New York, <span className="text-gray-400">NY</span>
          </p>
        </div>
      </div>

      <form>
        <div className="form-control flex items-center relative gap-2">
          <span className="text-white material-symbols-outlined absolute pl-6">
            search
          </span>
          <input
            className="min-w-[500px] rounded-xl py-2 px-14 bg-dark-gray-color"
            placeholder="Search City..."
          />
        </div>
      </form>

      {/* far right 3 icons */}
      <div className="flex gap-4">
        <div className="flex gap-2  bg-dark-gray-color rounded-full">
          <div className="rounded-full max-w-min ">
            <span className="text-white material-symbols-outlined p-3">
              brightness_5
            </span>
          </div>
          <div className="rounded-full max-w-min bg-primarycolor-blue ">
            <span className="p-3 material-symbols-outlined ">dark_mode</span>
          </div>
        </div>

        <div className="w-12 h-12 rounded-full bg-pink-500"></div>
      </div>
    </div>
  );
}

export default Header;
