import React from 'react';
import {
	Container,
	FormWrapper,
	Form,
	Submit,
	TextField,
	Icon,
	FormContent,
	FormTitle,
	Label,
	Text,
} from './Signin.styled';

const Signin = () => {
	return (
		<Container>
			<FormWrapper>
				<Icon to='/'>Awesome</Icon>
				<FormContent>
					<Form>
						<FormTitle>Sign in to your account</FormTitle>
						<Label htmlFor='email'>Email</Label>
						<TextField type='email' name='email' required />
						<Label htmlFor='password'>Password</Label>
						<TextField type='password' name='password' required />
						<Submit type='submit'>Continue</Submit>
						<Text>Forgot Password</Text>
					</Form>
				</FormContent>
			</FormWrapper>
		</Container>
	);
};

export default Signin;
