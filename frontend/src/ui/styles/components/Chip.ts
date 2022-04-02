import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ChipCustom = styled(Chip)({
    '& root':{
        color: 'white !important'
    },
    '& .css-6od3lo-MuiChip-label':{
        color: 'white'
        // overflow: hidden;
        // text-overflow: ellipsis;
        // padding-left: 12px;
        // padding-right: 12px;
        // white-space: nowrap;
    },
    '& .css-6od3lo-MuiChip-label .Mui-disabled':{
        color: 'white' 
    },

    '.MuiChip-label.Mui-disabled':{
        '-webkit-text-fill-color': 'white !important',
    },

    '& .css-gac2fo-MuiChip-root':{
        backgroundColor: 'red !important'
    }
});