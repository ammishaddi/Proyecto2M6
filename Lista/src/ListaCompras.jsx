// lista.jsx
import { useState } from "react";

function ListaCompras() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto("");
    }
  };

  const eliminarProducto = (index) => {
    const nuevosProductos = productos.filter((_, i) => i !== index);
    setProductos(nuevosProductos);
  };

  return (
    <section className="main-productos">
      <h2 className="productos">PRODUCTOS</h2>
      <section>
        <input
          type="text"
          value={nuevoProducto}
          onChange={(e) => setNuevoProducto(e.target.value)}
        />
        <button onClick={agregarProducto}>Agregar</button>
      </section>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto}
            <button  className="eliminar" onClick={() => eliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListaCompras;
