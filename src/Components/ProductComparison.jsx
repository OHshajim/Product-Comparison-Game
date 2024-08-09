import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ProductComparison = () => {
  const [score, setScore] = useState(0);

  const products = [
    { id: 1, image: "https://i.ibb.co/5BLhFxq/opened-white-tshirt-with-hanger-wood-background.jpg", price: 150 },
    { id: 2, image: "https://i.ibb.co/MC5B40p/front-blank-white-tshirt-with-hanger-template.jpg", price: 300 },
  ];

  const handleSelection = (selectedProduct) => {
    const otherProduct = products.find(
      (product) => product.id !== selectedProduct.id
    );
    if (selectedProduct.price > otherProduct.price) {
      toast("Correct! This one is more expensive.", { icon: "👏" });
      setScore((prevScore) => prevScore + 1);
    } else {
      toast.error("Incorrect! This one is less expensive.");
    }
  };

  return (
    <div className="comparison-container">
      <h2>Product Comparison Game</h2>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={`Product ${product.id}`}
              className="product-image"
            />
            <button
              className="choose-button"
              onClick={() => handleSelection(product)}
            >
              Choose
            </button>
          </div>
        ))}
      </div>
      <div className="score">Score: {score}</div>
      <Toaster />
    </div>
  );
};

export default ProductComparison;
