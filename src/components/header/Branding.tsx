import { Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import router from "../Routes";
const Branding = () => {
  return (
    <>
      <ChatIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        onClick={() => router.navigate("/")}
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          cursor: "pointer",
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        CHATTER
      </Typography>
    </>
  );
};
export default Branding;
