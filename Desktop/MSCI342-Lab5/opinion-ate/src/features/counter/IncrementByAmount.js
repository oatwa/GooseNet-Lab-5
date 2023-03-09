import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { decrement,increment } from './counterSlice'

//Function with state initilized at 0 w/ dispatch 
export default function Counter() {
    const [amount, setAmount] = useState(0);
    const count = useSelector((state) =>
state.counter.value)
    const dispatch = useDispatch()

    return(
        //Header "Counter Value", and label "Counter Amount" and changes on button click and shows via UI
        <div>
        <h1>Counter value: {count}</h1>
        <label>
          Counter amount:
          <input value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <button onClick={() => { dispatch(incrementByAmount(Number(amount)));
                                setAmount(0);}
                        }>Increment</button>
      </div>
    );
  }
