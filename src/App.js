import {useState} from "react";
import close from './assets/eye-close-1.png'
import open from './assets/eye-open.png'
import Counter from "./components/Counter";
import Button from "./components/Button";
import StepMessage from "./components/StepMessage";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

const ButtonState = {
    Previous: 'Previous',
    Next: 'Next',
}

function App() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function HandlerStepPrev() {
        if (step >= 2) setStep(step - 1)
    }

    function HandlerStepNext() {
        if (step < 3) setStep(step + 1)
    }

    return (
        <>
            <div className="close">
                <Button
                    background={"transparent"}
                    border={'none'}
                    // onClick={()=>setIsOpen(isOpen ? false : true)}>
                        onClick={() => setIsOpen(!isOpen)}>
                    <img style={{height: '70px'}} src={isOpen ? close : open} alt={isOpen? 'close' :'open'}/>
                </Button>
            </div>
            {!isOpen &&
                <div className={'steps'} style={{opacity: 0.2}}>
                    <div className="numbers">
                        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
                        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
                        <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
                    </div>
                  <StepMessage step={step}>
                      {messages[step-1]}
                  </StepMessage>
                    <div className="buttons">
                        <Button disabled={true}
                                backgroundColor={'#a295ca'}
                                color={'#fff'}>
                            {ButtonState.Previous}
                        </Button>
                        <Button disabled={true}
                                backgroundColor={'#c8bce6'}
                                color:{'#fff'}>
                            {ButtonState.Next}
                        </Button>
                    </div>
                </div>}
            {isOpen &&
                <div className="steps">
                    <div className="numbers">
                        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
                        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
                        <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
                    </div>

                    <p className="message">Step: {step}: {messages[step - 1]}</p>

                    {/*<div className="buttons">*/}
                    {/*    <button style={{backgroundColor:'#7950f2',color:'#fff'}} onClick={()=>step>=2 ? setStep(step-1) :''}>{ButtonState.Previous}</button>*/}
                    {/*    <button disabled={step>=3}*/}
                    {/*        style={ step!==3 ?{backgroundColor:'#7950f2',color:'#fff' }:null}  onClick={()=> step <3 ?*/}
                    {/*        setStep(step+1) :''}>{ButtonState.Next}</button>*/}
                    {/*</div>*/}
                    <div className="buttons">
                        <Button
                            step={step}
                            backgroundColor={'#7950f2'} color={'#fff'}
                            onClick={HandlerStepPrev}
                        >{ButtonState.Previous}</Button>
                        <Button
                            step={step}
                            backgroundColor={step !== 3 ? '#7950f2' : null}
                            color={step !== 3 ? '#fff' : ''}
                            onClick={HandlerStepNext}
                            disabled={step >= 3}
                        >
                            {ButtonState.Next}
                        </Button>
                    </div>

                </div>
            }

            <Counter/>
        </>
    );
}

export default App;
