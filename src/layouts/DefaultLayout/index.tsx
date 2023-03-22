import { Header } from '../../components/Header'
import { Home } from '../../pages/home'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
	return (
		<LayoutContainer>
			<Header />
			<Home />
		</LayoutContainer>
	)
}
