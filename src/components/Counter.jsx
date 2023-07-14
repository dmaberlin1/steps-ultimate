import React, {useEffect, useState} from 'react';
import styles from './Counter.module.css'

const Counter = () => {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(1);
    // let date=new Date('july 14 2023');
    let date=new Date();
    date.setDate(date.getDate()+count);
    // const [date, setDate] = useState(new Date());

    function reset() {
        setStep(1)
        setCount(1)
        // setDate(new Date())

    }

    return (
        <div className={styles.counter}>
            <div className={styles.reset}>
                <button onClick={() => reset()}>reset</button>
            </div>
            <div className={styles.btns}>
                <button onClick={() => step > 1 ? setStep(step - 1) : ''}>-</button>
                <span className={styles.span}>Step: {step}</span>
                <button onClick={() => step < 5 ? setStep(step + 1) : ''}>+</button>

            </div>

            <div className={styles.btns}>
                <button onClick={() => setCount(count - step)}>-</button>
                <span className={styles.span}>Count: {count}</span>
                <button onClick={() => setCount(count + step)}>+</button>
            </div>
              <div className={styles.date}>
            {/*<span className={styles.span}> {date}</span>*/}
            <span className={`${styles.span} ${styles.span__day}`}>
                {count ===0 && 'today is'}
                {count >1 && `${count} days from today is`}
                {count<0 && `${count} days ago was`}
            </span>
            <span className={styles.span}> {date.toDateString()}</span>
            {/*<span className={styles.span}> {date.getDate()}</span>*/}

              </div>
        </div>
    );
};

export default Counter;
