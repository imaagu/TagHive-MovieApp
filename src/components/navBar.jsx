import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const NavBar = (props) => {
  const { isUserActive } = props;
  const { onLogout } = useAuth();

  return (
    <div className="bg-gray-400 py-4 px-2 w-full border-b-stone-600 border-2 flex justify-between items-center">
      <div>
        <span className="font-bold text-xl">MRA</span>
      </div>
      <div className="flex gap-4">
        {isUserActive && (
          <a
            className="px-4 py-1 mt-1 text-sm text-white bg-blue-300 rounded-lg hover:bg-blue-500"
            href="/preference"
          >
            Preference
          </a>
        )}
        {isUserActive && (
          <a
            className="px-4 py-1 mt-1 text-sm text-white bg-blue-300 rounded-lg hover:bg-blue-500"
            href="/movies"
          >
            Movies
          </a>
        )}
        <div>
          {isUserActive ? (
            <button
              onClick={onLogout}
              className="px-4 py-1 mt-1 text-sm text-white bg-blue-300 rounded-lg hover:bg-blue-500"
              type="button"
            >
              Log out
            </button>
          ) : (
            <a
              className="px-4 py-1 mt-1 text-sm text-white bg-blue-300 rounded-lg hover:bg-blue-500"
              href="/Login"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
