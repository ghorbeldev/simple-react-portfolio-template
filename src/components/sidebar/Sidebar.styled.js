import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
export const SidebarContainer = styled.aside`
	position: fixed;
	left: 0;
	z-index: 999;
	width: 100vw;
	height: 100vh;
	background-color: #0d0d0d;
	display: grid;
	align-items: center;
	transition: all 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	top: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
`;
export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 2.5rem;
	font-size: ${props => props.theme.textSize.lg};
	cursor: pointer;
	outline: none;
`;
export const CloseIcon = styled(FaTimes)`
	color: white;
`;
export const SidebarWrapper = styled.div`
	color: white;
`;
export const SidebarMenu = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 5rem);
	text-align: center;
	@media (max-width: 480px) {
		grid-template-rows: repeat(6, 3.75rem);
	}
`;
export const SidebarLink = styled(ScrollLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: ${props => props.theme.textSize.md};
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	&:hover {
		color: ${props => props.theme.colors.primary};
	}
`;
export const SidebarBtnWrap = styled.div`
	display: flex;
	justify-content: center;
`;
export const SidebarRoute = styled(RouterLink)`
	border-radius: 50px;
	background: ${props => props.theme.colors.primary};
	white-space: nowrap;
	padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
	border: none;
	color: ${props => props.theme.colors.secondary};
	cursor: pointer;
	font-size: ${props => props.theme.textSize.md};
	transition: all 0.2s ease-in-out;
	&:hover {
		background-color: ${props => props.theme.colors.white};
	}
`;
