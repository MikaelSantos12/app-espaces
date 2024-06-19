// LocationContext.tsx
import * as Location from "expo-location";
import React, { createContext, useContext, useEffect, useState } from "react";

interface LocationContextType {
  location: Location.LocationObject | null;
  errorMsg: string | null;
}

export const LocationContext = createContext<LocationContextType>({
  location: null,
  errorMsg: null,
});
interface Props {
  children: React.ReactNode;
}
export const LocationProvider: React.FC<Props> = ({ children }) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        setErrorMsg(error.message);
      }
    })();
  }, []);

  return (
    <LocationContext.Provider value={{ location, errorMsg }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = (): LocationContextType => {
  return useContext(LocationContext);
};
