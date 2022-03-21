import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks";
import { NavBar } from "../../components";
import PreferenceForm from "./preferenceForm";

const Preference = () => {
  const [options, setOptions] = useState({});

  const { userDetails, userDetailsAvailable, updateUserPreference, fetching } =
    useAuth();

  useEffect(() => {
    if (userDetailsAvailable) {
      setOptions(userDetails.preference);
    }
  }, [userDetailsAvailable]);

  return (
    <div>
      <NavBar isUserActive={userDetailsAvailable} />
      {userDetailsAvailable && (
        <div className="px-8 py-6 my-4 text-left  ">
          <h3 className="text-2xl font-bold text-center">
            Set your Preference
          </h3>
          <div className="bg-gray-200 shadow-lg py-4 px-2 rounded-lg mt-8">
            {userDetails.havepreference ? (
              <>
                {Object.keys(options).length > 0 && (
                  <PreferenceForm
                    options={options}
                    onSubmit={updateUserPreference}
                    loader={fetching}
                  />
                )}
              </>
            ) : (
              <PreferenceForm
                options={{}}
                onSubmit={updateUserPreference}
                loader={fetching}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Preference;
