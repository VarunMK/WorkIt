import {
  CHANGE_EASY,
  CHANGE_MED,
  CHANGE_HARD,
  CHANGE_EX,
  CHANGE_NOS,
} from "./types";

const prependZero = (num) => {
  if (num.toString().length == 1) {
    return "0" + num;
  } else if (Number.isInteger(num) == false) {
    return Math.round(num);
  } else {
    return num;
  }
};

export const changeEasy = (time, num, nos) => {
  return {
    type: CHANGE_EASY,
    payload: {
      minu: prependZero(Math.floor((time * num) / 60) * nos),
      secs: prependZero(
        ((time * num) / 60 - Math.floor((time * num) / 60)) * 60 * nos
      ),
    },
  };
};

export const changeMed = (time, num, nos) => {
  return {
    type: CHANGE_MED,
    payload: {
      minu: prependZero(Math.floor((time * num) / 60) * nos),
      secs: prependZero(
        ((time * num) / 60 - Math.floor((time * num) / 60)) * 60 * nos
      ),
    },
  };
};

export const changeHard = (time, num, nos) => {
  return {
    type: CHANGE_HARD,
    payload: {
      minu: prependZero(Math.floor((time * num) / 60) * nos),
      secs: prependZero(
        ((time * num) / 60 - Math.floor((time * num) / 60)) * 60 * nos
      ),
    },
  };
};

export const changeEx = (count) => {
  return {
    type: CHANGE_EX,
    payload: count,
  };
};

export const changeNos = (nos) => {
  return {
    type: CHANGE_NOS,
    payload: nos,
  };
};
