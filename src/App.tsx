import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import DisplayWeather from "./components/DisplayWeather";

function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <DisplayWeather />
      </QueryClientProvider>
    </div>
  );
}

export default App;
