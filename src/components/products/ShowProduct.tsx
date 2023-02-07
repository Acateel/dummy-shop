import { useParams } from "react-router-dom";

const ShowProduct = () => {
  const { id } = useParams();
  return <div>Show Product {id}</div>;
};

export default ShowProduct;
