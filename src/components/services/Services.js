import React from 'react';
import {
	Card,
	CardDescription,
	CardImage,
	CardImageWrapper,
	CardsWrapper,
	CardTitle,
	Heading,
	ServicesSection,
	ServicesContainer,
} from './Services.styled';
const services = [
	{
		title: 'Rduce Expenses',
		description: 'We help reduce yout fees and increase your overall revenue',
		img: {
			src: 'assets/images/pic-4.svg',
			alt: 'Service Number 1',
		},
	},
	{
		title: 'Virtual Offices',
		description: 'You can access our platform online anywhere in the world',
		img: {
			src: 'assets/images/pic-6.svg',
			alt: 'Service Number 2',
		},
	},
	{
		title: 'Premium Benefits',
		description: 'Unlock our special membership card that returns 5% cash back',
		img: {
			src: 'assets/images/pic-2.svg',
			alt: 'Service Number 1',
		},
	},
];
const Services = () => {
	return (
		<ServicesSection id='services'>
			<ServicesContainer>
				<Heading>Our Services</Heading>
				<CardsWrapper>
					{services.map((service, index) => (
						<Card key={index}>
							<CardImageWrapper>
								<CardImage
									src={process.env.PUBLIC_URL + service.img.src}
									alt={service.img.alt}
								/>
							</CardImageWrapper>
							<CardTitle>{service.title}</CardTitle>
							<CardDescription>{service.description}</CardDescription>
						</Card>
					))}
				</CardsWrapper>
			</ServicesContainer>
		</ServicesSection>
	);
};

export default Services;
