import React, { useState, useEffect } from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  Avatar,
  Badge,
} from "@mui/material";
import { Add, Search } from "@mui/icons-material";

// Simulated API Fetch (mock data)
const fetchDummyData = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: 1,
          company: "Reliance",
          sector: "Energy",
          marketCap: "Large",
          trend: "medium",
        },
        {
          id: 2,
          company: "Tata",
          sector: "IT",
          marketCap: "Large",
          trend: "weak",
        },
        {
          id: 3,
          company: "HDFC",
          sector: "Finance",
          marketCap: "Large",
          trend: "strong",
        },
        {
          id: 4,
          company: "Bharti Airtel",
          sector: "Telecom",
          marketCap: "Large",
          trend: "weak",
        },
        {
          id: 5,
          company: "Adani Ent",
          sector: "Energy",
          marketCap: "Large",
          trend: "strong",
        },
        {
          id: 6,
          company: "Wipro",
          sector: "IT",
          marketCap: "Large",
          trend: "medium",
        },
        {
          id: 7,
          company: "Biocon",
          sector: "Healthcare",
          marketCap: "Mid",
          trend: "weak",
        },
        {
          id: 8,
          company: "GAIL",
          sector: "Energy",
          marketCap: "Mid",
          trend: "strong",
        },
        {
          id: 9,
          company: "The India Cements",
          sector: "Cement",
          marketCap: "Small",
          trend: "medium",
        },
        {
          id: 10,
          company: "Infosys",
          sector: "IT",
          marketCap: "Large",
          trend: "strong",
        },
        {
          id: 11,
          company: "Reliance",
          sector: "Energy",
          marketCap: "Large",
          trend: "medium",
        },
        {
          id: 12,
          company: "Tata",
          sector: "IT",
          marketCap: "Large",
          trend: "weak",
        },
        {
          id: 13,
          company: "HDFC",
          sector: "Finance",
          marketCap: "Large",
          trend: "strong",
        },
        {
          id: 14,
          company: "Bharti Airtel",
          sector: "Telecom",
          marketCap: "Large",
          trend: "weak",
        },
        {
          id: 15,
          company: "Adani Ent",
          sector: "Energy",
          marketCap: "Large",
          trend: "strong",
        },
        {
          id: 16,
          company: "Wipro",
          sector: "IT",
          marketCap: "Large",
          trend: "medium",
        },
        {
          id: 17,
          company: "Biocon",
          sector: "Healthcare",
          marketCap: "Mid",
          trend: "weak",
        },
        {
          id: 18,
          company: "GAIL",
          sector: "Energy",
          marketCap: "Mid",
          trend: "strong",
        },
        {
          id: 19,
          company: "The India Cements",
          sector: "Cement",
          marketCap: "Small",
          trend: "medium",
        },
        {
          id: 20,
          company: "Infosys",
          sector: "IT",
          marketCap: "Large",
          trend: "strong",
        },
      ]);
    }, 1000)
  );
};

const trendColors = { strong: "green", medium: "blue", weak: "red" };

// Core Watchlist Table

