import React from "react";

const decisionForm = () => {
  return (
    <form action="">
      <label htmlFor="chooseAction" className="font-bold">
        What are your works:
      </label>
      <summary>
        choise
        <details>
          <label htmlFor="check">firts</label>{" "}
          <input type="checkbox" name="check" id="check" />
          <li>hose here</li>
          <li>hose here</li>
          <li>hose here</li>
          <li>hose here</li>
        </details>
      </summary>
    </form>
  );
};

export default decisionForm;
