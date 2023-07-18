import React from "react";
import { AppContext } from "../context";

const Home = () => {
  const { data, setSearch } = React.useContext(AppContext);
  const [location, setLocation] = React.useState([]);
  const [current, setCurrent] = React.useState([]);
  React.useEffect(() => {
    setLocation(data.location);
    setCurrent(data.current);
  }, [data]);

  const searchHandler = (e) => {
    setSearch(`${e.target.value}`);
  };

  return (
    <>
      <input
        onChange={searchHandler}
        type="text"
        placeholder="Enter City Name"
      />
      <div className="inform-cont">
        <h1>
          City:{location && location.name}({location && location.region})
        </h1>
        <h1>Country:{location && location.country}</h1>
        <h1>Region:{location && location.tz_id}</h1>
        <h2>Local Date:{location && location.localtime}</h2>
        <h3>Temprature:{current && current.temp_c}C</h3>
      </div>
    </>
  );
};

export default Home;
