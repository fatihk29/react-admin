import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

import { COLORS } from "../../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = COLORS(theme.palette.mode);

  return (
    <Box sx={{ ml: 2 }}>
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
    </Box>
  );
};

export default Header;
