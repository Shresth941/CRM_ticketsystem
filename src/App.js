import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Defaultlayout from "./layout/Defaultlayout";
import Dashboard from "./pages/dashboard/dashboard";
import ListingPage from "./pages/Listingpage/ListingPage";
import Addnewticket from "./pages/newticket/Addnewticket";
import TicketPage from "./pages/ticketPage/TicketPage";
import EntryPage from "./pages/EntryPage";
import PrivateRoute from "./component/privatr-route/private-route";

function App() {
  const [isAuth] = useState(true); // Simulate authentication status

  return (
    <Router>
      <div className="App">
        {isAuth ? (
          <Defaultlayout>
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <Dashboard/>
                  </PrivateRoute>
                }
              />
              <Route
                path="/tickets"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <ListingPage/>
                  </PrivateRoute>
                }
              />
              <Route
                path="/new-ticket"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <Addnewticket/>
                  </PrivateRoute>
                }
              />
              <Route
                path="/ticket/:id"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <TicketPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Defaultlayout>
        ) : (
          <Routes>
            <Route path="/" element={<EntryPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
