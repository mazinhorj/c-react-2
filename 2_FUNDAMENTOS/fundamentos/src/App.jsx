import './App.css';

import Eventos from './components/Eventos';
import PrimeiroComponente from './components/PrimeiroComponente';
import ReutilizarComponente from './components/ReutilizarComponente';
import TemplateExpression from './components/TemplateExpression';

function App() {

  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <PrimeiroComponente />
      <TemplateExpression />
      <p>Abaixo, inserido no app diretamente:</p>
      <ReutilizarComponente />
      <Eventos />
    </div>
  )
}

export default App
