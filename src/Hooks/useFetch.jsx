import { useEffect, useState } from "react";
import { api } from "../utils/axios.js";

function useFetch(params = "", query = "", tag = "") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await api.get(params);
      if (res.data.hasOwnProperty("products")) {
        setData(res.data.products);
      } else {
        setData(res.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return [data, loading];
}

export default useFetch;
