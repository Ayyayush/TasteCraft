import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  // Set initial status based on browser's online status
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    // Handler functions
    const handleOnline = () => {
      console.log("You are online");
      setOnlineStatus(true);
    };
    const handleOffline = () => {
      console.log("You are offline");
      setOnlineStatus(false);
    };

    // Add event listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;