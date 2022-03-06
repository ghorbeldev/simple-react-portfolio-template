import { Link as ScrollLink } from 'react-scroll';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', Arial, sans-serif;
  }
	*::selection{
		/* background-color: ${({ theme }) => theme.colors.white}; */
		/* color:  #f8f8f8; */
	}
  body {
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    color: unset;
  }
  button,input{
    outline:0;
  }
  img {
    max-width: 100%;
  }
  ul{
	  list-style-type: none;
  }
	@keyframes move-x{
		0%{
			transform: translateX(0);
		}
		100%{
			transform: translateX(10px);
		}
	}
`;
export const Container = styled.div`
	width: 100%;
	padding-right: 0.75rem;
	padding-left: 0.75rem;
	margin-right: auto;
	margin-left: auto;

	@media (min-width: 576px) {
		max-width: 540px;
	}
	@media (min-width: 768px) {
		max-width: 720px;
	}
	@media (min-width: 992px) {
		max-width: 960px;
	}
	@media (min-width: 1200px) {
		max-width: 1140px;
	}
	@media (min-width: 1400px) {
		max-width: 1320px;
	}
	@keyframes flashing {
		0%,
		40% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			width: 200%;
			height: 200%;
		}
	}
`;
export const Button = styled(ScrollLink)`
	border-radius: 50px;
	background: ${({ color, theme }) =>
		color === 'primary' ? theme.colors.primary : theme.colors.secondary};
	white-space: nowrap;
	padding: ${({ large, theme }) =>
		large
			? `${theme.spacing.sm} ${theme.spacing.xl}`
			: `${theme.spacing.sm} ${theme.spacing.lg}`};
	color: ${({ color, theme }) =>
		color === 'primary' ? theme.colors.dark : theme.colors.white};
	font-size: ${({ fontLarge, theme }) =>
		fontLarge ? theme.textSize.md : theme.textSize.sm};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.2s ease-in-out;
	&:hover {
		background: ${({ color, theme }) =>
			color === 'primary' ? theme.colors.white : theme.colors.primary};
	}
`;
