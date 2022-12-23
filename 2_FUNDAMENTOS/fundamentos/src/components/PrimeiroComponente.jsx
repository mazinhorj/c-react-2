import React from 'react';
import './PrimeiroComponente.css';
import ReutilizarComponente from './ReutilizarComponente';

const PrimeiroComponente = () => {
  return (
    <div>
      <h2>Primeiro Componente</h2>
      <p>Componente reaproveitado abaixp</p>
      <ReutilizarComponente />
    </div>
  )
}

export default PrimeiroComponente