import { useState, useEffect, useMemo } from "react";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { Box, useMediaQuery } from "@mui/material";

import CustomModal from "../CommonComponents/CustomModal";
import AddCoreWatchList from "../Dashboard/forms/AddCoreWatchList";
import EditTrendDialog from "./EditTrend";
import watchlistData from "./WatchlistData";

import HeaderSection from "./components/CoreWatchlistHeader";
import TrendLegend from "./components/TrendLegend";
import WatchlistDataTable from "./components/WatchlistDataTable";

const CoreWatchlistTable = () => {
  const [data, setData] = useState({ nodes: [] });
  const [openUser, setOpenUser] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editableTrend, setEditableTrend] = useState({
    companyId: null,
    month: null,
    initialTrend: null,
  });
  const [searchQuery, setSearchQuery] = useState("");

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
    },
  ]);

  useEffect(() => {
    setData({ nodes: watchlistData });
  }, []);

  const filteredData = useMemo(
    () => ({
      nodes: data.nodes.filter((item) =>
        item.company.toLowerCase().includes(searchQuery.toLowerCase())
      ),
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
    const updatedNodes = data.nodes.map((node) =>
      node.id === editableTrend.companyId
        ? {
            ...node,
            trends: { ...node.trends, [editableTrend.month]: newTrend },
          }
        : node
    );
    setData({ nodes: updatedNodes });
    setOpenEditModal(false);
  };

  return (
    <Box
      sx={{ backgroundColor: "#C4D9FF", padding: "15px", minHeight: "84vh" }}
    >
      <HeaderSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        count={filteredData.nodes.length}
        handleAddOpen={() => setOpenUser(true)}
      />

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
          data.nodes.find((n) => n.id === editableTrend.companyId)?.company
        }
        month={editableTrend.month}
        handleEditTrend={handleEditTrend}
      />

      <TrendLegend />

      <WatchlistDataTable
        filteredData={filteredData}
        theme={theme}
        isMobile={isMobile}
        searchQuery={searchQuery}
        handleOpenEditModal={handleOpenEditModal}
      />
    </Box>
  );
};

export default CoreWatchlistTable;
