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
  useEffect(() => {
    let data = getDataFromLocalStorage("listClientes");
    setClientes(data);
  });

  const lisc = clientes.map((client) => {
    return (
      <ListC
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
    setClientes([...clientes, cliente]);
    saveDataToLocalStorage("listClientes", clientes);
  };

  return (
    <div>
      <Nav />

      <Boton />
      <NewC addCliente={addCliente} />

      <div className="contenCard">{lisc}</div>
    </div>
  );
}
