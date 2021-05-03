import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


import MainLayout from './components/layout/MainLayout/MainLayout';
import TablesBookingId from './components/views/TablesBookingId/TablesBookingId';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventsId from './components/views/TablesEventsId/TablesEventsId';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import Tables from './components/views/Tables/Tables';
import Login from './components/views/Login/Login';
import Homepage from './components/views/Homepage/Homepage';
import Orders from './components/views/Orders/Orders';
import OrdersOrderNew from './components/views/OrdersOrderNew/OrdersOrderNew';
import OrdersOrderId from './components/views/OrdersOrderId/OrdersOrderId';
import Kitchen from './components/views/Kitchen/Kitchen';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2b4c6f' },
    //secondary: { main: '#11cb5f' },
  },
});

function App() {
  return (
    // <BrowserRouter basename={'/panel'}> - w module jest ta linia ale basename generuje ostrzeżenie że / (Homepage) nie zaczyna się od /panel
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />

              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookingNew} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBookingId} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesEventsNew} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEventsId} />

              <Route exact path={process.env.PUBLIC_URL + '/orders'} component={Orders} />
              <Route exact path={process.env.PUBLIC_URL + '/orders/order/new'} component={OrdersOrderNew} />
              <Route exact path={process.env.PUBLIC_URL + '/orders/order/:id'} component={OrdersOrderId} />

              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
