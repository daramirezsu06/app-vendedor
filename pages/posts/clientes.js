import Nav from "../../components/nav";
import ListC from "../../components/listc";
import { useState, useEffect } from "react";
import Boton from "../../components/boton";
import NewC from "../../components/newc";
import {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
} from "../../components/LocalStorageFunctions";

const listClientes = [
  {
    name: "maipu",
    direccion: "calle 23 # 45 barrie la magnolia",
    ubicacion: "https://maps.app.goo.gl/uhbEErcSAWGE2nXA9",
    id: "cliente_001",
    tel: "5990530",
    mail: "maipu@gmail.com",
    dia: 1,
  },
  {
    name: "mercar",
    direccion: "calle 23 # 45 barrie la magnolia",
    ubicacion: "https://maps.app.goo.gl/uhbEErcSAWGE2nXA9",
    id: "cliente_001",
    tel: "5990530",
    mail: "maipu@gmail.com",
    dia: 2,
  },
  {
    name: "merkesos",
    direccion: "calle 23 # 45 barrie la magnolia",
    ubicacion: "https://maps.app.goo.gl/uhbEErcSAWGE2nXA9",
    id: "cliente_001",
    tel: "5990530",
    mail: "maipu@gmail.com",
    dia: 3,
  },
  {
    name: "sanzen",
    direccion: "calle 23 # 45 barrie la magnolia",
    ubicacion: "https://maps.app.goo.gl/uhbEErcSAWGE2nXA9",
    id: "cliente_001",
    tel: "5990530",
    mail: "maipu@gmail.com",
    dia: 4,
  },
];

export default function Clientes() {
  const [clientes, setClientes] = useState(listClientes);

  useEffect(
    () => {
      let data = getDataFromLocalStorage("listClientes");
      if (data && Array.isArray(data)) {
        setClientes(data);
      }
    },
    []
  );

  const lisc = clientes.map((client) => {
    return (
      <ListC
        key={client.name}
        name={client.name}
        direccion={client.direccion}
        ubicacion={client.ubicacion}
        id={client.id}
        tel={client.tel}
        mail={client.mail}
      />
    );
  });

  const addCliente = (cliente) => {
    const newClientes = [...clientes, cliente];
    setClientes([...clientes, cliente]);

    saveDataToLocalStorage("listClientes", clientes);
  };

  return (
    <div>
      <Nav />

      <Boton />
      <NewC addCliente={addCliente} />

      <div className="contenCard">{lisc}</div>

      <Example />
    </div>
  );
}

function Example() {
  const [count, setCount] = useState(0);

  // console.log('Render Example');

  // console.log('count: ', count);

  // useEffect(() => {
  //   console.log('useEffect Example');
  // }, [count]);


  return (
    <div>
      <h1>Example</h1>
      <p>You clicked {count} times</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      {count > 3 && count < 10 && <Greet />}
    </div>
  )
}

function Greet() {
  console.log('Render Greet');

  useEffect(() => {
    console.log('Mount Greet');

    return () => {
      console.log('Unmount Greet');
    }
  }, []);

  return (
    <div>
      <h1>Greet</h1>
    </div>
  );
}
