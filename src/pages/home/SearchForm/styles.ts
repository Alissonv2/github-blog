import styled from 'styled-components'

export const SearchFormContainer = styled.form`
	display: flex;
	width: 100%;
	gap: 1rem;

	input {
		flex: 1;
		border-radius: 6px;
		border: 0;

		background: ${(props) => props.theme['base-input']};
		color: ${(props) => props.theme['gray-300']};
		padding: 1rem;

		font-family: 'Nunito';
		font-style: normal;
		font-weight: 400;
		font-size: 1rem;
		line-height: 160%;

		&::placeholder {
			color: ${(props) => props.theme['gray-600']};
		}
	}
`
