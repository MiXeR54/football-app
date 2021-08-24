import { useState, useEffect } from "react";
import fetcher from "../utils/fetcher";

export const useDataStatus = (url) => {
  //potentially add a loader status for spinner
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetcher(url)
      .then((data) => setData(data))
      .catch(() =>
        setError({ msg: "Нет ответа от сервера, привышен лимит запросов" })
      );
  }, [url]);
  return { data, error };
};
