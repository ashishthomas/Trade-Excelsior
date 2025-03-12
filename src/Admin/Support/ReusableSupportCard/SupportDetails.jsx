import React, { useState, useCallback } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Checkbox,
  useMediaQuery,
  FormControlLabel,
  Button,
  Badge,
} from "@mui/material";

function SupportDetails({ ticket, onClose, updateTicketStatus }) {
  const [resolved, setResolved] = useState(ticket.status === "resolved");

  const isSmallMobile = useMediaQuery("(max-width:360px)");
  const isTinyMobile = useMediaQuery("(max-width:320px)");
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");

  const handleCheckboxChange = useCallback(() => {
    const newStatus = resolved ? "unresolved" : "resolved";
    setResolved(!resolved);
    updateTicketStatus(ticket, newStatus);
  }, [resolved, ticket, updateTicketStatus]);

  return (
    <Card
      sx={{
        borderRadius: 2,
        mt: 2,
        width: isSmallMobile
          ? "95%"
          : isMobile
          ? "100%"
          : isTablet
          ? "80%"
          : "100%",
        mx: "auto",
        backgroundColor: resolved ? "#e0f7fa" : "white",
        transition: "background-color 0.3s ease",
      }}
    >
      <CardContent sx={{ padding: isSmallMobile ? 1.5 : isMobile ? 2 : 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isSmallMobile ? 1.5 : 2,
          }}
        >
          {/* Avatar with Red Dot for Unresolved Status */}
          {ticket.status === "unresolved" ? (
            <Badge
              color="error"
              variant="dot"
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
              sx={{
                transform: isMobile ? "translateY(-4px)" : "translateY(-6px)",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#7f7f7f",
                  width: isSmallMobile ? 40 : 48,
                  height: isSmallMobile ? 40 : 48,
                }}
              >
                {ticket.name.charAt(0)}
              </Avatar>
            </Badge>
          ) : (
            <Avatar
              sx={{
                bgcolor: "#7f7f7f",
                width: isSmallMobile ? 40 : 48,
                height: isSmallMobile ? 40 : 48,
              }}
            >
              {ticket.name.charAt(0)}
            </Avatar>
          )}
          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ fontSize: isSmallMobile ? "1rem" : "1.25rem" }}
            >
              {ticket.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontSize: isSmallMobile ? "0.85rem" : "1rem" }}
            >
              Query: {ticket.query}
            </Typography>
          </Box>
        </Box>

        {/* Details */}
        <Box sx={{ mt: 2, px: isSmallMobile ? 0.5 : isMobile ? 1 : 0 }}>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: "gray",
              fontSize: isSmallMobile ? "0.9rem" : "1rem",
            }}
          >
            <b>Email:</b> {ticket.email || "N/A"}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "gray", fontSize: isSmallMobile ? "0.9rem" : "1rem" }}
          >
            <b>Phone:</b> {ticket.phone || "N/A"}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: isSmallMobile ? "0.9rem" : "1rem" }}
          >
            <b>Query:</b> {ticket.query}
          </Typography>
        </Box>

        {/* Checkbox and Back Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
            flexDirection: isTinyMobile ? "column" : "row",
            gap: isTinyMobile ? 1 : 0,
          }}
        >
          <FormControlLabel
            control={
              <Checkbox checked={resolved} onChange={handleCheckboxChange} />
            }
            label="Resolved"
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: isSmallMobile ? "0.9rem" : "1rem",
              width: isTinyMobile ? "100%" : "auto",
            }}
            onClick={onClose}
          >
            Back
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default React.memo(SupportDetails);
