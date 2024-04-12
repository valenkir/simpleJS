const ageRestriction = () => {
  const age = prompt("Enter your age");
  if (age >= 18 && age <= 120) {
    alert("Welcome!");
  } else {
    alert("Come back later!");
    document.location = "../../pages/homework32.html";
  }
};

ageRestriction();
