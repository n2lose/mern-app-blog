import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

const BlogHeader = styled(Typography)(
    ({ theme }) => ({
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      padding: theme.spacing(2),
      textAlign: 'center',
      marginBottom: 20,
    })
)
  
export default BlogHeader