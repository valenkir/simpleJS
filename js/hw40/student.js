class Student {
  constructor(name, age, grade, activity = "studying") {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.activity = activity;
  }

  getActivity() {
    return this.activity;
  }

  changeActivity(activity) {
    this.activity = activity;
  }

  renderStudentInfo(container) {
    const studentInfo = $("<p class='fs-5 ms-5'></p>");
    studentInfo.text(`Hi, I'm ${this.name}. I'm ${this.age} years old.`);
    const activityBtn = $(
      "<button class='btn btn-primary w-25 ms-5'>How are you doing?</button>"
    );
    $(container).append(studentInfo, activityBtn);
    $(activityBtn).on("click", () => {
      alert(`I'm ${this.getActivity()}`);
    });
  }
}

const student1 = new Student("Martin", 19, 100);

$(() => {
  student1.renderStudentInfo(".student");
});
