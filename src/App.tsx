import { Box, CssBaseline, Stack, ThemeProvider, createTheme } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";




function App() {
  const [isDark,setIsDark] = useState<boolean>(false);
  const handleDark = () => {
    setIsDark(!isDark);
  }
  const darkTheme = createTheme({
    palette: {
      mode: isDark? 'dark': 'light',
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
<CssBaseline />
    <Box>
      <Add/>
      <Navbar />
      <Stack direction="row">
        <Sidebar setdark={handleDark}/>
        <Feed />
        <Rightbar />
      </Stack>
      
    </Box>
    
    </ThemeProvider>
  );
}

export default App;
