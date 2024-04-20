import { isValidNumber, isNotEmptyString } from "../validation.js";

const deleteIconClasses = ["fa-regular", "fa-trash-can", "delete-icon"];
const runtimeIconClasses = ["fa-solid", "fa-hourglass", "me-2", "runtime-icon"];
const sontItemClasses = [
  "list-group-item",
  "d-flex",
  "flex-wrap",
  "justify-content-between",
  "position-relative",
  "song-item",
];

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

$(() => {
  const songList = $("<ul></ul>");
  songList.addClass("list-group fs-5");
  $(".container").append(songList);

  const createRuntimeLabels = (runtime, song) => {
    const runtimeLabelContainer = $("<div></div>");
    runtimeLabelContainer.addClass("runtime-icon-info-container invisible");
    const runtimeLabel = $("<label></label>");
    runtimeLabel.text(runtime);
    runtimeLabel.addClass("runtime-icon-info");
    runtimeLabelContainer.append(runtimeLabel);
    song.append(runtimeLabelContainer);
  };

  const createSongItem = (songName, artistName, runtime, songList) => {
    const runtimeIcon = $("<i></i>");
    const deleteIcon = $("<i></i>");
    deleteIcon.addClass(deleteIconClasses.join(" "));
    runtimeIcon.addClass(runtimeIconClasses.join(" "));
    const song = $("<li></li>");
    song.addClass(sontItemClasses.join(" "));
    const songInfoContainer = $("<div></div>");

    const songNameSpan = $("<span></span>");
    songNameSpan.addClass("fw-bold me-1");
    songNameSpan.text(songName);

    const artistNameSpan = $("<span></span>");
    artistNameSpan.text(`by ${artistName}`);
    songInfoContainer.append(songNameSpan, artistNameSpan);
    song.append(songInfoContainer);

    const songIconsContainer = $("<div></div>");

    songIconsContainer.append(runtimeIcon, deleteIcon);
    song.append(songIconsContainer);
    createRuntimeLabels(runtime, song);
    songList.append(song);

    //SHOW RUNTIME TOOLTIP AND DELETE SONG
    song.on("click", (event) => {
      if ($(event.target).hasClass("delete-icon")) {
        $(event.target).parents(".song-item").remove();
      }
    });

    song.on("mouseover", (event) => {
      if ($(event.target).hasClass("runtime-icon")) {
        const currentRuntimeContainer = $(event.target)
          .parent()
          .siblings(".runtime-icon-info-container");
        currentRuntimeContainer.removeClass("invisible");
      }
    });

    song.on("mouseout", (event) => {
      if ($(event.target).hasClass("runtime-icon")) {
        const currentRuntimeContainer = $(event.target)
          .parent()
          .siblings(".runtime-icon-info-container");
        currentRuntimeContainer.addClass("invisible");
      }
    });
  };

  $(".add-song-btn").on("click", () => {
    const songName = $(".song-name-field").val();
    const artistName = $(".artist-field").val();
    const runtime = $(".runtime-field").val();

    if (
      isNotEmptyString(songName) &&
      isNotEmptyString(artistName) &&
      isNotEmptyString(runtime)
    ) {
      $(".error-label").text("");
      if (isValidRuntimeValue(runtime)) {
        const parsedRuntime = parsedRuntimeValue(runtime);
        createSongItem(songName, artistName, parsedRuntime, songList);
      } else {
        $(".error-label").text(
          "The runtime format should be HH:MM:SS, MM:SS or MM and cannot be 0"
        );
      }
    } else {
      $(".error-label").text("The fields cannot be empty");
    }
  });
});
