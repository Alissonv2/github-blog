import { Summary } from '../../components/Summary'
import { SearchForm } from './SearchForm'
import { HomeContainer, HomeContent, Item, PublicationLabels } from './styles'

export function Home() {
	return (
		<HomeContainer>
			<Summary />
			<PublicationLabels>
				<h2>Publicações</h2>
				<span>6 publicações</span>
			</PublicationLabels>
			<SearchForm />

			<HomeContent>
				<Item />
				<Item />
			</HomeContent>
		</HomeContainer>
	)
}
