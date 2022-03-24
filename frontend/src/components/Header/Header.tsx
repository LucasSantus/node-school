import {
  Link
} from "react-router-dom";

import { styled } from '@mui/material/styles';

const LinkCustom = styled(Link)(
    ({ theme }) => `
        color: white;
        text-decoration: none;
        padding: 10px;
        &:hover {
            color: #191E3D;
        }
    `
);

export default function Header(){
    return (
        <nav>
            <LinkCustom sx={{
                    
                }} 
                to="/"
            >
                Home
            </LinkCustom>
            <LinkCustom sx={{
                    
                }} 
                to="/students/"
            >
                Students
            </LinkCustom>
            <LinkCustom sx={{
                    
                }} 
                to="/teachers/"
            >
                Teacher
            </LinkCustom>
        </nav>
    );
}
