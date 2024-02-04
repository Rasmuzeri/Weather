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
    return <h1>Ladataan sääuutisia palvelimelta...</h1>;
  }

  if (isError || !data) {
    return <h1>Virhe: {error?.message}</h1>;
  }

  return (
    <div className="container" id="newsContainer">
      <h2>Sääuutisia Yleltä</h2>
      {data.map((n) => (
        <div key={n.title}>
          <a href={n.link} target="_blank" rel="noopener noreferrer">
            <p>{n.title}</p>
          </a>
          <p>Julkaistu: {n.date}</p>
          <p>Kategoria: {n.category}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default NewsContainer;