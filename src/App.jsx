import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { indigo, pink } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";
import HomePage from "./My_portfolio/Home/home.jsx";
// import ToDo from "./My_portfolio/DoList/ToDoo.jsx";
// import Leave from "./My_portfolio/Leave/Leave.jsx";
// import LeaveHome from "./Leavemanagement/Pages/LeaveHome.jsx";
// import { Membership } from "./Home/home.jsx";

const myTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
          height: "1.5rem",
          textTransform: "none",
          textWrap: "balance",
        },
      },
    },
    MuiStepConnector: {
      defaultProps: {},
    },
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
      defaultProps: {},
    },
  },
  palette: {
    primary: indigo,
    secondary: pink,
  },
});

function App() {
  return (
    <ThemeProvider theme={myTheme} className="app">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<AuthProvider children={<Home />}></AuthProvider>}></Route> */}

          <Route path="/" element={<HomePage />} />
          {/* <Route path="/ToDo" element={<ToDo />} /> */}
          {/* <Route path="/leave" element={<Leave />} /> */}
          {/* <Route path="/Myleave" element={<LeaveHome />} /> */}
          {/* <Route path="/Member" element={<Membership />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
