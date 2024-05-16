class Shape {
  constructor(measurements, validationValues) {
    if (this.#areValidArgs(measurements, validationValues)) {
      for (let key in measurements) {
        this[key] = measurements[key];
      }
    } else {
      throw new Error("Invalid measurements!");
    }
    this.PI = 3.14;
  }

  #areValidArgs(measurements, validationValues) {
    let areInvalidArgsPresent = validationValues.filter(
      (value) => !Object.keys(measurements).includes(value)
    );

    return (
      areInvalidArgsPresent.length === 0 &&
      !Object.values(measurements).includes(0)
    );
  }
}

class Rectangle extends Shape {
  constructor(measurements) {
    super(measurements, ["height", "width"]);
  }

  getArea() {
    return this.height * this.width;
  }

  renderRectangle(container) {
    const rect = $("<div></div>");
    rect.addClass(
      "bg-danger-subtle ms-5 text-center fs-5 d-flex justify-content-center align-items-center"
    );
    rect.css({
      height: `${this.height}px`,
      width: `${this.width}px`,
      border: `1px solid black`,
    });
    const areaLabel = $("<label></label>");
    areaLabel.text(`Area: ${this.getArea()}`);
    $(rect).append(areaLabel);
    $(container).append(rect);
  }
}

class Circle extends Shape {
  constructor(measurements) {
    super(measurements, ["radius"]);
  }

  getCircumference() {
    return 2 * this.PI * this.radius;
  }

  renderCircle(container) {
    const circle = $("<div></div>");
    circle.addClass(
      "bg-warning-subtle ms-5 text-center fs-5 d-flex justify-content-center align-items-center"
    );
    circle.css({
      height: `${this.radius * 2}px`,
      width: `${this.radius * 2}px`,
      border: `1px solid black`,
      "border-radius": "50%",
    });
    const areaLabel = $("<label></label>");
    areaLabel.text(`Circumference: ${this.getCircumference()}`);
    $(circle).append(areaLabel);
    $(container).append(circle);
  }
}

const rect = new Rectangle({ height: 120, width: 300 });
const circle = new Circle({ radius: 108.5 });

$(() => {
  rect.renderRectangle(".shape");
  circle.renderCircle(".shape");
});
