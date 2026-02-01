import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';



function App() {
  const nome = "Maria"

  return (
    <div className="App">
      {/* <h1>Agora é React!</h1> */}
      <p>Bora pra cima Diego!</p>
      <HelloWorld />
      <SayMyName name="Diego" />
      <SayMyName name="Anne" />
      <SayMyName name= {nome} />
      <SayMyName name="João" />
      {/* replicação de código */}
      <Pessoa
      nome="Diego"
      idade="38"
      profissao="Desenvolvedor"
      foto="https://avatars.githubusercontent.com/u/161220165?v=4"
      />

    </div>
  );
}

export default App;