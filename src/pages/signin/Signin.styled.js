import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
	min-height: 692px;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	overflow: hidden;
	display: grid;
	place-items: center;
	background-image: linear-gradient(
		108deg,
		rgb(1, 147, 86) 0%,
		rgb(10, 201, 122) 100%
	);
`;
export const FormWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (max-width: 480px) {
		height: 80%;
	}
`;
export const Form = styled.form`
	background-color: ${({ theme }) => theme.colors.dark};
	max-width: 400px;
	width: 100%;
	z-index: 1;
	display: grid;
	margin: 0 auto;
	padding: 5rem 2rem;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
	@media (max-width: 400px) {
		padding: 2rem;
	}
`;
export const FormContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (max-width: 480px) {
		padding: 10px;
	}
`;
export const FormTitle = styled.h1`
	font-size: ${({ theme }) => theme.colors.md};
	margin-bottom: 2.5rem;
	color: #fff;
	font-weight: 400;
	text-align: center;
`;
export const TextField = styled.input`
	padding: 1rem;
	margin-bottom: 2rem;
	border: none;
	border-radius: 4px;
`;
export const Submit = styled.button`
	background-color: ${({ theme }) => theme.colors.primary};
	font-size: 1.25rem;
	padding: 16px 0;
	border: 0;
	border-radius: 4px;
	color: white;
	cursor: pointer;
	transition: 0.2s ease-in-out;
	&:hover {
		color: ${({ theme }) => theme.colors.secondary};
		background-color: #f1f1f1;
	}
`;
export const Label = styled.label`
	margin-bottom: ${({ theme }) => theme.spacing.xs};
	font-size: 0.875rem;
`;
export const Icon = styled(Link)`
	margin-left: 2rem;
	margin-top: 2rem;
	color: #fff;
	font-weight: 700;
	font-size: 2rem;
	@media (max-width: 480px) {
		margin-left: 1rem;
		margin-top: 0.5rem;
	}
`;
export const Text = styled.div`
	text-align: center;
	margin-top: 1.5rem;
	color: white;
	font-size: 0.875rem;
`;
