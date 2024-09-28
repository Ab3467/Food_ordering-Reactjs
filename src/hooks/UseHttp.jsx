import { useEffect } from "react";
import { useState, useCallback } from "react";

async function sendHttpsRequest(url, confing) {
  const response = await fetch(url, confing);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "something went wrong");
  }

  return resData;
}

export default function UseHttp(url, confing, initialData) {
  const [error, setError] = useState();
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = useCallback(
    async function sendRequest() {
      setIsLoading(true);
      try {
        const resData = sendHttpsRequest(url, confing);
        setData(resData);
      } catch (error) {
        setError(error.message || "something went wrong");
      }
      setIsLoading(false);
    },
    [url, confing]
  );

  useEffect(() => {
    if (confing && confing.method == "GET") {
      sendRequest();
    }
  }, [sendRequest, confing]);
  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
}
