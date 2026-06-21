import React from "react";

const page = () => {
  return (
    <div>
      <h3 className="title">decision making app</h3>
      <p className="w-10/12 my-2 mx-auto">
        This is an application that allow user to add some works (action) and
        give them ranking and reason for doing them.{" "}
      </p>{" "}
      <p className="w-10/12 my-2 mx-auto">
        Letter if some works from these works arise for user , He'll just select
        them and ask the app to use predefined parameter to decice which work
        user suppose to do and use predefined reason to remind the user reason
        of selecting the decided action.
      </p>
    </div>
  );
};

export default page;
