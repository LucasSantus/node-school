import { Box, Stack } from "@mui/material";
import Header from "../../components/Header/Header";

const NotFound: React.FC = (props) => {
    return (
        <>
            <Header />

            <Box
                sx={{
                    display: 'flex',
                    width: '100vh',
                    height: '80vh',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Stack
                    sx={{
                        borderRadius: 6,
                        border: 1,
                        borderColor: '#272d4d',
                        backgroundColor: '#191e3d',
                        paddingX: 8,
                        paddingY: 1,
                    }}
                >
                    <h1>Not Found</h1>
                </Stack>
            </Box>
        </>
    );
}

export default NotFound;