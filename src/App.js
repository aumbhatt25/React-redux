import './App.css';
import { useSelector,useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  console.log(counter)

  const incrementHandler = () => {
    dispatch({ type: 'inc' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'dec' });
  };

  return (
    <div className="App">
      <div>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
