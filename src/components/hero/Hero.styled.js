import styled from 'styled-components';
import { Container } from '../globals';
import { MdArrowForward } from 'react-icons/md';
export const HeroContainer = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	height: calc(100vh - 5rem);
	background: ${props => props.theme.colors.dark};
	z-index: 1;
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-image: linear-gradient(
				180deg,
				rgba(0 0 0 / 20%) 0%,
				rgba(0 0 0 / 60%) 100%
			),
			linear-gradient(180deg, rgba(0 0 0 / 20%) 0%, transparent 100%);
		z-index: 2;
	}
`;
export const HeroBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;
export const HeroVideo = styled.video`
	object-fit: cover;
	width: 100%;
	height: 100%;
	background: #232a34;
`;
export const HeroContent = styled.div`
	position: relative;
	z-index: 3;
	display: flex;
	color: white;
	padding: 0.5rem 1.5rem;
	flex-direction: column;
	align-items: center;
`;
export const HeroHeading = styled.h1`
	font-size: ${props => props.theme.textSize.xxl};
	@media (max-width: 768px) {
		font-size: ${props => props.theme.textSize.xl};
	}
	@media (max-width: 480px) {
		font-size: ${props => props.theme.textSize.lg};
	}
`;
export const HeroParagraph = styled.p`
	margin-top: 1.5rem;
	font-size: 20px;
	text-align: center;
	max-width: 600px;
	@media (max-width: 768px) {
		font-size: ${props => props.theme.textSize.sm};
	}
`;
export const HeroBtnWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
	&:hover > * > * {
		animation: move-x 0.5s infinite alternate;
	}
`;
export const ArrowForward = styled(MdArrowForward)`
	margin-left: 0.5rem;
	font-size: ${({ theme }) => theme.textSize.md};
	transition: 400ms ease-in-out;
`;
