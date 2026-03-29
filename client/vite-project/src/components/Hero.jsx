import heroImage from '../assets/hero.jpg'

function Hero() {
    return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: 'blur(4px)',
          transform: 'scale(1.05)', // prevents blur edges being cut
        }}
      ></div>

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-5"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Шнауцер Клуб България
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Някакъв текст
        </p>
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded transition-colors duration-300">
          Бутон
        </button>
      </div>
    </section>
  );
}

export default Hero;