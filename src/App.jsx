import { useState } from 'react'
import { Logo } from './Logo';
import './App.css'
import { Calculadora } from './Calculadora';
import { Pantalla } from './Pantalla';
import { Botones } from './Botones';
import { Boton } from './Boton';

function App() {
  const [calculo, setCalculo] = useState("");
  const [switchCalc, setSwitchCalc] = useState(false)

  const digitar = (digito)=>{
    if(switchCalc){
      setCalculo(digito);
      setSwitchCalc(false);
    }else{
      setCalculo(calculo+digito);
    }
  }

  const limpiar = ()=>{
    setCalculo("");
  }

  const caracteres = ['.','+','-','*','/'];
  const calcular = ()=>{
    setSwitchCalc(true);
    //Verificaciones
    if(calculo === ""){// Entrada vacia
      setCalculo("Entrada vacia");
    }else if(caracteres.includes(calculo[0]) && calculo[0] !== '-'){//Inicia con . + * /
      setCalculo("Entrada invalida");
    }else if(caracteres.includes(calculo.length - 1)){//Termina con . + - * /
      setCalculo("Entrada invalida");
    }else if(operadoresJuntos()){//Operadores juntos -> 3+-4  6.-1
      setCalculo("Entrada invalida");
    }else if(/[a-zA-Z]/.test(calculo)){//Posibles inyecciones de codigo
      setCalculo("Entrada invalida");
    }else{
      setCalculo(eval(calculo));
    }
    
  }

  const operadoresJuntos= ()=>{
    let estanJuntos = false;
    let i = 0;
    while(i < calculo.length && !estanJuntos){
      if (caracteres.includes(calculo[i]) && caracteres.includes(calculo[i + 1])) {
        estanJuntos = true;
      }
      i++;
    }
    return estanJuntos;
  }

  return (
    <>
      <Logo/>
      <Calculadora>
        <Pantalla valor={calculo}/>
        <Botones>
          <Boton manejarEvento={digitar}>1</Boton>
          <Boton manejarEvento={digitar}>2</Boton>
          <Boton manejarEvento={digitar}>3</Boton>
          <Boton manejarEvento={digitar}>+</Boton>
          <Boton manejarEvento={digitar}>4</Boton>
          <Boton manejarEvento={digitar}>5</Boton>
          <Boton manejarEvento={digitar}>6</Boton>
          <Boton manejarEvento={digitar}>-</Boton>
          <Boton manejarEvento={digitar}>7</Boton>
          <Boton manejarEvento={digitar}>8</Boton>
          <Boton manejarEvento={digitar}>9</Boton>
          <Boton manejarEvento={digitar}>*</Boton>
          <Boton manejarEvento={calcular}>=</Boton>
          <Boton manejarEvento={digitar}>0</Boton>
          <Boton manejarEvento={digitar}>.</Boton>
          <Boton manejarEvento={digitar}>/</Boton>
          <Boton manejarEvento={limpiar}>Clear</Boton>
        </Botones>
      </Calculadora>
    </>
  )
}

export default App
