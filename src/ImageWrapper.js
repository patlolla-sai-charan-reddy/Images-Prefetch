import React from "react";

class ImageWrapper extends React.Component {
  render() {
    console.log("pp", this.props);
    return (
      <div style={{ display: "none" }}>
        {this.props.prop.map((el, i) => {
          return (
            <div key={i}>
              <img
                src={`https://i.picsum.photos/id/${el}/200/300.jpg`}
                alt="prefetch"
              />
              ;
            </div>
          );
        })}
      </div>
    );
  }
}

export default ImageWrapper;
