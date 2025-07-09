
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
  Typography,
} from "@mui/material";
import { Edit, Delete, Info, LibraryBooks } from "@mui/icons-material";

const UserTable = ({
  users,
  searchQuery,
  handleOpenEditDrawer,
  handleOpenDeleteDialog,
  handleOpenInfoDialog,
  handleOpenLibraryDrawer,
  highlightText,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        padding: isMobile ? 1 : 2,
        borderRadius: 2,
        marginTop: "30px",
        overflowX: "auto",
      }}
    >
      {isMobile ? (
        <Box>
          {users
            .filter((user) => {
              const name = user.name?.toLowerCase() || "";
              const email = user.email?.toLowerCase() || "";
              const phone = user.phone?.toLowerCase() || "";
              const query = searchQuery?.toLowerCase() || "";

              return (
                name.includes(query) ||
                email.includes(query) ||
                phone.includes(query)
              );
            })
            .map((row) => (
              <Box
                key={row.id}
                sx={{
                  border: "1px solid #e0e0e0",
                  borderRadius: 2,
                  padding: 2,
                  marginBottom: 2,
                  backgroundColor: "#f9f9f9",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {row.name}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  <strong>Email:</strong>{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: highlightText(row.email),
                    }}
                  />
                </Typography>
                <Typography variant="body2">
                  <strong>Phone:</strong>{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: highlightText(row.phone),
                    }}
                  />
                </Typography>
                <Typography variant="body2">
                  <strong>Subscription Start:</strong> {row.subscriptionStart}
                </Typography>
                <Typography variant="body2">
                  <strong>Subscription End:</strong> {row.subscriptionEnd}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 1,
                    mt: 2,
                  }}
                >
                  <IconButton
                    onClick={() => handleOpenEditDrawer(row)}
                    size="small"
                  >
                    <Edit sx={{ color: "blue" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => handleOpenDeleteDialog(row.id)}
                    size="small"
                  >
                    <Delete sx={{ color: "blue" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => handleOpenInfoDialog(row)}
                    size="small"
                  >
                    <Info sx={{ color: "blue" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => handleOpenLibraryDrawer(row)}
                    size="small"
                  >
                    <LibraryBooks sx={{ color: "blue" }} />
                  </IconButton>
                </Box>
              </Box>
            ))}
        </Box>
      ) : (
        <TableContainer>
          <Table size="medium" sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "blue" }}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  #
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Name
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Email
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Phone
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Subscription Start Date
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Subscription End Date
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .filter((user) => {
                  const name = user.name?.toLowerCase() || "";
                  const email = user.email?.toLowerCase() || "";
                  const phone = user.phone?.toLowerCase() || "";
                  const query = searchQuery?.toLowerCase() || "";

                  return (
                    name.includes(query) ||
                    email.includes(query) ||
                    phone.includes(query)
                  );
                })
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell
                      dangerouslySetInnerHTML={{
                        __html: highlightText(row.name),
                      }}
                    />
                    <TableCell
                      dangerouslySetInnerHTML={{
                        __html: highlightText(row.email),
                      }}
                    />
                    <TableCell
                      dangerouslySetInnerHTML={{
                        __html: highlightText(row.phone),
                      }}
                    />
                    <TableCell>{row.subscriptionStart}</TableCell>
                    <TableCell>{row.subscriptionEnd}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <IconButton onClick={() => handleOpenEditDrawer(row)}>
                        <Edit sx={{ color: "blue" }} />
                      </IconButton>
                      <IconButton
                        onClick={() => handleOpenDeleteDialog(row.id)}
                      >
                        <Delete sx={{ color: "blue" }} />
                      </IconButton>
                      <IconButton onClick={() => handleOpenInfoDialog(row)}>
                        <Info sx={{ color: "blue" }} />
                      </IconButton>
                      <IconButton onClick={() => handleOpenLibraryDrawer(row)}>
                        <LibraryBooks sx={{ color: "blue" }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};

export default UserTable;
