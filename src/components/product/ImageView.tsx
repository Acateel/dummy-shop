import { useState } from "react";
import "./ImageView.css";

const ImageView = (props: { images: string[] }) => {
  const [currentImg, setCurrentImg] = useState(props.images[0]);

  const renderedSelectImg = () =>
    props.images.map((image) => (
      <div
        key={image}
        className={`image_view_select_image ${
          image === currentImg && "image_selected"
        }`}
        onMouseEnter={() => setCurrentImg(image)}
      >
        <img src={image} />
      </div>
    ));

  return (
    <div className="image_view">
      <div className="image_view_select">{renderedSelectImg()}</div>
      <div className="image_view_image_box">
        <img className="image_view_image" src={currentImg} />
      </div>
    </div>
  );
};

export default ImageView;
