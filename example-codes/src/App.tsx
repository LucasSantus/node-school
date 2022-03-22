import AppRoutes from "./routes/Routes";
import { ThemeProvider } from "@material-ui/core";
import theme from "./ui/themes/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppRoutes />
        </ThemeProvider>
    );
}

export default App;