import { useState, useEffect, useMemo } from "react";
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
  Badge,
} from "@mui/material";
import { Add, Search, Edit } from "@mui/icons-material";
import CustomModal from "../CommonComponents/CustomModal";
import AddCoreWatchList from "../Dashboard/forms/AddCoreWatchList";
import EditTrendDialog from "./EditTrend";
import watchlistData from "./WatchlistData";
import "./CoreWatchlist.css";

const TREND_COLORS = { strong: "green", medium: "blue", weak: "red" };
const MONTHS = Array.from({ length: 24 }, (_, index) => {
  const date = new Date();
  date.setMonth(date.getMonth() - index);
  return date.toLocaleString("default", { month: "short", year: "numeric" });
});

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

const CoreWatchlistTable = () => {
  const [data, setData] = useState({ nodes: [] });
  const [openUser, setOpenUser] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [editableTrend, setEditableTrend] = useState({
    companyId: null,
    month: null,
    initialTrend: null,
  });
  const [openEditModal, setOpenEditModal] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

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
        background-color: rgb(20, 109, 182) !important;
        color: white !important;
        font-weight: bold !important;
        white-space: normal;
        word-wrap: break-word;
        text-align: center;
        position: sticky;
        top: 0;
        z-index: 3;
      `,
      HeaderCell: `
        padding: 10px;
        text-align: center;
        cursor: pointer;
        white-space: normal;
        overflow: visible;
        word-wrap: break-word;
        font-size: ${isMobile ? "12px" : "14px"}; 
      `,
      Cell: `
        padding: 8px;
        font-size: ${isMobile ? "12px" : "14px"}; 
        overflow: visible;
        word-wrap: break-word;
        text-align: center;
      `,
    },
  ]);

  useEffect(() => {
    setData({ nodes: watchlistData });
  }, []);

  const filteredData = useMemo(
    () => ({
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
          if (aMatch && !bMatch) return -1;
          if (!aMatch && bMatch) return 1;
          return 0;
        }),
    }),
    [data.nodes, searchQuery]
  );

  const handleOpenEditModal = (item, month) => {
    setEditableTrend({
      companyId: item.id,
      month,
      initialTrend: item.trends?.[month] || null,
    });
    setOpenEditModal(true);
  };

  const handleEditTrend = (newTrend) => {
    const updatedNodes = data.nodes.map((node) => {
      if (node.id === editableTrend.companyId) {
        return {
          ...node,
          trends: { ...node.trends, [editableTrend.month]: newTrend },
        };
      }
      return node;
    });

    setData({ nodes: updatedNodes });
    setOpenEditModal(false);
  };

  const COLUMNS = [
    { label: "#", renderCell: (item) => item.id, pinLeft: true },
    {
      label: "Company",
      renderCell: (item) => highlightText(item.company, searchQuery),
      pinLeft: true,
    },
    ...(!isMobile
      ? [
          { label: "Sector", renderCell: (item) => item.sector, pinLeft: true },
          {
            label: "Market Cap",
            renderCell: (item) => item.marketCap,
            pinLeft: true,
          },
        ]
      : [
          { label: "Sector", renderCell: (item) => item.sector },
          { label: "Market Cap", renderCell: (item) => item.marketCap },
        ]),
    ...MONTHS.map((month) => ({
      label: month,
      renderCell: (item) => {
        const trend = item.trends?.[month];
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {trend ? (
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: TREND_COLORS[trend] || "transparent",
                }}
              />
            ) : (
              <Typography variant="body2">_</Typography>
            )}

            {month === MONTHS[0] && (
              <Box
                sx={{
                  display: "inline-block",
                  cursor: "pointer",
                }}
                onClick={() => handleOpenEditModal(item, month)}
              >
                <Edit fontSize="small" />
              </Box>
            )}
          </Box>
        );
      },
    })),
  ];

  return (
    <Box
      sx={{ backgroundColor: "#C4D9FF", padding: "15px", minHeight: "84vh" }}
    >
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", mb: 2, boxShadow: "none" }}
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
            <Button
              variant="contained"
              color="primary"
              startIcon={<Add />}
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                textTransform: "none",
                width: { xs: "100%", sm: "auto" },
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 1, sm: 1.5 },
              }}
              onClick={() => setOpenUser(true)}
            >
              Add Core Watchlist
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <CustomModal
        open={openUser}
        handleClose={() => setOpenUser(false)}
        title="Add Core Watchlist"
      >
        <AddCoreWatchList />
      </CustomModal>
      <EditTrendDialog
        open={openEditModal}
        handleClose={() => setOpenEditModal(false)}
        company={
          data.nodes.find((node) => node.id === editableTrend.companyId)
            ?.company
        }
        month={editableTrend.month}
        handleEditTrend={handleEditTrend}
      />
      <Box
        sx={{
          mt: 2,
          mb: 2,
          width: "50%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-evenly",
          gap: { xs: 1, sm: 2 },
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
              backgroundColor: "green",
            }}
          />
        </Box>
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
              backgroundColor: "blue",
            }}
          />
        </Box>
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
              backgroundColor: "red",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          height: "calc(10 * 50px)",
          overflowY: "auto",
        }}
      >
        <CompactTable
          columns={COLUMNS}
          data={filteredData}
          theme={theme}
          layout={{ custom: true, horizontalScroll: true }}
        />
      </Box>
    </Box>
  );
};

export default CoreWatchlistTable;
