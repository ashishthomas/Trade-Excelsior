
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import Close from "@mui/icons-material/Close";

const InfoDialog = ({ openInfoDialog, handleCloseInfoDialog, selectedUser }) => {
  return (
    <Dialog open={openInfoDialog} onClose={handleCloseInfoDialog} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Typography variant="h6">User Information</Typography>
        <IconButton onClick={handleCloseInfoDialog} size="small">
          <Close sx={{ color: "black" }} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {selectedUser && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
              padding: 2,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                { label: "Name", value: selectedUser.name },
                { label: "Phone", value: selectedUser.phone },
                { label: "License", value: selectedUser.license },
                { label: "Address", value: selectedUser.address },
                { label: "Subscription Start", value: selectedUser.subscriptionStart },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    border: "1px solid #ddd",
                    borderRadius: 1,
                    padding: 1,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2">
                    <strong>{item.label}:</strong> {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                { label: "Email", value: selectedUser.email },
                { label: "Occupation", value: selectedUser.occupation },
                { label: "Member Since", value: selectedUser.memberSince },
                { label: "Years of Membership", value: selectedUser.yearsOfMembership },
                { label: "Subscription End", value: selectedUser.subscriptionEnd },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    border: "1px solid #ddd",
                    borderRadius: 1,
                    padding: 1,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2">
                    <strong>{item.label}:</strong> {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 2,
          borderTop: "1px solid #ddd",
        }}
      >
        <Button
          onClick={handleCloseInfoDialog}
          sx={{
            backgroundColor: "#007BFF",
            color: "white",
            "&:hover": { backgroundColor: "#0056b3" },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoDialog;