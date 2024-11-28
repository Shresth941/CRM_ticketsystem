import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/dashboard"); // Redirect to the dashboard when authenticated
    }
  }, [isAuth, navigate]);

  return (
    <div className="App">
      {isAuth ? (
        <Defaultlayout>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/tickets"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <ListingPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/new-ticket"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <Addnewticket />
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
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
