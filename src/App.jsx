import Home from './pages/Home';
import { MyThemeProvider } from './styles/MyThemeProvider';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <MyThemeProvider>
      <Home />
      <GlobalStyles />
    </MyThemeProvider>
  );
};

export default App;
