import { GlobalStyles } from './components/globals';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Signin from './pages/signin/Signin';
const theme = {
	colors: {
		primary: '#01bf71',
		secondary: '#010606',
		dark: '#001219',
		black: '#000',
		white: '#fff',
	},
	spacing: {
		xxl: '3.5rem',
		xl: '3rem',
		lg: '2rem',
		md: '1.5rem',
		sm: '1rem',
		xs: '.5rem',
	},
	textSize: {
		xxl: '3rem',
		xl: '2.2rem',
		lg: '1.8rem',
		md: '1.5rem',
		sm: '1rem',
		xs: '.8rem',
	},
};
function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyles />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/signin' element={<Signin />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
