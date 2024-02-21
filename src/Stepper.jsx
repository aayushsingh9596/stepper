import {useState } from "react";
import PropTypes from "prop-types";

const Stepper = ({ totalsteps }) => {
  const [step, setStep] = useState(1);

  const circleColor = (stepNumber) => {
    if (stepNumber === step) return "blue";
    else if (stepNumber < step) return "green";
    else return "red";
  };

  return (
    <div>
      {" "}
      <div className="stepper">
        <div
          className="progreesbar"
          style={{
            margin: "auto",
            display: "black",
            height: "10px",
            border: "1px solid black",
          }}
        >
          <div
            className="progress"
            style={{
              width: `${(100 / totalsteps) * step}%`,
              height: "10px",
              backgroundColor: "#2ECC40",
            }}
          ></div>
        </div>
        <div
          className="circles"
          style={{
            position: "relative",
          }}
        >
          {Array.from({ length: totalsteps }, (_, i) => i + 1).map(
            (stepNumber) => {
              return (
                <div
                  key={stepNumber}
                  className="circle"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: circleColor(stepNumber),
                    borderRadius: "50%",
                    position: "absolute",
                    left: `${(100 / totalsteps) * stepNumber}%`,
                    top: "-30px",
                  }}
                ></div>
              );
            }
          )}
        </div>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            setStep((prevStep) => (prevStep === 1 ? 1 : prevStep - 1));
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setStep((prevStep) =>
              prevStep === totalsteps ? totalsteps : prevStep + 1
            );
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

Stepper.propTypes = {
  totalsteps: PropTypes.number.isRequired,
};

export default Stepper;
