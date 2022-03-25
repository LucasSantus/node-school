import { styled } from '@mui/material/styles';
import { Link as LinkMaterial } from '@mui/material';
import { Link } from 'react-router-dom';

export const LinkCustom = styled(Link)({
    color: 'white',
    textDecoration: 'none',
    padding: '20px',

    '&:hover': {
        color: '#7063C0',
        textDecoration: 'underline'
    },
});

export const LinkTitleCardCustom = styled(LinkMaterial)({
    margin: '0px',
    fontWeight: 700,
    fontSize: '21px',
    lineHeight: 1.4,
    // font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    color: '#CBCCD2',
    textDecoration: 'none',

    '&:hover': {
        color: '#7063C0',
        textDecoration: 'underline'
    },
});


    
