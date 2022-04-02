import Button from '@mui/material/Button/Button';
import { styled } from '@mui/material/styles';

export const ButtonCustom = styled(Button)({
    border: '1px solid',
    backgroundColor: '#7063C0',
    borderColor: '#695BBE',
    '&:hover': {
        backgroundColor: '#6153bb',
        borderColor: '#695BBE',
        boxShadow: 'none',
    },
    '&:active': {
        backgroundColor: '#6153bb',
        borderColor: '#695BBE',
        boxShadow: 'none',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.1rem #695BBE',
    },
});