import { gql, useQuery, useSubscription } from "@apollo/client";

const Hasura = () => {
  //   const GET_HR_EMPLOYEES = gql`
  //     query {
  //       hr_employees {
  //         name
  //         surname
  //       }
  //     }
  //   `;

  const SUB_HR_EMPLOYEES = gql`
    subscription {
      hr_employees {
        name
        surname
      }
    }
  `;

  const { data, loading } = useSubscription(SUB_HR_EMPLOYEES);

  if (loading) {
    return <h1>Laduje sie...</h1>;
  }

  if (!loading) {
    console.log(data);
    return (
      <>
        <h1>Hasura to ja</h1>
        {data.hr_employees.map((pracownik, index) => (
          <div key={index}>
            <h2>Nowy koleś</h2>
            <p>
              <b>Imie i nazwisko:</b>
              <br />
              <br />
              {pracownik.name}, {pracownik.surname}
            </p>
          </div>
        ))}
      </>
    );
  }
};

export default Hasura;
