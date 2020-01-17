import React, { Suspense } from "react";
import "./styles.css";
import ImageWrapper from "./ImageWrapper";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {[1, 2, 3, 45, 5, 63, 78, 8, 9, 44, 11, 43, 33, 14].map((el, i) => {
          return (
            <div className="int" key={i}>
              <a href={`details/${el}`}>
                <img
                  src={`https://i.picsum.photos/id/${el}/200/300.jpg`}
                  alt="change"
                />
              </a>
            </div>
          );
        })}
        <Suspense>
          <ImageWrapper prop={[99, 101, 123, 124, 111]} />
        </Suspense>
      </div>
    </div>
  );
}
