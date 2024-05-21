import * as React from "react";
import { PiWarningCircleBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

function Notification({
  status,
  message,
  showAlert,
  setShowAlert,
  alertKey,
  style,
}) {
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    if (showAlert) {
      timeoutRef.current = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [showAlert, setShowAlert, alertKey]);

  return (
    <div
      className={`flex gap-10 items-center px-2 text-white ${
        status === "success" ? "bg-green-600" : "bg-red-600"
      }
        ${showAlert ? "" : "hidden"}
       rounded-xl h-14 mt-[calc(100vh-44.5rem)] ml-[calc(100vw-70rem)] absolute ${style}`}
    >
      <span className="flex gap-2 p-1">
        {status === "success" ? (
          <img
            loading="lazy"
            src={
              "https://cdn.builder.io/api/v1/image/assets/TEMP/71a27482f06852e240fa05718c14eaa5fb03cccd6d0a678a027cced73420cd64?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
            }
            alt="Checkmark icon"
            className="shrink-0 self-stretch w-6 aspect-square"
          />
        ) : (
          <PiWarningCircleBold />
        )}
        <p className="flex-1 self-stretch my-auto text-sm leading-4 m-0">
          {message}
        </p>
      </span>

      <button
        className="self-stretch my-auto text-base font-medium"
        onClick={() => setShowAlert(false)}
      >
        <IoMdClose className=" text-2xl" />
      </button>
    </div>
  );
}

export default Notification;
