/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/destructuring-assignment */
import { render } from 'react-dom';
import App from './App';

const startApp = () => {
  render(<App />, document.getElementById('root'));
};

function SplashScreen(_props: { duration: any }) {
  return (
    <>
      <h1>SplashScreen</h1> test test {_props.duration}
    </>
  );
}

render(<SplashScreen duration="4" />, document.getElementById('root'));

setTimeout(startApp, 3000);
