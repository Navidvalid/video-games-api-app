import axios from 'axios';
import { gameDetailsURL, gameScreenshotURL } from '../api';

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: 'IS_LOADING',
  });

  const detailData = await axios.get(gameDetailsURL(id));
  const screenshotsDetail = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screen: screenshotsDetail.data,
    },
  });
};
