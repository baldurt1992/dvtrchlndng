"use client";

export function ContactButton() {
  const handleRedirect = () => {
    window.location.href = "https://api.whatsapp.com/send/?phone=3117261670";
  };

  return (
    <div className="">
      <div className="btn-bg bg-2 flex justify-center items-center">
        <div className="flex flex-row items-center justify-center px-0 py-2 button-contact btn btn-2">
          <button
            onClick={handleRedirect}
            className="text-sl md:text-lg shadow-button"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  );
}
