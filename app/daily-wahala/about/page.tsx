import React from "react";

const page = () => {
  return (
    <div>
      <h2 className="title">Daily wahala trancker</h2>
      <p className="w-10/12 my-2 mx-auto">
        This is a todo app like application which let you record obstacles you
        encountered on the day and letter provide you with summary and save the
        record for you to view letter
      </p>
      <h3 className="title">How it works</h3>
      <p className="w-10/12 my-2 mx-auto">
        User will specify the details about the wahala, i.e its name,
        Description , Rating i.e difficulty level , problem status ,date if its
        not from today if larger date is selected then it'll show error message
        and it will just assume today as the date
      </p>
    </div>
  );
};

export default page;
