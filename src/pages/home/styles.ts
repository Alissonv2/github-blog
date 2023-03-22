import styled from 'styled-components'

export const HomeContainer = styled.main`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 1120px;
	width: 100%;
	gap: 3rem;
`

export const PublicationLabels = styled.div`
	display: flex;
	width: 100%;

	justify-content: space-between;

	font-family: 'Nunito';
	font-style: normal;
	line-height: 160%;

	h2 {
		font-weight: 700;
		font-size: 1.125rem;
		color: ${(props) => props.theme['gray-300']};
	}

	span {
		font-size: 0.875rem;
		font-weight: 400;
		color: ${(props) => props.theme['gray-500']};
	}
`

export const HomeContent = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	gap: 2rem;
`

export const Item = styled.div`
	display: flex;

	min-width: 26rem;
	min-height: 16.25rem;

	background: ${(props) => props.theme['gray-800']};
	border-radius: 10px;
`
