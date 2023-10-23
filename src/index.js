import React from 'react' 
import ReactDOM from 'react-dom' 
import Wrapper from './components/Wrapper'
import './index.css'
import Screen from './components/Screen'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'
import CalcProvider from './context/CalcContext'

const btnValues = [
    ["AC", "+/-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
]

function App() {
    return (
        <div>
            <CalcProvider>
            <Wrapper>
            <Screen />
                <ButtonBox>
                    {btnValues.flat().map( (btn, i) => (
                        <Button
                            value={btn} 
                            key={i}
                        />
                    ))}
                </ButtonBox>
            </Wrapper>
            </ CalcProvider>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

