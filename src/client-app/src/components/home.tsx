import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Home : React.FC = () => (
  <Box
    justifyContent="center"
    alignItems="center"
    textAlign="center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0 }}
      >
        <Typography variant="h1">
          6'3"
        </Typography>
      </motion.div>
      <Typography 
        variant="body2"
        sx={{ my: 4 }}>
        This is Australian Right-arm Fast Bowler Lance Morris' official height until proven otherwise
      </Typography>
  </Box>
)

export default Home;
