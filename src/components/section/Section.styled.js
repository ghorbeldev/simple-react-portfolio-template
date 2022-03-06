import styled from 'styled-components';
import { Container } from '../globals';
export const SectionWrapper = styled.div`
	color: white;
	padding-top: 2.5rem;
	padding-bottom: 2.5rem;
	background-color: ${({ lightBackground, theme }) =>
		lightBackground ? theme.colors.white : theme.colors.secondary};
	@media (max-width: 768px) {
		padding-top: 6.25rem;
		padding-bottom: 6.25rem;
	}
`;
export const SectionContainer = styled(Container)`
	display: grid;
	z-index: 1;
	justify-content: center;
	min-height: calc(100vh - 5rem);
`;
export const GridRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({ imgStart }) =>
		imgStart ? `'image content'` : `'content image'`};
	@media (max-width: 768px) {
		grid-template-areas: ${({ imgStart }) =>
			imgStart ? `'content' 'image'` : `'content content' 'image image'`};
	} ;
`;
export const Column = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: ${({ gridArea }) => gridArea};
`;
export const TextWrapper = styled.div`
	max-width: 540px;
	padding-bottom: 4rem;
`;
export const TopLine = styled.p`
	color: ${({ theme }) => theme.colors.primary};
	font-size: ${({ theme }) => theme.textSize.sm};
	line-height: ${({ theme }) => theme.textSize.sm};
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: ${({ theme }) => theme.spacing.sm};
`;
export const Heading = styled.h1`
	margin-bottom: ${({ theme }) => theme.spacing.md};
	font-size: ${({ theme }) => theme.textSize.xl};
	line-height: 1.1;
	font-weight: 600;
	color: ${({ darkText, theme }) =>
		darkText ? theme.colors.secondary : theme.colors.white};
	@media (max-width: 480px) {
		font-size: ${({ theme }) => theme.textSize.lg};
	} ;
`;
export const Description = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 1.125rem;
	line-height: 24px;
	color: ${({ darkText, theme }) =>
		darkText ? theme.colors.secondary : theme.colors.white};
`;
export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;
export const ImageWrapper = styled.div`
	max-width: 560px;
	height: 100%;
`;
export const Image = styled.img`
	width: 100%;
	margin-bottom: 10px;
`;
