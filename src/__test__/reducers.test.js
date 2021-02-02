import {songs} from "../redux/reducers/songReducer";
import { render } from "@testing-library/react"
import Types from "../redux/types";
import getPostMock from "./mockdata";

describe('reducers', () => {
    it('should return the initial state', () => {
      expect(songs(null, {})).toEqual({});
    });
  
    it('should return songs object', () => {
      const action = {
        type: Types.SONGS,
        payload: getPostMock
      };
      let songFunctionReturn = songs({},action);
      let songsObject = songFunctionReturn.songs;

      expect(songsObject).toEqual(getPostMock);
    });
  });