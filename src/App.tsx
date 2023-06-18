// Dependencies
import React from "react";

// Providers
import MainProvider from "@/components/global/MainProvider";
import ThemeProvider from "@/components/global/ThemeProvider";

// Style
import "@/styles/bootstrap.scss";
import "@/styles/style.scss";


// Layouts
const Dashboard = React.lazy(() => import("./layouts/dashboard"));
const Website = React.lazy(() => import("./layouts/website"));

const App: React.FC = () => {
  return (
    <MainProvider>
      <ThemeProvider>
        <Website />
        <Dashboard />
      </ThemeProvider>
    </MainProvider>
  )
}

export default App;