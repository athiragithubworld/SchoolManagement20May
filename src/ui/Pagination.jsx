import classes from "../styles/Pagination.module.css";

export default function Pagination({ step }) {
  // const progress = document.querySelector("#progress");
  // const prev = document.querySelector("#prev");
  // const next = document.querySelector("#next");
  // const circles = document.querySelectorAll(".circle");

  // let currentActive = 1;

  // next.addEventListener("click", () => {
  //   currentActive++;

  //   if (currentActive > circles.length) {
  //     currentActive = circles.length;
  //   }

  //   update();
  // });

  // prev.addEventListener("click", () => {
  //   currentActive--;

  //   if (currentActive < 1) {
  //     currentActive = 1;
  //   }

  //   update();
  // });

  // function update() {
  //   circles.forEach((circle, idx) => {
  //     if (idx < currentActive) {
  //       circle.classList.add("active");
  //     } else {
  //       circle.classList.remove("active");
  //     }
  //   });

  //   const actives = document.querySelectorAll(".active");

  //   progress.style.width =
  //     ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  //   if (currentActive === 1) {
  //     prev.disabled = true;
  //   } else if (currentActive === circles.length) {
  //     next.disabled = true;
  //   } else {
  //     prev.disabled = false;
  //     next.disabled = false;
  //   }
  // }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.progress_container}>
          <div className={classes.progress} id="progress"></div>
          <div
            className={
              step === 1
                ? `${classes.circle} ${classes.circle_active}`
                : classes.circle
            }
          >
            1
          </div>
          <div
            className={
              step === 2
                ? `${classes.circle} ${classes.circle_active}`
                : classes.circle
            }
          >
            2
          </div>
          <div
            className={
              step === 3
                ? `${classes.circle} ${classes.circle_active}`
                : classes.circle
            }
          >
            3
          </div>
        </div>
        {/* <button class="btn" id="prev"     disabled>Prev</button>
        <button class="btn" id="next">Next</button>  */}
      </div>
    </>
  );
}
