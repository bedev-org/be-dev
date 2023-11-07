import React from "react";
import "./styles.css";

const RadioButton = ({
  onChange,
  choose1,
  choose2,
  choose3,
  choose4,
  choose5,
  choose6,
  choose7,
  choose8,
}) => {
  return (
    <>
      <div class="container">
        <form onChange={onChange}>
          <label>
            <input type="radio" name="radio" value={choose1} />
            <span>{choose1}</span>
          </label>
          <label>
            <input type="radio" name="radio"  value={choose2} />
            <span>{choose2}</span>
          </label>
          <label>
            <input type="radio" name="radio"  value={choose3} />
            <span>{choose3}</span>
          </label>
          <label>
            <input type="radio" name="radio"  value={choose4} />
            <span>{choose4}</span>
          </label>
          <label>
            <input type="radio" name="radio"  value={choose5} />
            <span>{choose5}</span>
          </label>
          <label>
            <input type="radio" name="radio"  value={choose6} />
            <span>{choose6}</span>
          </label>
          <label>
            <input type="radio" name="radio"  value={choose7} />
            <span>{choose7}</span>
          </label>
          <label>
            <input type="radio" name="radio"  value={choose8} />
            <span>{choose8}</span>
          </label>
        </form>
      </div>
    </>
  );
};

export default RadioButton;
