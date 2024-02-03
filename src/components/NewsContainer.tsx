import React from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface News {
  title: string;
  date: string;
  category: string;
  link: string;
}

const fetchData = async () => {
  const response = await Axios.get<News[]>("http://localhost:8080/api/data");
  return response.data;
};

export const NewsContainer = () => {
  const { data, isLoading, isError, error } = useQuery<News[]>(
    {
      queryKey: ["server"],
      queryFn: fetchData,
    }
  );

  if (isLoading) {
    return <h1>Ladataan</h1>;
  }

  if (isError || !data) {
    return <h1>Virhe: {error?.message}</h1>;
  }

  return (
    <div className="container" id="newsContainer">
      {data.map((n) => (
        <div key={n.title}>
          <p>Title: {n.title}</p>
          <p>Date: {n.date}</p>
          <p>Category: {n.category}</p>
          <p>Link: {n.link}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default NewsContainer;