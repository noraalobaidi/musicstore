import image from "./vinyl.jpg";
import "./App.css";
import products from "./products.js";

function Album(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h4>{props.price}</h4>
    </div>
  );
}
function App() {
  const albums = products.map((item) => (
    <Album name={item.name} price={item.price} />
  ));
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Music Store</h1>
      <p style={{ display: "flex", justifyContent: "center" }}>
        selling the newest albums of your favourite singers
      </p>
      <img
        style={{
          width: "200px",
          height: "200px",
        }}
        src={image}
      />
      {albums}
    </div>
  );
}

export default App;
