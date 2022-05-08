import image from "./BTS.png";
import "./App.css";
import products from "./products.js";

function Album(props) {
  return (
    <div class="product" style={{ width: "240px" }}>
      <img class="imagesize" src={props.image} />
      <h2 style={{ color: "white" }}>{props.name}</h2>
      <h4 style={{ marginTop: "0px", marginBottom: "10px", color: "white" }}>
        {props.price}
      </h4>
    </div>
  );
}
function App() {
  const albums = products.map((item) => (
    <Album image={item.image} name={item.name} price={item.price} />
  ));
  return (
    // "rgb(254, 220, 0)"
    <div style={{ backgroundColor: "rgb(53, 53, 53)" }}>
      <h1
        class="websitetitle"
        style={{ display: "flex", justifyContent: "center", color: "white" }}
      >
        Army Music Store
      </h1>
      <h4 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        selling the albums of your favourite singer
      </h4>
      <img
        class="center"
        style={{
          width: "1000px",
          alignSelf: "center",
        }}
        src={image}
      />
      <div class="albums">{albums}</div>
    </div>
  );
}

export default App;
