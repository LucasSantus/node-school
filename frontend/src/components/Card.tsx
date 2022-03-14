// import * as React from 'react';

// import { CardActionArea, Paper, Box, Card, CardContent, Typography  } from '@mui/material';

// import { ThemeProvider } from '@mui/material/styles';

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
    padding: theme.spacing(9),
    borderRadius: 20,
    color: "white",
    backgroundColor: "#8257e5"
}));

// ----------------------------------------------------------------------

interface InterfaceCard {
  title: string;
}

const CardCustom: React.FC<InterfaceCard> = (props) => {
    return (
        <RootStyle>
            <Typography variant="h3">{props.title}</Typography>
        </RootStyle>
    );
}

export default CardCustom;