import { ThemeProvider } from 'styled-components'
import { DefaultLayout } from './layouts/DefaultLayout'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<DefaultLayout />
		</ThemeProvider>
	)
}

export default App
