function Header() {
    return(
        <header className="bg-white text-black px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo / Title */}
        <h1 className="text-xl font-bold">
          Шнауцер Клуб България
        </h1>

        {/* Navigation */}
        <nav className="space-x-6">
          <a href="#" className="text-xl hover:text-blue-800">
            За Клуба
          </a>
          <a href="#" className="text-xl hover:text-blue-800">
            Кучета
          </a>
          <a href="#" className="text-xl hover:text-blue-800">
            Кученца
          </a>
          <a href="#" className="text-xl hover:text-blue-800">
            Изложби
          </a>
          <a href="#" className="text-xl hover:text-blue-800">
            Развъдници
          </a>
        </nav>

      </div>
    </header>
    )
}

export default Header