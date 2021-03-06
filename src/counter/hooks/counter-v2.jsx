import React from 'react';
import MyButton from '../common/my-button';
import MyTextbox from '../common/my-textbox';

const MyOptimizedButton = React.memo(MyButton);

//Use of hooks with effects. Added refs and effects.
export default function Counter(props) {
  const [count, setCount] = React.useState(props.init || 1);
  const ref = React.useRef(null);
  ref.current = count;

  React.useLayoutEffect(() => {
    if (+window.localStorage.getItem('count')) {
      setCount(+window.localStorage.getItem('count'));
    }
    return () => {
      window.localStorage.setItem('count', ref.current);
    };
  }, []);

  function increment(incr) {
    setCount(count + incr);
  }

  function change(evt) {
    if (Number.isInteger(+evt.target.value)) {
      setCount(+evt.target.value);
    }
  }

  console.log('Render du parent');

  return (
    <>
      <h1>The count is: {count} </h1>
      <MyOptimizedButton onIncrement={increment} value={1} />
      <MyOptimizedButton onIncrement={increment} value={-10} />
      <MyOptimizedButton onIncrement={increment} value={100} />
      <MyTextbox value={count} onChange={change} />
    </>
  );
}
