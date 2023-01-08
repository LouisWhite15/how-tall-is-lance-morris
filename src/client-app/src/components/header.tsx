import { Box, Typography } from "@mui/material";

interface HeaderProps {
  title: string
}

const Header : React.FC<HeaderProps> = ({ title }) => (
  <Box
    justifyContent="center"
    alignItems="center"
    textAlign="center"
    sx={{ my: 4 }}>
    <Typography variant="h4">
      { title }
    </Typography>
  </Box>
)

export default Header;
