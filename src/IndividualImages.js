import React from "react";
import "./styles.css";

export default function IndividualImages() {
  return (
    <div className="App">
      <div className="container">
        {[99, 101, 123, 124, 111].map((el, i) => {
          return (
            <div className="int" key={el}>
              <a href={`/details`}>
                <img
                  src={`https://i.picsum.photos/id/${el}/200/300.jpg`}
                  alt="change"
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
