import './App.css';
import UseStateFn from './components/UseState';
import UseReducerFn from './components/UseReducer';
import UseEffectFn from './components/UseEffect';
import UseImperativeFn from './components/UseImperative';

function App() {
  return (
    <div className="App">
      <UseStateFn />
      <UseReducerFn />
      <UseEffectFn />
      <UseImperativeFn />
    </div>
  );
}

export default App;
