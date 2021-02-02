import axios from "axios";

export const fetchData = async (url) => {
  return await axios
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
