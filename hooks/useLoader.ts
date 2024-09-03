import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useLoader = (f: () => any): ReturnType<typeof f> => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    // artificial delay of 500 ms
    await new Promise((resolve) => setTimeout(resolve, 500));

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
