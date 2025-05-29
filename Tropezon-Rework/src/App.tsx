import React from "react";
import AppRoutes from "./routes/AppRoutes";
import ThemeProvider from "./context/ThemeContext";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
