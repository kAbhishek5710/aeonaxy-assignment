import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("../../data.json");
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 gap-10">
      {data.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          desc={item.description}
        />
      ))}
    </div>
  );
}
