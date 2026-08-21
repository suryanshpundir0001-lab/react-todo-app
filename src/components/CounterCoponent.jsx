// jai SitaRam 

import React , {useState} from 'react';

//now i will make my component
const CounterComponent = () => {
    const [count , setCount] = useState(12);
    //const [value,setValue] = useState("Suryansh");
    

    // const val = useState(0);
    // //do log just to check out
    console.log("hello",count);


    return (
    <div>
        <p>Count Component - {count}</p>
        <h6>Number is {count % 2 === 0 ? 'Even ': 'Odd' }</h6>
        {/* <h6>Value is {value}</h6>
        <button onClick={() => setValue("react")}>Change</button> */}
        <button onClick={ () => setCount(count + 1)}>Increment</button>
    </div>
    );
}

export default CounterComponent;
