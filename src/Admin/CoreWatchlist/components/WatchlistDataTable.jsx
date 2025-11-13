import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { CompactTable } from "@table-library/react-table-library/compact";
import { Edit } from "@mui/icons-material";
import { TREND_COLORS, MONTHS } from "../utils/constants";
import { highlightText } from "../utils/highlightText";

const WatchlistDataTable = ({
  filteredData,
  theme,
  isMobile,
  searchQuery,
  handleOpenEditModal,
}) => {
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
                sx={{ display: "inline-block", cursor: "pointer" }}
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
  );
};

WatchlistDataTable.propTypes = {
  filteredData: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string.isRequired,
  handleOpenEditModal: PropTypes.func.isRequired,
};

export default WatchlistDataTable;
