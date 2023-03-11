// import React from "react";

import { useState } from "react";
import { useEffect } from "react";

const useData = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    const URL = "products.json";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCard(data);
      });
  }, [card]);
  return card;
};

export default useData;
