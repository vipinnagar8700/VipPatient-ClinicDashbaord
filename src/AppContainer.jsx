import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "@components/login";
import AppLayout from "AppLayout";

function AppContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Route>
    </Routes>
  );
}

export default AppContainer;
