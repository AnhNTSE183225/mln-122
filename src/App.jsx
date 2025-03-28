import { BrowserRouter, Route, Routes } from 'react-router';
import { PageHome } from './PageHome';
import { Protected } from './Protected';
import { EmptyPage } from './EmptyPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PageConcepts } from './PageConcepts';
import { PageChallenges } from './PageChallenges';
import { PageSolutions } from './PageSolutions';
import { PageAchievements } from './PageAchievements';
import { PageReferences } from './PageReferences';

// Tạo theme cho ứng dụng
const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f', // Đỏ - tượng trưng cho lá cờ Việt Nam
      light: '#ff6659',
      dark: '#9a0007',
    },
    secondary: {
      main: '#ffc107', // Vàng - tượng trưng cho lá cờ Việt Nam
      light: '#fff350',
      dark: '#c79100',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<Protected />}>
            <Route path="/" element={<PageHome />} />
            <Route path="/concepts" element={<PageConcepts />} />
            <Route path="/challenges" element={<PageChallenges />} />
            <Route path="/solutions" element={<PageSolutions />} />
            <Route path="/achievements" element={<PageAchievements />} />
            <Route path="/references" element={<PageReferences />} />
            <Route path="*" element={<EmptyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;