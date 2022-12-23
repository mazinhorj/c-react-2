import ReutilizarComponente from './ReutilizarComponente';
import './TemplateExpression.css';

const TemplateExpression = () => {
  const name = "Mazinho";
  const dados = {
    idade: 39,
    profis: "analista de desnvolvimento",
  };

  return (
    <div>
      <h3>Seja bem-vindo, {name}</h3>
      <h4>Atualmente você tem {dados.idade} anos e é {dados.profis}.</h4>

      <p>A soma é {2 + 2}</p>

      <p>Aqui tbm reaproveitado abaixo:</p>
      <ReutilizarComponente />

    </div>
  )
}

export default TemplateExpression