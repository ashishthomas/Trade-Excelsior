// import "./App.css";
// import { Box, Stack } from "@mui/material";
// import { Outlet } from "react-router-dom";
// import Navbar from "./Admin/CommonComponents/Navbar";
// import Sidebar from "./Admin/CommonComponents/Sidebar";

// function App() {
//   return (
//     <Box>
      
//       <Navbar />
//       <Stack direction="row">
//         <Sidebar />
//         <Box flex={9} sx={{ p: 2 }}> 
//           <Outlet />  
//         </Box>
//       </Stack>
//     </Box>
//   );
// }

// export default App;

import "./App.css";
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Admin/CommonComponents/Navbar";
import Sidebar from "./Admin/CommonComponents/Sidebar";
import Layout from "./Admin/CommonComponents/Layout";

function App() {
  return (
    <Box>
      <Layout/>
    </Box>
  );
}

export default App;