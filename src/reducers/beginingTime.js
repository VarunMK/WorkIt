import {
  CHANGE_EX,
  CHANGE_EASY,
  CHANGE_MED,
  CHANGE_HARD,
  CHANGE_NOS,
} from "../actions/types";
const beginingTime = {
  easy: {
    minu: 20,
    secs: "00",
  },
  med: {
    minu: 30,
    secs: "00",
  },
  hard: {
    minu: 50,
    secs: "00",
  },
  count: 1,
  nos: 1,
};
export default function (state = beginingTime, action) {
  switch (action.type) {
    case CHANGE_EASY:
      return {
        ...state,
        easy: action.payload,
      };
    case CHANGE_MED:
      return {
        ...state,
        med: action.payload,
      };
    case CHANGE_HARD:
      return {
        ...state,
        hard: action.payload,
      };
    case CHANGE_EX:
      return {
        ...state,
        count: action.payload,
      };
    case CHANGE_NOS:
      return {
        ...state,
        nos: action.payload,
      };
    default:
      return state;
  }
}
