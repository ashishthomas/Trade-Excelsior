import React, { useState, useMemo, useCallback } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Badge,
  Card,
  useMediaQuery,
  CardContent,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SupportDetails from "./ReusableSupportCard/SupportDetails";

const supportData = [
  {
    name: "Mukund",
    query: "wants to upgrade the subscription",
    status: "resolved",
    email: "mukund@example.com",
    phone: "+1234567890",
  },
  {
    name: "Ashish",
    query: "facing issue regarding the login",
    status: "resolved",
    email: "ashish@example.com",
    phone: "+9876543210",
  },
  {
    name: "Janes",
    query: "Wants to upgrade the subscription",
    status: "resolved",
    email: "janes@example.com",
    phone: "+1122334455",
  },
  {
    name: "Sarah",
    query: "Unable to change password",
    status: "unresolved",
    email: "sarah@example.com",
    phone: "+9988776655",
  },
  {
    name: "Jane",
    query: "License expired",
    status: "unresolved",
    email: "jane@example.com",
    phone: "+5544332211",
  },
];

const getAvatarColor = (status) =>
  status === "resolved" ? "#007bff" : "#7f7f7f";
const getBackgroundColor = (status) =>
  status === "resolved" ? "#e3f2fd" : "#ffffff";

function Support() {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [filter, setFilter] = useState("all");
  const [data, setData] = useState(supportData);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const filteredData = useMemo(
    () =>
      filter === "all"
        ? data
        : data.filter((ticket) => ticket.status === filter),
    [data, filter]
  );

  const updateTicketStatus = useCallback((ticket, newStatus) => {
    setData((prevData) =>
      prevData.map((ticketupdate) =>
        ticketupdate.name === ticket.name ? { ...ticketupdate, status: newStatus } : ticketupdate
      )
    );
  }, []);

  const handleFilterChange = useCallback((type) => {
    setFilter(type);
    setSelectedTicket(null);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#E6E6FF",
        padding: "15px",
        top: 0,
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", px: isMobile ? 1 : 3, py: 1 }}
      >
        <Toolbar
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "center" },
            justifyContent: { xs: "center", sm: "space-between" },
            textAlign: "center",
            width: "100%",
            gap: isMobile ? 1 : 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Typography
              variant="h6"
              fontSize={{ xs: "14px", sm: "18px" }}
              width={{ xs: "auto" }}
              sx={{
                color: "black",
                flexGrow: { sm: 1 },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <b> SUPPORT </b>
            </Typography>
            <Badge
              badgeContent={filteredData.length}
              sx={{
                ml: 3,
                "& .MuiBadge-badge": {
                  height: "1.8rem",
                  width: "1.8rem",
                  backgroundColor: "#E6E6FA",
                  color: "#007BFF",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                },
              }}
            />
          </Box>

          {/* Filter Toggle Buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-end" },
              flexWrap: { xs: "wrap", sm: "nowrap" },
              backgroundColor: "#E6E6FA",
              borderRadius: "25px",
              padding: "4px",
              width: isMobile ? "100%" : "auto",
              justifyContent: "center",
              mt: { xs: 1, sm: 0 },
              gap: { xs: 1, sm: 2 },
            }}
          >
            {["all", "unresolved", "resolved"].map((type) => (
              <Box
                key={type}
                sx={{
                  flex: 1,
                  padding: "10px 20px",
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  textAlign: { xs: "center", sm: "center" },
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: filter === type ? "white" : "black",
                  backgroundColor: filter === type ? "#007BFF" : "transparent",
                  borderRadius: "25px",
                  transition: "all 0.3s ease",
                  minWidth: { xs: "100%", sm: "auto" },
                }}
                onClick={() => handleFilterChange(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Show selected ticket details */}
      {selectedTicket ? (
        <SupportDetails
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
          updateTicketStatus={updateTicketStatus}
        />
      ) : (
        <Box sx={{ mt: 2 }}>
          {filteredData.map((ticket, index) => (
            <Card
              key={index}
              sx={{
                marginBottom: 2,
                backgroundColor: getBackgroundColor(ticket.status),
                borderRadius: 2,
                cursor: "pointer",
              }}
              onClick={() => setSelectedTicket(ticket)}
            >
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                {ticket.status === "unresolved" ? (
                  <Badge
                    color="error"
                    variant="dot"
                    overlap="circular"
                    anchorOrigin={{ vertical: "top", horizontal: "left" }}
                    sx={{
                      transform: isMobile
                        ? "translateY(-4px)"
                        : "translateY(-6px)",
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: getAvatarColor(ticket.status),
                        marginRight: 2,
                      }}
                    >
                      {ticket.name.charAt(0)}
                    </Avatar>
                  </Badge>
                ) : (
                  <Avatar
                    sx={{
                      bgcolor: getAvatarColor(ticket.status),
                      marginRight: 2,
                    }}
                  >
                    {ticket.name.charAt(0)}
                  </Avatar>
                )}
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    {ticket.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Query: {ticket.query}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Support;
