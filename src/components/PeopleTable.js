import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOAD_USERS } from "../redux/reducers/people/actions";
import { selectPeople } from "../redux/reducers/people/selectors";
import PeopleTablePagination from "./PeopleTablePagination";
const PeopleTable = () => {
  const people = useSelector(selectPeople);
  const dispatch = useDispatch();
  const changePage = (newPage) =>
    dispatch({
      type: LOAD_USERS,
      payload: {
        page: newPage,
        search: people.search,
      },
    });
  const search = (e) =>
    dispatch({
      type: LOAD_USERS,
      payload: {
        page: 1,
        search: e.target.value,
      },
    });
  console.log(people);
  return (
    <>
      {" "}
      <h1 className="App">
        Star Wars People
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  value={people.search}
                  onChange={search}
                  placeholder="Search people..."
                  id="autocomplete-input"
                  className="autocomplete"
                />
              </div>
            </div>
          </div>
        </div>
      </h1>
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
        <>
          <table className="highlight centered responsive-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Birth year</th>
                <th>Eye color</th>
                <th>Gender</th>
                <th>Hair color</th>
                <th>Height</th>
                <th />
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
                  url,
                } = character;
                const id = url.replaceAll(/\D/g, "");
                return (
                  <tr key={created}>
                    <td>{name}</td>
                    <td>{birth_year}</td>
                    <td>{eye_color}</td>
                    <td>{gender}</td>
                    <td>{hair_color} </td>
                    <td>{height}</td>
                    <td>
                      {" "}
                      <Link to={`/people/${id}`}> Details</Link>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <PeopleTablePagination
            page={people.page}
            total={people.data.count}
            onChange={changePage}
          />
        </>
      )}
    </>
  );
};

export default PeopleTable;
