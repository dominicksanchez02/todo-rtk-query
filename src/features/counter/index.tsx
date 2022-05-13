import { useState, FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';
import { increment, decrement, incrementByAmount } from './slice';
import { Link } from 'react-router-dom';
import './index.css';

const Counter = (): JSX.Element => {
  const { value } = useAppSelector((state) => state.counter);
  const [ amount, setAmount ] = useState<number>(0);
  const dispatch = useAppDispatch();
  const handleAdd = () => {
    dispatch(increment(1));
  }
  const handleSub = () => {
    dispatch(decrement(1));
  }
  const handleAmountChange = (e: FormEvent<HTMLInputElement>) => {
    setAmount(Number(e.currentTarget.value));
  }
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(amount));
    setAmount(0);
  }
  const counterElement = (
    <div>
      <p>Counter: { value }</p>
      <button className="button btnAdd" onClick={ handleAdd }>+</button>
      <button className="button btnSub" onClick={ handleSub }>-</button>
      <p>Increment by amount</p>
      <input type="text" value={ amount } onChange={ handleAmountChange } />
      <button className="button btnAdd incrementAdd" onClick={ handleIncrementByAmount }>Add</button>
      <Link to="/">Back to Todos</Link>
    </div>
  )

  return counterElement;
}

export default Counter;