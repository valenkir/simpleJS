const bigCircle = {
  radius: 15,
  area(radius) {
    const pi = 3.14;
    return pi * radius * radius;
  },
};

let smallCircle = {
  radius: 5,
};

smallCircle.area = bigCircle.area.bind(bigCircle, smallCircle.radius);

const bigCircleAreaField = document.querySelector(".big-circle-field");
const smallCircleAreaField = document.querySelector(".small-circle-field");
const getAreasBtn = document.querySelector(".get-areas-btn");

getAreasBtn.addEventListener("click", () => {
  bigCircleAreaField.value = bigCircle.area(bigCircle.radius);
  smallCircleAreaField.value = smallCircle.area();
});
