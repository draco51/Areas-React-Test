import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const { data, isLoading, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>
        Here is a random cat fact!
        <div>
          <button onClick={() => refetch()}>Refetch</button>
        </div>
        <p>{data?.fact}</p>
      </h1>
    </div>
  );
};
