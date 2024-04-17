import {Route,Routes} from 'react-router-dom'
import { createContext,useState } from 'react'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { CssBaseline, ThemeProvider } from "@mui/material";
export const Context = createContext()
//Imports from another files
import {Home, Login,SignUp,Bookings,Success,NotFound} from './Pages'
import Header from './Components/Header/Header';
import Theme from './theme';
import Footer from './Components/Footer';


function App() {
  const [user, setUser] = useState(true);
  return (
    <ThemeProvider theme={Theme}>
      <Context.Provider value={{ user, setUser }}>
        <CssBaseline />
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App
