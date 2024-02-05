import Link from "next/link";
import { Reveal } from "../Reveal";
import { useState } from "react";

export function CtaDark() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData); // Puedes manejar la lógica de envío del formulario aquí
  };
  return (
    <div className="px-6 my-20 md:mt-0">
      <div className="max-w-5xl px-4 py-6 mx-auto border-transparent bg-radialBlack md:px-16 md:py-12 shadow-dark rounded-3xl">
        <div className="grid items-center md:grid-cols-2">
          <div className="my-8">
            <Reveal>
              <h3 className="text-3xl font-bold">
                Descubre Nuestros Servicios
              </h3>
            </Reveal>
            <br />
            <Reveal>
              <p>
                {" "}
                ¿Buscas soluciones de software a medida para tu negocio?
                ¡Estamos aquí para ayudarte! Contáctanos ahora para obtener una
                cotización personalizada y llevar tus ideas al siguiente nivel.
              </p>
            </Reveal>
            <br />
            <Reveal>
              <span className="text-3xl font-light degradedBlue bg-blueLight">
                Déjanos tus datos y te contactamos
              </span>
            </Reveal>
          </div>

          <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nombre"
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="correo"
                >
                  Correo Electrónico
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="correo"
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="mensaje"
                >
                  Mensaje
                </label>
                <textarea
                  className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="form-button hover:bg-blue-700 text-white font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
