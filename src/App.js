import { useQuery } from "react-query";
import axios from "axios";

function App() {
  const { data, error, isLoading } = useQuery("dogs", () =>
    axios("https://random.dog/woof.json")
  );
  if (error) return <h1>Error, try again! {error}</h1>;
  if (isLoading) return <h1>Loading ...</h1>;
  return (
    <div>
      <img src={data.data.url} alt="dog" />
    </div>
  );
}

export default App;
