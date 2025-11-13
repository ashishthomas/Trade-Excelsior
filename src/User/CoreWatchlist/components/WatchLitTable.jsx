import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { CompactTable } from "@table-library/react-table-library/compact";

const WatchlistTable = ({ columns, data, theme }) => (
  <Box
    sx={{
      width: "100%",
      overflowX: "auto",
      height: "calc(9 * 50px)",
      overflowY: "auto",
    }}
  >
    <CompactTable
      columns={columns}
      data={data}
      theme={theme}
      layout={{ custom: true, horizontalScroll: true }}
    />
  </Box>
);

WatchlistTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.object.isRequired,
};

export default WatchlistTable;
