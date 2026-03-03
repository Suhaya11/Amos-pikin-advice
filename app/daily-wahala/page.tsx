"use client";
import React from "react";

const DailyWahalaTrackingComponent = () => {
  const [uterace, setSpeack] = React.useState<SpeechSynthesisUtterance>();
  React.useEffect(() => {
    const text = document.getElementById("hi")?.textContent;
    setSpeack(new SpeechSynthesisUtterance(text));
  }, []);

  return (
    <>
      <div id="hi">Hi sulaiman i hope you're fine</div>{" "}
      <button
        className="border p-2 bg-green-400 text-white font-bold "
        onClick={(e) =>
          speechSynthesis.speak(
            new SpeechSynthesisUtterance(e.currentTarget.textContent),
          )
        }
      >
        speak
      </button>
    </>
  );
};

export default DailyWahalaTrackingComponent;
