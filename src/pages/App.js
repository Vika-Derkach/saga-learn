import React from "react";
import { useSelector } from "react-redux";
import { selectPeople } from "../redux/reducers/people/selectors";

function App() {
  const people = useSelector(selectPeople);
  // const dispatch = useDispatch();
  console.log(people);
  return (
    <>
      {" "}
      <h1 className="App">Star Wars People</h1>
      {people.loading ? (
        <div className="preloader-wrapper active ">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      ) : (
        <table className="highlight centered responsive-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth year</th>
              <th>Eye color</th>
              <th>Gender</th>
              <th>Hair color</th>
              <th>Height</th>
            </tr>
          </thead>

          <tbody>
            {people?.data?.results.map((character) => {
              const {
                name,
                birth_year,
                eye_color,
                gender,
                hair_color,
                height,
                created,
              } = character;
              return (
                <tr key={created}>
                  <td>{name}</td>
                  <td>{birth_year}</td>
                  <td>{eye_color}</td>
                  <td>{gender}</td>
                  <td>{hair_color} </td>
                  <td>{height}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;
