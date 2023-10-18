import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
	ThemeProvider,
	createGlobalStyle,
	DefaultTheme
} from 'styled-components';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './contexts/authContext';
import router from './routes';
import 'react-toastify/dist/ReactToastify.css';

const appTheme: DefaultTheme = {
	primary: {
		main: '#344955',
		contrastText: '#fff'
	},
	secondary: {
		main: '#f9aa33',
		contrastText: '#485b66'
	},
	background: '#3B5361'
};

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.background};
		font-family: arial;
	}
`;

function App() {
	return (
		<GoogleOAuthProvider
			clientId={process.env.REACT_APP_OAUTH_CLIENT_ID as string}
		>
			<AuthProvider>
				<ThemeProvider theme={appTheme}>
					<ToastContainer theme="dark" />
					<GlobalStyle theme={appTheme} />
					<RouterProvider router={router} />
				</ThemeProvider>
			</AuthProvider>
		</GoogleOAuthProvider>
	);
}

export default App;
