import React from "react";
import dayjs from "dayjs";

import { Space, TimePicker } from "antd";

const onChange = (time, timeString) => {
};

export default function TimeTableTimePicker({hidden ,duration}) {
  const parentNode = document.getElementById("modal");
  const format =  "HH:mm";
  return (
    <div style={{ visibility: hidden ? "hidden" : "block", width: "180px" }}>
      {duration ? (
        <TimePicker
          style={{ width: "180px" }}
          defaultValue={dayjs("01:00", format)}
          format={format}
          getPopupContainer={(trigger) => trigger.parentNode}
        />
      ) : (
        <TimePicker
          style={{ width: "180px" }}
          use12Hours
          format="h:mm a"
          onChange={onChange}
          getPopupContainer={(trigger) => trigger.parentNode}
        />
      )}
    </div>
  );
}
