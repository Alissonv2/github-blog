import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
	query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
	const { register, handleSubmit } = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	})

	function handleSearchTransactions(data: SearchFormInputs) {
		console.log('oi')
	}

	return (
		<SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
			<input type="text" placeholder="Buscar conteúdo" {...register('query')} />
		</SearchFormContainer>
	)
}
