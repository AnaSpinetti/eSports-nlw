import './styles/main.css';
import logo from './assets/Logo.png';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img className='max-w-[500px]' src={logo} alt="Logotipo eSports" />
      <h1 className='text-6xl text-white font-black mt-20px'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui</h1>
    
      <div className='grid grid-cols-6 mt-16'>
          <a href="">
            <img src="" alt="" />
          </a>
      </div>
    </div>
  )
}

export default App
