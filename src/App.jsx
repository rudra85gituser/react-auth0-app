import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {isAuthenticated ? (
          <>
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
            <button onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </button>
            {user && (
              <div>
                <img src={user.picture} alt={user.name} style={{ borderRadius: '50%' }} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            )}
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>
            Log In
          </button>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
