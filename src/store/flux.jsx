const getState = ({getStore, getActions, setStore}) => {
  return {
    store: {
      monto: 2000,
      iva: 0
    },

    actions: {
      calcIva: (amount)=>{
        const { iva, monto } = getStore()
        console.log('iva :>> ', monto + iva);
        setStore({ iva: amount * 0.19 });
      },

      getChacarter: () => {
        fetch('https://rickandmortyapi.com/api/character')
        .then((response)=>response.json())
        .then((data)=> setStore({characters:data.results}))
        .catch((error)=> console.log('error :>> ', error))
      }
    }
  }
}

export default getState