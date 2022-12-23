import { Fab } from "@mui/material";
import { styled } from '@mui/material/styles';

const AddNewButton = styled(Fab)(
    ({ theme }) => ({
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    })
)
  
export default AddNewButton