import React from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const NewsContainer = () => {
    const { data, isLoading, isError, error } = useQuery<string>({
        queryKey: ["server"],
        queryFn: () =>
          Axios.get("http://localhost:8080/api/data")
              .then(res => res.data)
      });
    
    if (isLoading) {
        return (
            <h1>Ladataan</h1>
        );
    }
    
    if (isError || !data) {
    return <h1>Virhe: {error?.message}</h1>;
    }

    return (
        <div className="container" id="newsContainer">
            <h1>{data}</h1>
        </div>
    );
}

export default NewsContainer;