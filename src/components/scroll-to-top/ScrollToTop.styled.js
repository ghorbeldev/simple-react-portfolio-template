import styled from 'styled-components';

export const ArrowContainer = styled.div`
	position: fixed;
	bottom: 20px;
	right: 20px;
	opacity: ${({ show }) => +show};
	transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(20px)')};
	z-index: 4;
	cursor: pointer;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.dark};
	transition: all 0.2s ease-in-out;
	& > * {
		transition: all 0.2s ease-in-out;
	}
	&:hover {
		transform: scale(1.05);
	}
`;
