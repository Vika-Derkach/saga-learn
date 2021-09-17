import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPeopleDetails } from "../redux/reducers/peopleDetails/selectors";

const Details = () => {
  const peopleDetails = useSelector(selectPeopleDetails);
  const dispatch = useDispatch();
  console.log("...", peopleDetails);
  const { loading, data } = peopleDetails;

  if (loading) {
    return (
      <div className="spinner-layer spinner-red">
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
    );
  }
  const { name, birth_year, skin_color, mass } = data;
  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <h1>{name}</h1>
              <h4>Birth Year: {birth_year}</h4>
              <h4>Skin Color: {skin_color}</h4>
              <h4>Mass: {mass}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
