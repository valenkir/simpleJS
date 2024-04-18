import { isValidNumber, isNotEmptyString } from "../validation.js";

const songField = document.querySelector(".song-name-field");
const artistField = document.querySelector(".artist-field");
const runtimeField = document.querySelector(".runtime-field");
const addSongBtn = document.querySelector(".add-song-btn");
const errorLabel = document.querySelector(".error-label");
const songListContainer = document.querySelector(".container");

const songList = document.createElement("ul");
songList.classList.add("list-group", "fs-5");
songListContainer.append(songList);

const runtimeIcon = '<i class="fa-solid fa-hourglass me-2 runtime-icon"></i>';
const deleteIcon = '<i class="fa-regular fa-trash-can delete-icon"></i>';

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

const parsedRuntimeValue = (runtimeValue) => {
  if (runtimeValue.length <= 2 && parseInt(runtimeValue) < 10) {
    return `0${parseInt(runtimeValue)}:00`;
  } else if (runtimeValue.length <= 2 && parseInt(runtimeValue) >= 10) {
    return `${runtimeValue}:00`;
  } else {
    const runtimeArr = runtimeValue.split(":");
    runtimeArr.forEach((time, index) => {
      if (time.length === 1) {
        runtimeArr[index] = `0${time}`;
      }
    });
    return runtimeArr.join(":");
  }
};

const createRuntimeLabels = (runtime, song) => {
  const runtimeLabelContainer = document.createElement("div");
  runtimeLabelContainer.classList.add(
    "runtime-icon-info-container",
    "invisible"
  );
  const runtimeLabel = document.createElement("label");
  runtimeLabel.textContent = runtime;
  runtimeLabel.classList.add("runtime-icon-info");
  runtimeLabelContainer.append(runtimeLabel);
  song.append(runtimeLabelContainer);
};

const createSongItem = (songName, artistName, runtime, songList) => {
  const song = document.createElement("li");
  song.classList.add(
    "list-group-item",
    "d-flex",
    "flex-wrap",
    "justify-content-between",
    "position-relative",
    "song-item"
  );
  const songInfoContainer = document.createElement("div");

  const songNameSpan = document.createElement("span");
  songNameSpan.classList.add("fw-bold", "me-1");
  songNameSpan.textContent = songName;

  const artistNameSpan = document.createElement("span");
  artistNameSpan.textContent = `by ${artistName}`;
  songInfoContainer.append(songNameSpan, artistNameSpan);
  song.append(songInfoContainer);

  const songIconsContainer = document.createElement("div");

  songIconsContainer.innerHTML += runtimeIcon;
  songIconsContainer.innerHTML += deleteIcon;

  song.append(songIconsContainer);
  createRuntimeLabels(runtime, song);
  songList.append(song);

  //SHOW RUNTIME TOOLTIP AND DELETE SONG
  song.addEventListener("click", (event) => {
    const songElemClass = event.target.className;
    if (songElemClass.includes("runtime-icon")) {
      const currentRuntimeContainer =
        event.target.parentElement.nextElementSibling;
      currentRuntimeContainer.classList.toggle("invisible");
    }
    if (songElemClass.includes("delete-icon")) {
      const currentSongItem = event.target.closest(".song-item");
      currentSongItem.remove();
    }
  });
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
      const parsedRuntime = parsedRuntimeValue(runtime);
      createSongItem(songName, artistName, parsedRuntime, songList);
    } else {
      errorLabel.textContent =
        "The runtime format should be HH:MM:SS, MM:SS or MM and cannot be 0";
    }
  } else {
    errorLabel.textContent = "The fields cannot be empty";
  }
});
