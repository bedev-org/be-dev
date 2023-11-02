import React from "react";
import "./styles.css";

const RadioButton = ({ choice }) => {

  return (
    <>
      <div class="container">
        <form>
          <label>
            <input type="radio" name="radio" />
            <span>{choice}</span>
          </label>

          {/* <label>
            <input type="radio" name="radio" />
            <span>{choose2}</span>
          </label>
          <label>
            <input type="radio" name="radio" />
            <span>{choose3}</span>
          </label>
          <label>
            <input type="radio" name="radio" />
            <span>{choose4}</span>
          </label>
          <label>
            <input type="radio" name="radio" />
            <span>{choose5}</span>
          </label>
          <label>
            <input type="radio" name="radio" />
            <span>{choose6}</span>
          </label>
          <label>
            <input type="radio" name="radio" />
            <span>{choose7}</span>
          </label>
          <label>
            <input type="radio" name="radio" />
            <span>{choose8}</span>
          </label> */}
        </form>
      </div>
    </>
  );
};

export default RadioButton;
