import {useContext} from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

function Home() {
  const {store, actions} = useContext(Context)
  console.log('store.characters :>> ', store.characters);
  return (
    <>
      <h1>Home</h1>
      <Link to="product">ir a productos</Link>
      <button onClick={() => actions.calcIva(2000)}>
        calcular iva de 2000
      </button>
      <button onClick={() => actions.getChacarter()}>
        Obtener caracteres rick and morty
      </button>
      {/* <p>{store.iva}</p> */}
    </>
  );
}

export default Home;
