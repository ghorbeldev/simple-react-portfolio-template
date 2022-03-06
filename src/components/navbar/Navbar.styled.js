import styled from 'styled-components';
import { Container } from '../globals';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
export const Header = styled.div`
	background-color: ${({ scrolled, theme }) =>
		scrolled ? theme.colors.dark : 'transparent'};
	color: ${({ theme }) => theme.colors.white};
	height: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;
	transition: all 0.8s ease;
`;
export const NavContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	position: relative;
	align-items: center;
	z-index: 1;
	height: 5rem;
	padding: 0 ${({ theme }) => theme.spacing.md};
	width: 100%;
	transition: all 425ms ease;
`;
export const Logo = styled(RouterLink)`
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.textSize.md};
	font-weight: bold;
	justify-self: flex-start;
	display: flex;
	align-items: center;
	margin-left: ${({ theme }) => theme.spacing.md};
	cursor: pointer;
`;
export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	height: 100%;
	text-align: center;
	margin-right: ${({ theme }) => -1 * parseFloat(theme.spacing.md) + 'rem'};
	@media (max-width: 768px) {
		display: none;
	}
`;
export const NavItem = styled.li`
	color: ${props => props.theme.colors.white};
	height: 100%;
	&:hover {
		color: ${props => props.theme.colors.primary};
	}
`;
export const NavLink = styled(ScrollLink)`
	display: flex;
	align-items: center;
	color: currentColor;
	padding: 0 ${({ theme }) => theme.spacing.sm};
	height: 100%;
	font-size: ${props => props.theme.textSize.sm};
	cursor: pointer;
	&.active {
		border-bottom: 3px solid ${props => props.theme.colors.primary};
	}
`;
export const MobileIcon = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: flex;
		font-size: ${props => props.theme.textSize.lg};
		cursor: pointer;
		align-items: center;
	}
`;
export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	@media (max-width: 768px) {
		display: none;
	}
`;
export const NavBtnLink = styled(RouterLink)`
	border-radius: 50px;
	background: ${props => props.theme.colors.primary};
	white-space: nowrap;
	padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
	border: none;
	color: ${props => props.theme.colors.secondary};
	cursor: pointer;
	font-size: ${({ theme }) => theme.textSize.sm};
	transition: all 0.2s ease-in-out;
	&:hover {
		background-color: ${props => props.theme.colors.white};
	}
`;
