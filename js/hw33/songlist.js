import { isValidNumber, isNotEmptyString } from "../validation.js";

const songField = document.querySelector(".song-name-field");
const artistField = document.querySelector(".artist-field");
const runtimeField = document.querySelector(".runtime-field");
const addSongBtn = document.querySelector(".add-song-btn");
const errorLabel = document.querySelector(".error-label");
const songListContainer = document.querySelector(".container");

const isValidRuntimeValue = (runtimeValue) => {
  const runtimeArr = runtimeValue.split(":");
  const isValidFormat = runtimeArr.every(
    (time) => isValidNumber(time) && time >= 0
  );
  const isTotalRuntimeNotZero = runtimeArr.some((time) => parseInt(time) > 0);
  if (
    runtimeArr.length &&
    runtimeArr.length <= 3 &&
    isValidFormat &&
    isTotalRuntimeNotZero
  ) {
    if (runtimeArr.length === 1) {
      return runtimeArr[0].length <= 2;
    }
    return true;
  }
  return false;
};

addSongBtn.addEventListener("click", () => {
  const songName = songField.value;
  const artistName = artistField.value;
  const runtime = runtimeField.value;

  if (
    isNotEmptyString(songName) &&
    isNotEmptyString(artistName) &&
    isNotEmptyString(runtime)
  ) {
    errorLabel.textContent = "";
    if (isValidRuntimeValue(runtime)) {
      const parsedRuntime =
        runtime.length > 2
          ? runtime
          : parseInt(runtime) < 10
          ? `0${parseInt(runtime)}:00`
          : `${runtime}:00`;
    } else {
      errorLabel.textContent =
        "The runtime format should be HH:MM:SS, MM:SS or MM and cannot be 0";
    }
  } else {
    errorLabel.textContent = "The fields cannot be empty";
  }
});
