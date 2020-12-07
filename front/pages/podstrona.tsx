// import { useQuery } from "@apollo/client";
import Axios from "axios";
import { useState } from "react";

export const Podstrona = ({}) => {
  const [czyPokazacImie, setCzyPokazacImie] = useState(false);
  const [liczba, setLiczba] = useState(2);

  const handleButtonClick = () => {
    setCzyPokazacImie(!czyPokazacImie);
  };

  return (
    <>
      <h1>Pracownicy dzialu HR</h1>
      {/* <p>{imie}</p> */}
      <p>Czy pokazac imie? {czyPokazacImie.toString()}</p>
      <button onClick={handleButtonClick}>Guzik</button>

      <p>Moja liczba to: {liczba}</p>
      <button
        onClick={() => {
          setLiczba(liczba + 1);
        }}>
        {" "}
        Podnies liczbe o 1{" "}
      </button>
    </>
  );
};

// export async function getStaticProps(context) {
//   const { data } = await Axios.get(
//     "https://jsonplaceholder.typicode.com/todos/1"
//   );
//   console.log(data);
//   return {
//     props: { name: data.title },
//     // will be passed to the page component as props
//   };
// }

export default Podstrona;
