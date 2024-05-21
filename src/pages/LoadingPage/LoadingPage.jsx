import React from "react"; // Importing necessary dependencies from React
import classes from "../../style/LoadingPage.module.css"; // Importing CSS module for styling

// Functional component LoadingPage
export default function LoadingPage() {
  return (
    <>
      <div className={classes.mainbody}>
        {/* Main body container */}
        <div className={classes.book}>
          {/* Book container */}
          <div
            className={`${classes.book__pg} ${classes[" - shadow"]}`}
          ></div>{" "}
          {/* Book page */}
          <div className={classes.book__pg}></div> {/* Book page */}
          <div
            className={`${classes.book__pg} ${classes["book__pg--2"]}`}
          ></div>{" "}
          {/* Book page */}
          <div
            className={`${classes.book__pg} ${classes["book__pg--3"]}`}
          ></div>{" "}
          {/* Book page */}
          <div
            className={`${classes.book__pg} ${classes["book__pg--4"]}`}
          ></div>{" "}
          {/* Book page */}
          <div
            className={`${classes.book__pg} ${classes["book__pg--5"]}`}
          ></div>{" "}
          {/* Book page */}
        </div>
      </div>
    </>
  );
}
