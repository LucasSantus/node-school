// import * as React from 'react';

// import { CardActionArea, Paper, Box, Card, CardContent, Typography  } from '@mui/material';

// import { ThemeProvider } from '@mui/material/styles';

// import theme from '../ui/themes/themes';

// import "./../ui/styles/Card.css"

// interface InterfaceCard {
//   title: string;
// }

// const CardCustom: React.FC<InterfaceCard> = (props) => {
//     return (
//         <Paper
//             className="card-paper"
//             elevation={1}
//         >
//             <Card>
//                 <CardActionArea>
//                     <CardContent>
//                         <ThemeProvider theme={theme}>
//                             <Box
//                                 sx={{
//                                     p: 2,
//                                     textDecoration: null,
//                                     bgcolor: '#8257e6',
//                                     borderRadius: 1,
//                                     display: 'grid',
//                                     gridTemplateColumns: { md: '1fr 1fr' },
//                                     gap: 2,
//                                 }}
//                             >
//                                 <Typography gutterBottom variant="h5" component="div">
//                                     {props.title}
//                                 </Typography>
//                             </Box>
//                         </ThemeProvider>
//                     </CardContent>
//                 </CardActionArea>
//             </Card>
//         </Paper>
//     );
// };

// export default CardCustom;

// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: "red",
  backgroundColor: "blue"
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: "theme.palette.primary.dark",
  backgroundImage: `linear-gradient(135deg, ${alpha("theme.palette.primary.dark", 0)} 0%, ${alpha(
    "theme.palette.primary.dark",
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 714000;

interface InterfaceCard {
  title: string;
}

const CardCustom: React.FC<InterfaceCard> = (props) => {
  return (
    <RootStyle>
      <Typography variant="h3">122222</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Weekly Sales
      </Typography>
    </RootStyle>
  );
}

export default CardCustom;