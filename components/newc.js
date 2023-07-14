import { useState } from "react";

export default function NewC(props) {
  const [formData, setFormData] = useState({
    name: "",
    direction: "",
    ubicacion: "",
    tell: "",
    mail: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer algo con los datos almacenados en formData, como enviarlos a una API o guardarlos en una base de datos
    props.addCliente(formData);
    setFormData({
      name: "",
      direction: "",
      ubicacion: "",
      tell: "",
      mail: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="direction">Direction:</label>
        <input
          type="text"
          id="direction"
          name="direction"
          value={formData.direction}
          onChange={handleChange}
        />

        <label htmlFor="ubicacion">Ubicacion:</label>
        <input
          type="text"
          id="ubicacion"
          name="ubicacion"
          value={formData.ubicacion}
          onChange={handleChange}
        />

        <label htmlFor="tell">Tell:</label>
        <input
          type="text"
          id="tell"
          name="tell"
          value={formData.tell}
          onChange={handleChange}
        />

        <label htmlFor="mail">Mail:</label>
        <input
          type="text"
          id="mail"
          name="mail"
          value={formData.mail}
          onChange={handleChange}
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
