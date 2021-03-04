
import React, {useState} from 'react'



export default function App() {
  const[firstOperand,setFirstOperand]=useState('')
  const[secondOperand, setSecondOperand]=useState('')
  const[operator,setOperator]=useState('+')
  const[answer,setAnswer]=useState('')
  const[error,setError]=useState('')

  const isValidCalculation = () =>{
    return !Number.isNaN(Number(firstOperand)) &&
    !Number.isNaN(Number(firstOperand)) && 
    firstOperand !== "" &&
    secondOperand !== ""

  }
  const claculateAnswer = ()=>{
    if(!isValidCalculation()) {
      setAnswer('')
      return setError("PLEASE PROVIDE A VALID NUMBER FOR BOTH OPERANDS")
    }
    setError('')
    setAnswer('')
    
    switch(operator) {
      case "+":
        return setAnswer(Number(firstOperand) + Number(secondOperand))
      case "-":
        return setAnswer(Number(firstOperand) - Number(secondOperand))
      case "*":
        return setAnswer(Number(firstOperand) * Number(secondOperand))
      case "/":
        return setAnswer(Number(firstOperand) / Number(secondOperand))
      default :
        return setError('PLEASE CHOSE THE RIGHT OPERATOR')
      

    }
  }
  return (
    <div className= "calculator">
      <div className = "title">React Calculator</div>
        <div className="form">
          <input 
          type ="text" 
          name="firstOperand" 
          value={firstOperand}
          onChange={event => setFirstOperand(event.target.value)}
          />
          <select name="operator" value={operator} onChange={event => setOperator(event.target.value)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input 
          type ="text" 
          name="secondOperand" 
          value={secondOperand}
          onChange={event => setSecondOperand(event.target.value)}
          />
          <button type="button"onClick={claculateAnswer}>=</button>
          <input type ="text" name="answer" value={answer} disabled/>   
      </div>
      <div className="error" > {error}</div>
    </div>
  )
}