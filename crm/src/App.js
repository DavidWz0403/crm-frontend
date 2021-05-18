import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import Entry from './page/entry/entry.page';
import DefaultLayout from './layout/DefaultLayout';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}

      <DefaultLayout>
        send page content
      </DefaultLayout>
    </div>
  );
}

export default App;
