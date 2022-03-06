import styled from 'styled-components';
import { Container } from '../globals';
export const ServicesSection = styled.div`
	background-color: ${props => props.theme.colors.secondary};
	color: ${props => props.theme.colors.white};
	padding-top: 2.5rem;
	padding-bottom: 2.5rem;
`;
export const ServicesContainer = styled(Container)`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	min-height: calc(100vh - 5rem);
`;
export const Heading = styled.h1`
	color: inherited;
	font-size: ${({ theme }) => theme.textSize.xxl};
	width: 100%;
	text-align: center;
	margin-bottom: 5rem;
`;
export const CardsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	flex-wrap: wrap;
	width: 100%;
	gap: 1.5rem;
`;
export const Card = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	background-color: white;
	border-radius: 10px;
	cursor: pointer;
	transition: 325ms ease-in-out;
	padding: 2rem 4rem;
	position: relative;
	overflow: hidden;
	&::after {
		content: '';
		position: absolute;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 0;
		height: 0;
		opacity: 0;
		background-color: rgba(1, 191, 113, 0.2);
	}
	@media (max-width: 1200px) {
		padding: 2rem;
	}

	&:hover {
		transform: translateY(-10px);
		&::after {
			animation: flashing 0.7s;
		}
		img {
			transform: scale(1.1);
		}
	}
`;
export const CardImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 300px;
	overflow: hidden;
	@media (max-width: 480px) {
		height: 200px;
	}
`;
export const CardImage = styled.img`
	max-height: 100%;
	transition: 325ms ease-in-out;
`;
export const CardTitle = styled.h4`
	color: ${({ theme }) => theme.colors.secondary};
	font-size: 1.5rem;
	font-weight: 600;
	margin-top: ${({ theme }) => theme.spacing.sm};
	margin-bottom: ${({ theme }) => theme.spacing.sm};
`;
export const CardDescription = styled.p`
	color: ${({ theme }) => theme.colors.secondary};
	font-size: 1.225rem;
	text-align: center;
`;
