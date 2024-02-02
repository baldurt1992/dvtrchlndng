import Image from "next/image";

export const dataCounter = [
  {
    id: 1,
    text: "Sitio web",
    description: " Creamos sitios web impactantes y funcionales que reflejan la esencia única de tu marca, proporcionando una presencia en línea sólida.",
    image: <Image src="/assets/img1.png" className="img-card" alt="img1" width={50} height={50}/>,
  },
  {
    id: 2,

    text: "Landing",
    description: "Diseñamos páginas de aterrizaje efectivas que capturan la atención y convierten clics en acciones, impulsando el crecimiento de tu proyecto.",
    image: <Image src="/assets/img2.png" className="img-card" alt="img2" width={50} height={50}/>,
  },
  {
    id: 3,

    text: "Ecommerce",
    description: "Potenciamos tu negocio en línea con tiendas virtuales intuitivas y atractivas, optimizadas para convertir visitantes en clientes.",
    image: <Image src="/assets/img3.png" className="img-card" alt="img3" width={50} height={50}/>,
  },

  {
    id: 4,
    text: "Apps",
    description: "Desarrollamos aplicaciones móviles y de software personalizadas que llevan tu visión a la palma de la mano de tus usuarios.",
    image: <Image src="/assets/img4.png" className="img-card4" alt="img4" width={50} height={50}/>, 
  }
];