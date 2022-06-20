import "C:/Users/HP/Development/Nora-music-store/musicstore/src/App.css";
import Album from "C:/Users/HP/Development/Nora-music-store/musicstore/src/components/AlbumItem";
import products from "C:/Users/HP/Development/Nora-music-store/musicstore/src/products.js";

const albums = products.map((item) => (
  <Album image={item.image} name={item.name} price={item.price} />
));
// function Album(props) {
//   return (
//     <div class="product" style={{ width: "240px" }}>
//       <img class="imagesize" src={props.image} />
//       <h2 style={{ color: "white" }}>{props.name}</h2>
//       <h4 style={{ marginTop: "0px", marginBottom: "10px", color: "white" }}>
//         {props.price}
//       </h4>
//     </div>
//   );
// }

export default albums;
