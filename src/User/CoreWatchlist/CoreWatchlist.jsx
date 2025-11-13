import { useState, useEffect, useMemo } from "react";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { Box, useMediaQuery } from "@mui/material";

import watchlistData from "./WatchListData";
import trendColors from "./utils/trendColors";
import months from "./utils/months";
import { highlightText } from "./utils/highlightText";

import CoreWatchlistHeader from "./components/CoreWatchlistHeader";
import TrendLegend from "./components/TrendLegend";
import WatchlistTable from "./components/WatchLitTable";

const CoreWatchlistTable = () => {
  const [data, setData] = useState({ nodes: [] });
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
        background-color: rgb(20, 109, 182);
        color: white !important;
        font-weight: bold !important;
        text-align: center;
      `,
      HeaderCell: `
        padding: 10px;
        text-align: center;
        cursor: pointer;
        font-size: ${isMobile ? "12px" : "14px"};
      `,
      Cell: `
        padding: 8px;
        font-size: ${isMobile ? "12px" : "14px"};
        text-align: center;
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
      sx={{ backgroundColor: "#E6E6FF", padding: "16px", minHeight: "84vh" }}
    >
      <CoreWatchlistHeader
        title="CORE WATCHLIST"
        count={filteredData.nodes.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <TrendLegend />

      <WatchlistTable columns={COLUMNS} data={filteredData} theme={theme} />
    </Box>
  );
};

export default CoreWatchlistTable;
