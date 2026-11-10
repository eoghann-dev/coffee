function App() {
  return (
    <>
      <header>
        <nav className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
          <h1>
            <span>Tinatangi</span>
            CAFE
          </h1>

          <ul className="flex flex-wrap justify-center gap-6">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Ambience</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Visit</a>
            </li>
          </ul>

          <a className="self-center md:self-auto rounded-full bg-amber-900 px-5 py-2 text-white" href="">Visit Now</a>
        </nav>
      </header>

      <main>
        <section></section>
      </main>

      <footer></footer>
    </>
  )
}

export default App
