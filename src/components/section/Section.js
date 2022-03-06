import React from 'react';
import { Button } from '../globals';
import {
	SectionContainer,
	SectionWrapper,
	GridRow,
	Column,
	TextWrapper,
	Heading,
	TopLine,
	Description,
	BtnWrap,
	ImageWrapper,
	Image,
} from './Section.styled';
const Section = ({
	id,
	topline,
	heading,
	description,
	img,
	button,
	darkText,
	lightBackground,
}) => {
	return (
		<SectionWrapper id={id} lightBackground={lightBackground}>
			<SectionContainer>
				<GridRow imgStart={img.start}>
					<Column gridArea='content'>
						<TextWrapper>
							<TopLine>{topline}</TopLine>
							<Heading darkText={darkText}>{heading}</Heading>
							<Description darkText={darkText}>{description}</Description>
							<BtnWrap>
								<Button
									color={button.primary ? 'primary' : ''}
									to='home'
									smooth={true}
									duration={500}
									spy={true}
									offset={-80}
								>
									{button.label}
								</Button>
							</BtnWrap>
						</TextWrapper>
					</Column>
					<Column gridArea='image'>
						<ImageWrapper>
							<Image src={img.url} alt={img.alt} />
						</ImageWrapper>
					</Column>
				</GridRow>
			</SectionContainer>
		</SectionWrapper>
	);
};

export default Section;
