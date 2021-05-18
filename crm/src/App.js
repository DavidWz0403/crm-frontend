import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import Entry from './page/entry/entry.page';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './page/dashboard/Dashboard.page';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}

      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
