import Button from "@mui/material/Button";
import { darken } from "@mui/material";

const MainButton = ({ title, width, bgColor, callback, display }) => {
  return (
    <Button
      sx={{
        display: display,
        width: { width },
        mt: 2,
        backgroundColor: bgColor,
        "&:hover": { backgroundColor: darken(bgColor, 0.2) },
      }}
      variant="contained"
      onClick={callback}
    >
      {title}
    </Button>
  );
};

export default MainButton;
