import "./App.css";
import Navbar from "./Admin/CommonComponents/Navbar";
import { Box, Stack } from "@mui/material";
import Sidebar from "./Admin/CommonComponents/Sidebar";
import { Outlet } from "react-router-dom";
import Dashboard from "./Admin/Dashboard/Dashboard";

// function App() {
//   return (
//     <Box>
//       <Navbar />
//       <Stack direction="row">
//         <Sidebar />
//         <Dashboard/>
//         <Outlet />
//       </Stack>
//     </Box>
//   );
// }

// export default App;

// import { Box, Stack } from "@mui/material";
// import { Outlet } from "react-router-dom";
// import Navbar from "./Admin/CommonComponents/Navbar";
// import Sidebar from "./Admin/CommonComponents/Sidebar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row">
        <Sidebar />
        <Box flex={9} sx={{ p: 2 }}> {/* Ensuring content gets space */}
          <Outlet />  
          {/* <Dashboard/> */}
        </Box>
      </Stack>
    </Box>
  );
}

export default App;

