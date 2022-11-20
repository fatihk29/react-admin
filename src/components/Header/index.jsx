import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";

// project imports
import { COLORS } from "../../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = COLORS(theme.palette.mode);

  return (
    <Grid sx={{ mb: 2 }}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={colors.greenAccent[100]}
        fontWeight="bold"
      >
        {subtitle}
      </Typography>
    </Grid>
  );
};

export default Header;
