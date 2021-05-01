import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import TablesBookingId from './components/views/TablesBookingId/TablesBookingId';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventsId from './components/views/TablesEventsId/TablesEventsId';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import Tables from './components/views/Tables/Tables';
import Login from './components/views/Login/Login';
import Dashboard from './components/views/Dashboard/Dashboard';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import WaiterOrderId from './components/views/WaiterOrderId/WaiterOrderId';
import Kitchen from './components/views/Kitchen/Kitchen';


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/login' component={Login} />

          <Route exact path='/tables' component={Tables} />
          <Route exact path='/tables/booking/:id' component={TablesBookingId} />
          <Route exact path='/tables/booking/new' component={TablesBookingNew} />
          <Route exact path='/tables/events/:id' component={TablesEventsId} />
          <Route exact path='/tables/events/new' component={TablesEventsNew} />

          <Route exact path='/waiter' component={Waiter} />
          <Route exact path='/waiter/order/:id' component={WaiterOrderId} />
          <Route exact path='/waiter/order/new' component={WaiterOrderNew} />

          <Route exact path='/kitchen' component={Kitchen} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
