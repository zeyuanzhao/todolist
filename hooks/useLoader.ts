import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useLoader = (f: () => any) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await f();
      setData(response);
    } catch (e) {
      if (e instanceof Error) Alert.alert("Error", e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, refetch: fetchData };
};

export default useLoader;
