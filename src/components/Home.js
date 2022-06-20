import image from "C:/Users/HP/Development/Nora-music-store/musicstore/src/BTS.png";
import "C:/Users/HP/Development/Nora-music-store/musicstore/src/App.css";
// import products from "C:/Users/HP/Development/Nora-music-store/musicstore/src/products.js";
import albums from "./AlbumsList.js";

function Home() {
  //   const albums = products.map((item) => (
  //     <Album image={item.image} name={item.name} price={item.price} />
  //   ));
  return (
    // // "rgb(254, 220, 0)"
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
export default Home;