const CoreWatchlistTable = () => {
  const [data, setData] = useState({ nodes: [] });
  const [openUser, setOpenUser] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useMediaQuery("(max-width: 600px)"); // Check for mobile screen

  const theme = useTheme([
    getTheme(),
    {
      Table: `
        --data-table-library_grid-template-columns: 40px 120px 100px 100px repeat(24, 100px);
        ${
          isMobile
            ? "--data-table-library_grid-template-columns: 30px 90px repeat(26, 100px);"
            : ""
        }
      `,
      BaseCell: ` 
        &:nth-of-type(1) {
          left: 0px;
          background-color: #fff;
          z-index: 2;
        }

        &:nth-of-type(2) {
          left: ${isMobile ? "20px" : "30px"};
          background-color: #fff;
          z-index: 2;
        }

        ${
          !isMobile
            ? `
          &:nth-of-type(3) {
            left: 150px;
            background-color: #fff;
            z-index: 2;
          }

          &:nth-of-type(4) {
            left: 250px;
            background-color: #fff;
            z-index: 2;
          }
        `
            : ""
        }
      `,
      HeaderRow: `
        background-color: rgb(20, 109, 182);
        color: white !important;
        font-weight: bold !important;
        white-space: normal;
        word-wrap: break-word;
        text-align: center;
      `,
      HeaderCell: `
        padding: 10px;
        text-align: center;
        cursor: pointer;
        white-space: normal;
        overflow: visible;
        word-wrap: break-word;
        font-size: ${isMobile ? "12px" : "14px"}; // Smaller font on mobile
      `,
      Cell: `
        padding: 8px;
        font-size: ${isMobile ? "12px" : "14px"}; // Smaller font on mobile
        overflow: visible;
        word-wrap: break-word;
        text-align: center;
      `,
    },
  ]);

  useEffect(() => {
    fetchDummyData().then((response) => setData({ nodes: response }));
  }, []);

  // Generate previous 24 months dynamically, with the most recent month first
  const months = Array.from({ length: 24 }, (_, index) => {
    const date = new Date();
    date.setMonth(date.getMonth() - index); // Subtract months to get previous months
    return date.toLocaleString("default", { month: "short", year: "numeric" });
  });

  // Highlight matching text in the Company column
  const highlightText = (text, highlight) => {
    if (!highlight.trim()) return text;

    const regex = new RegExp(`(${highlight})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Filter and sort data based on search query
  const filteredData = {
    nodes: data.nodes
      .filter((item) =>
        item.company.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        const aMatch = a.company
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const bMatch = b.company
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        if (aMatch && !bMatch) return -1; // a comes first
        if (!aMatch && bMatch) return 1; // b comes first
        return 0; // no change in order
      }),
  };

  const COLUMNS = [
    {
      label: "#",
      renderCell: (item) => item.id,
      pinLeft: true,
    },
    {
      label: "Company",
      renderCell: (item) => highlightText(item.company, searchQuery),
      pinLeft: true,
    },
    ...(!isMobile
      ? [
          {
            label: "Sector",
            renderCell: (item) => item.sector,
            pinLeft: true,
          },
          {
            label: "Market Cap",
            renderCell: (item) => item.marketCap,
            pinLeft: true,
          },
        ]
      : [
          {
            label: "Sector",
            renderCell: (item) => item.sector,
          },
          {
            label: "Market Cap",
            renderCell: (item) => item.marketCap,
          },
        ]),
    ...months.map((month) => ({
      label: month,
      renderCell: (item) => (
        <Box
          sx={{
            display: "inline-block",
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: trendColors[item.trend],
          }}
        />
      ),
    })),
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#E6E6FF",
        padding: "16px",
        minHeight: "84vh",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          mb: 2,
          boxShadow: "none",
          padding: "4px 8px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 0 },
            alignItems: { xs: "flex-start", sm: "center" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              variant="h6"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              CORE WATCHLIST
            </Typography>

            <Badge
              // badgeContent={3}
              badgeContent={filteredData.nodes.length}
              sx={{
                ml: { xs: 0, sm: 0, md: 1 },
                "& .MuiBadge-badge": {
                  height: "1.8rem",
                  width: "1.8rem",
                  backgroundColor: "#E6E6FA",
                  color: "#1976d2",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 2 },
              width: { xs: "100%", sm: "auto" },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Search By Company"
              size="small"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                backgroundColor: "#F0F0F0",
                borderRadius: "25px",
                width: { xs: "100%", sm: "200px", md: "300px", lg: "400px" },
                "& fieldset": { border: "none" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: "blue" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Trend Indicator Section */}
      <Box
        sx={{
          mt: 2,
          mb: 2,
          width: "50%", // Full width for responsiveness
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Column on small screens, row on larger screens
          alignItems: { xs: "flex-start", sm: "center" }, // Align items to the start on small screens
          justifyContent: "space-evenly",
          gap: { xs: 1, sm: 2 }, // Add gap for better spacing
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
            fontWeight: "bold",
          }}
        >
          <b>Trend Indicator:</b>
        </Typography>

        {/* Strong Trend */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="p"
            sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }}
          >
            Strong Trend
          </Typography>
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "green", // Strong trend color
            }}
          />
        </Box>

        {/* Medium Trend */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="p"
            sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }}
          >
            Medium Trend
          </Typography>
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "blue", // Medium trend color
            }}
          />
        </Box>

        {/* Weak Trend */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="p"
            sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }}
          >
            Weak Trend
          </Typography>
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "red", // Weak trend color
            }}
          />
        </Box>
      </Box>

      {/* Table with Fixed Height and Vertical Scrolling */}
      <Box
        sx={{
          width: "100%",
          overflowX: "auto", // Enable horizontal scrolling
          height: "calc(9 * 50px)", // Fixed height for 5 rows
          overflowY: "auto", // Enable vertical scrolling
        }}
      >
        <CompactTable
          columns={COLUMNS}
          data={filteredData} // Use filtered and sorted data
          theme={theme}
          layout={{ custom: true, horizontalScroll: true }}
        />
      </Box>
    </Box>
  );
};

export default CoreWatchlistTable;
