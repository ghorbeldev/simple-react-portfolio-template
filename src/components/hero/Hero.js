import React from 'react';
import { Button } from '../globals';
import {
	HeroBackground,
	HeroContainer,
	HeroVideo,
	HeroContent,
	HeroHeading,
	HeroParagraph,
	HeroBtnWrapper,
	ArrowForward,
} from './Hero.styled';
const Hero = () => {
	return (
		<div>
			<HeroContainer id='home'>
				<HeroBackground>
					<HeroVideo
						autoPlay
						muted
						loop
						src={process.env.PUBLIC_URL + '/assets/video-1.mp4'}
						type='video/mp4'
					/>
				</HeroBackground>
				<HeroContent>
					<HeroHeading>Our Awesome Title Here</HeroHeading>
					<HeroParagraph>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
						dignissimos rerum, aliquam laboriosam temporibus ad obcaecati
						eveniet deserunt ea explicabo
					</HeroParagraph>
					<HeroBtnWrapper>
						<Button color='primary' to='signup'>
							Sign Up Now <ArrowForward />
						</Button>
					</HeroBtnWrapper>
				</HeroContent>
			</HeroContainer>
		</div>
	);
};

export default Hero;
