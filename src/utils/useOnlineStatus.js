import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] =
    useState(true);
  // check online status

  useEffect(() => {
    addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  return onlineStatus;
};
export default useOnlineStatus;
