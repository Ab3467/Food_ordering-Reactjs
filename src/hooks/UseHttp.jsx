import { useEffect, useState, useCallback } from "react";

async function sendHttpsRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Something went wrong");
  }

  return resData;
}

export default function useHttp(url, config, initialData) {
  const [error, setError] = useState(null);
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async function sendRequest(data) {
    setIsLoading(true);
    setError(null); 
    try {
      const resData = await sendHttpsRequest(url, {...config,body : data});
      setData(resData);
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
    setIsLoading(false);
  }, [url, config]);

  useEffect(() => {
 
    if (!config || !config.method || config.method === "GET") {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
}



