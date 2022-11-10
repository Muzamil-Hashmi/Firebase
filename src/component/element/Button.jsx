import { Button as MButton } from "@mui/material";

function Button({ title, handleAction }) {
  return (
    <MButton className=" border bg-danger rounded-4 px-5 my-3" variant="contained" onClick={handleAction}>
      {title}
    </MButton>
  );
}
export default Button;
