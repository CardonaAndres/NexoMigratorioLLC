import WhatsAppSvg from '../../assets/svgs/WhatsApp.svg';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/19549552933"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
      aria-label="WhatsApp Icon"
    >
      <img
        src={WhatsAppSvg} 
        alt="WhatsApp Icon"
        className="w-8 h-8" // Tamaño del ícono
      />
    </a>
  );
};
