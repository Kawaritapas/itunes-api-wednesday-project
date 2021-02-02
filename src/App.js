import React, { useEffect } from "react";
import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import Types from "./redux/types";
const { Search } = Input;
function App(props) {

  useEffect(() => {
    let url = `/search?term=drake`;
    dispatch({ type: Types.REQUEST_API, payload: url });
  }, []);

  const dispatch = useDispatch();

  const onSearch = (value) => {
    let url = `/search?term=${value}`;
    dispatch({ type: Types.REQUEST_API, payload: url });
  };

  const search = useSelector((state) => state.search);

  let notFound;

  if (search.songs) {
    if (search.songs.data.results.length == 0) {
      notFound = (
        <h1 style={{ color: "grey", fontFamily: "apple" }}>
          No Records Found Try to Search Something Else
        </h1>
      );
    }
  }

  return (
    <>
      <div>
        <img
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "30px",
            display: "block",
          }}
          src="itunes.svg"
        ></img>
      </div>
      <h1
        style={{ textAlign: "center", marginTop: "20px", fontFamily: "apple" }}
      >
        Search latest songs from itunes
      </h1>
      <div style={{ width: "100%", textAlign: "center", marginTop: "40px" }}>
        <Search
          placeholder="Search Songs"
          style={{ width: "350px" }}
          onSearch={onSearch}
          enterButton
        />
      </div>
      <div
        className="ui segment"
        style={{ width: "70%", margin: "auto", marginTop: "30px" }}
      >
        {search.songs ? (
          search.songs.data.results.map(function (song) {
            return <Card song={song} key={song.trackId} />;
          })
        ) : (
          <h1 style={{ textAlign: "center", color: "grey" }}>loading....</h1>
        )}
        <span style={{ textAlign: "center" }}>{notFound}</span>
      </div>
    </>
  );
}

export default App;
