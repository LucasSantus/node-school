import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TextFieldCustom = styled(TextField)({
    
    '& label': {
        color: '#48539b',
    },
    '& input': {
        color: '#48539b',
    },
    '& .MuiFormHelperText-root': {
        color: '#48539b',
    },
    '& label.Mui-focused': {
        color: '#48539b',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
    },
});