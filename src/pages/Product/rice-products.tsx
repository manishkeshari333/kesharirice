import rice1 from "../../assets/images/product.png";
import rice2 from "../../assets/images/product.png";
import rice3 from "../../assets/images/product.png";
import rice4 from "../../assets/images/product.png";
import rice5 from "../../assets/images/product.png";
import rice6 from "../../assets/images/product.png";
import rice7 from "../../assets/images/product.png";
import rice8 from "../../assets/images/product.png";
import rice9 from "../../assets/images/product.png";
import rice10 from "../../assets/images/product.png";

const products = [
    { id: 1, name: "Basmati Premium", price: "₹80/kg", image: rice1 },
    { id: 2, name: "Sona Masoori", price: "₹55/kg", image: rice2 },
    { id: 3, name: "Kolam Rice", price: "₹60/kg", image: rice3 },
    { id: 4, name: "Gobindobhog", price: "₹95/kg", image: rice4 },
    { id: 5, name: "Brown Rice", price: "₹70/kg", image: rice5 },
    { id: 6, name: "Parboiled Rice", price: "₹50/kg", image: rice6 },
    { id: 7, name: "Idli Rice", price: "₹65/kg", image: rice7 },
    { id: 8, name: "Red Rice", price: "₹85/kg", image: rice8 },
    { id: 9, name: "Sticky Rice", price: "₹100/kg", image: rice9 },
    { id: 10, name: "Organic Rice", price: "₹120/kg", image: rice10 },
];

const RiceProducts = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                Our Rice Products
            </h2>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "20px",
                }}
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            overflow: "hidden",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                            textAlign: "center",
                            background: "#fff",
                        }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: "100%", height: "180px", objectFit: "cover" }}
                        />
                        <div style={{ padding: "10px" }}>
                            <h3 style={{ margin: "5px 0" }}>{product.name}</h3>
                            <p style={{ fontWeight: "bold", color: "#4CAF50" }}>
                                {product.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RiceProducts;
