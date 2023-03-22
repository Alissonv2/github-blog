import styled from 'styled-components'

export const SummaryContainer = styled.section`
	width: 100%; /* 
	height: auto; */
	height: 13.25rem;
	max-width: 1120px;
	margin: 0 auto;
	padding: 0 1.5rem;

	background: ${(props) => props.theme['gray-900']};

	border-radius: 10px;

	display: flex;

	gap: 2rem;

	margin-top: -5rem;
`
