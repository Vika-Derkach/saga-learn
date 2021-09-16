import React from "react";
import { Link } from "react-router-dom";

function App() {
  // const store = useSelector((store) => store);
  // const dispatch = useDispatch();
  // console.log(store);
  return (
    <div className="App">
      Redux Saga tutorial{" "}
      <div>
        <Link to="/blog"> open blog</Link>
      </div>{" "}
    </div>
  );
}

export default App;
