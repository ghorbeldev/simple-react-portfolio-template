import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Container } from '../globals';
export const FooterWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.dark};
	color: white;
	padding-top: 5rem;
	padding-bottom: 5rem;
`;
export const FooterContainer = styled(Container)`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;
	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
export const FooterLinksWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
export const FooterLinksTitle = styled.h4`
	font-size: 1.2rem;
	font-weight: 700;
`;
export const FooterLinksList = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 0.5rem 0;
`;
export const FooterLink = styled(RouterLink)`
	font-size: 1rem;
	font-weight: 400;
	height: 2.25rem;
	line-height: 2.25rem;
	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`;
export const Social = styled.div`
	text-align: center;
	margin-top: 5rem;
`;
export const Logo = styled(RouterLink)`
	font-size: ${({ theme }) => theme.textSize.lg};
	font-weight: 600;
`;
export const Rights = styled.p`
	font-size: 1.1rem;
	margin: 1rem 0;
`;
export const SocialLinks = styled.div`
	display: flex;
	justify-content: center;
`;
export const SocialLink = styled.a`
	font-size: 1.8rem;
	margin-left: 1.2rem;
	margin-right: 1.2rem;
	&:hover > * {
		color: ${({ theme }) => theme.colors.primary};
	}
`;
