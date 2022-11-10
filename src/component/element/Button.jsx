
import { Button as MButton } from "@mui/material";

function Button({ title,handleAcction}) {
  return (
    <MButton variant="contained" onClick={handleAcction} >
      {title}
    </MButton>
  );
}
export default Button;
