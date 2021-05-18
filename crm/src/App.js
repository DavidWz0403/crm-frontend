import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import Entry from './page/entry/entry.page';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './page/dashboard/Dashboard.page';
import AddTicket from './page/new-ticket/AddTicket.page';
import TicketList from './page/ticket-listing/TicketLists.page';
import './App.css';
import Ticket from './page/ticket/Ticket.page';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}

      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketList /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
