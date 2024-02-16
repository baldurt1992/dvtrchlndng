import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY || "";
const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID || "";
const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID || "";
const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY || "";

export function CtaDark() {
  const [isVerified, setIsVerified] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleVerifyCaptcha = (token: string | null) => {
    if (token) {
      setIsVerified(true);
    }
  };

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
    telefono: "",
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
    if (!isVerified) {
      alert("Please verify that you are not a robot.");
      return;
    } else {
      emailjs
        .send(emailjsServiceId, emailjsTemplateId, formData, emailjsPublicKey)
        .then(
          () => {
            setFormData({
              nombre: "",
              correo: "",
              mensaje: "",
              telefono: "",
            });
            if (recaptchaRef.current) {
              recaptchaRef.current.reset();
            }
            setIsVerified(false);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="form-container margin-container-global px-6 mb-20 mt-0 md:mt-0 md:mb-0">
      <div className="max-w-7xl h-auto px-4 py-4 mx-auto  md:px-16 md:py-12 rounded-3xl">
        <div className="form-contact grid items-center md:grid-cols-2">
          <div className="my-0">
            <div>
              <h3 className="text-5xl leading-tight md:text-6xl title-mobile font-semibold md:leading-tight">
                <span className="block degradedBlue bg-blueLight title-mobile">
                  Descubre
                </span>
                <span className="block title-mobile">Nuestros</span>
                <span className="block title-mobile">Servicios</span>
              </h3>
            </div>
            <br />
            <div className="text-p">
              <p>
                {" "}
                ¿Buscas soluciones de software a medida para tu negocio?
                ¡Estamos aquí para ayudarte! Contáctanos ahora para obtener una
                cotización personalizada y llevar tus ideas al siguiente nivel.
              </p>
            </div>
            <br />
            <div>
              <span className="text-2xl font-light degradedBlue bg-blueLight">
                !Explora nuestro mundo¡
              </span>
            </div>
            <br /> <br />
          </div>

          <div className="max-w-md mx-auto md:w-100 form-section md:h-full mt-0 p-6 bg-gray-100 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4 ">
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
                  htmlFor="telefono"
                >
                  Teléfono
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="telefono"
                  type="phone"
                  name="telefono"
                  value={formData.telefono}
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
                  maxLength={300}
                  rows={4}
                  required
                ></textarea>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={reCaptchaKey}
                  onChange={handleVerifyCaptcha}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="form-button hover:bg-blue-700 text-white text-lg font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
