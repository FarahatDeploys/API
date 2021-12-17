import axios from "axios";
import { useEffect, useState } from "react";

//////// End of imports

////////////// Start of functions
const ListToRender = () => {
  const [List, setList] = useState([]);
  console.log("Functional Component Called ==> {ListToRender}");
  useEffect(() => {
    async function fetchingData() {
      console.log("Use Effect Monitored Change");
      const request = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("The Data you get from request is ", request.data);
      setList(request.data);
    }
    fetchingData();
  }, []);
  return (
    <div>
      {List.map((el) => (
        <h1 key={el.id}>{el.name}</h1>
      ))}
    </div>
  );
};
export default ListToRender;
