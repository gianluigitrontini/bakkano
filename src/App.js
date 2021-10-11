import logo from './logo.svg';

function App() {
  return (
    <div className="text-center">
      <header className="bg-gray-500 min-h-screen flex flex-col justify-center items-center text-white overflow-hidden text-lg md:text-3xl lg:text-4xl">
        <img src={logo} className="animate-spin-slow h-52 md:h-72 lg:h-96 select-none pointer-events-none" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="flex flex-col md:flex-row gap-x-10">
          <a
            style={{ color: '#61dafb' }}
            className="hover:underline mt-4 font-medium text-3xl lg:text-4xl"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="hover:underline mt-4 text-green-400 font-medium text-3xl lg:text-4xl"
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn TailwindCSS
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
