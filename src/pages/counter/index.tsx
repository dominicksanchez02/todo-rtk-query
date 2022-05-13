import Counter from '../../features/counter';

const CounterPage = (): JSX.Element => {
  const counterPageElement = (
    <div className="container">
      <h1>Counter</h1>
      <Counter />
   </div>
  )

  return counterPageElement;
}

export default CounterPage;