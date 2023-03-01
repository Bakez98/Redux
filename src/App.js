import './App.css';
// import { store } from './store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function App() {

  const values = useSelector(state => state.myReducer)
  const dispatch = useDispatch()

  function handleIncrement() {
    dispatch({
      type:"INCREMENT",
      payload: 20
      })
  }


  function handleDECREMENT() {
    dispatch({
      type:"DECREMENT",
      payload: 20
      })
  }

  console.log(values.count)
  return (
    <div className="App">
        {`Count : ${values.count} `}
        <div className='wrapper'>
        <button onClick={() => handleIncrement()}>INCREMENT</button>
        <button onClick={() => handleDECREMENT()}>DECREMENT</button>
        </div>
    </div>
  );
}

export default App;
