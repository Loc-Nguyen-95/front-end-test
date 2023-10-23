import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const getStyleName = btn => {
  const className = {
    '=': 'opt',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt',
    '0': 'zero',
    '=': 'equals'
  }
  return className[btn]
}

function Button({value}) {

  const {calc, setCalc} = useContext(CalcContext);

  //1
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num 
    })
  }

  //2
  const resetClick = () => {
    setCalc({ sign: '', num: 0, res: 0 })
  }

  //3
  const handleClickButton = () => {
    const numberString = value.toString()
    let numberValue;

    if(numberString === '0' && calc.num === 0) {
      numberValue = "0"
    } else {
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc,
      num: numberValue
    })
  }

  //4
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    })
  }

  //5 
  const equalsClick = () => {
    if(calc.res && calc.num){
      
      const math = (a, b, sign) => {

        const result = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          'x': (a, b) => a * b,
          '/': (a, b) => a / b,
        }

        return result[sign](a, b)
      }
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: '',
        num: 0
      })
    }
  }

  //6
  const persenClick = () => {
    setCalc({
      num: (calc.num / 100),
      res: (calc.res / 100),
      sign: ''
    })
  }

  //7 
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ''
    })
  }

  
  const handleBtnClick = () => {
    // console.log(value)
    const result = {
      '.' : commaClick,
      'AC' : resetClick,
      '/' : signClick,
      'x' : signClick,
      '-' : signClick,
      '+' : signClick,
      '=': equalsClick,
      '%' : persenClick,
      '+/-': invertClick
    }

    if(result[value]){ // Gọi hàm
      return result[value]()
    } else {
      return handleClickButton()
    }

  }

  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}> {value} </button>
  )

}

export default Button 
