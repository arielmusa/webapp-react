import axios from "axios";
import { useEffect } from "react";

const apiUrl = "http://localhost:3000";

export default function HomePage() {
  useEffect(() => {
    axios.get(`${apiUrl}/movies`).then((res) => console.log(res));
  }, []);

  return <h1>hello world</h1>;
}
