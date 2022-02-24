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
      <p>
        We are using Node.js
        <span id="node-version" />
        , Chromium
        <span id="chrome-version" />, and Electron
        <span id="electron-version" />.
      </p>
      <p>
        rev <span id="git-info" />
      </p>
    </>
  );
}

render(<SplashScreen duration="4" />, document.getElementById('root'));

setTimeout(startApp, 3000);
