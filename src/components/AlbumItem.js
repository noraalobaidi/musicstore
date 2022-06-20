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

export default Album;
