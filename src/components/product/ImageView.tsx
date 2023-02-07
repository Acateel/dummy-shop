import { useState } from "react";

const ImageView = (props: { images: string[] }) => {
  const [currentImg, setCurrentImg] = useState(props.images[0]);

  const renderedSelectImg = () =>
    props.images.map((image) => (
      <img key={image} className="image_view_select_image" src={image} />
    ));

  return (
    <div className="image_view">
      <div className="image_view_select">
        {renderedSelectImg()}
      </div>
      <img className="image_view_image" src={currentImg} />
    </div>
  );
};

export default ImageView;
