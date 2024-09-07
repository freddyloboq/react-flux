import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

function Product() {
  const { store, actions } = useContext(Context);
  return (
    <>
      <h1>Product</h1>

      <Link to="/">ir a home</Link>
      <p>{store.iva}</p>
      <div className="container">{
        store.characters.map((character)=>{
          return <p key={character.id}>{character.name}</p>;
        })
      }</div>
    </>
  );
}

export default Product;
