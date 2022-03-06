import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaInstagram,
	FaYoutube,
} from 'react-icons/fa';
import {
	FooterContainer,
	FooterWrapper,
	FooterLinksWrapper,
	FooterLinksTitle,
	FooterLink,
	FooterLinksList,
	Social,
	Logo,
	Rights,
	SocialLinks,
	SocialLink,
} from './Footer.styled';
const Footer = () => {
	return (
		<FooterWrapper>
			<FooterContainer>
				<FooterLinksWrapper>
					<FooterLinksTitle>About Us</FooterLinksTitle>
					<FooterLinksList>
						<FooterLink to='/signin'>How It Works</FooterLink>
						<FooterLink to='/signin'>Testimonials</FooterLink>
						<FooterLink to='/signin'>Careers</FooterLink>
						<FooterLink to='/signin'>Investors</FooterLink>
						<FooterLink to='/signin'>Terms of Service</FooterLink>
					</FooterLinksList>
				</FooterLinksWrapper>
				<FooterLinksWrapper>
					<FooterLinksTitle>Videos</FooterLinksTitle>
					<FooterLinksList>
						<FooterLink to='/signin'>Submit Video</FooterLink>
						<FooterLink to='/signin'>Ambassadors</FooterLink>
						<FooterLink to='/signin'>Agency</FooterLink>
						<FooterLink to='/signin'>Influencer</FooterLink>
					</FooterLinksList>
				</FooterLinksWrapper>
				<FooterLinksWrapper>
					<FooterLinksTitle>Contact Us</FooterLinksTitle>
					<FooterLinksList>
						<FooterLink to='/signin'>Contact</FooterLink>
						<FooterLink to='/signin'>Support</FooterLink>
						<FooterLink to='/signin'>Destination</FooterLink>
						<FooterLink to='/signin'>Sponsorships</FooterLink>
					</FooterLinksList>
				</FooterLinksWrapper>
				<FooterLinksWrapper>
					<FooterLinksTitle>Social Media</FooterLinksTitle>
					<FooterLinksList>
						<FooterLink to='/signin'>Instagram</FooterLink>
						<FooterLink to='/signin'>Facebook</FooterLink>
						<FooterLink to='/signin'>Youtube</FooterLink>
						<FooterLink to='/signin'>Twitter</FooterLink>
					</FooterLinksList>
				</FooterLinksWrapper>
			</FooterContainer>
			<Social>
				<Logo to='/' onClick={() => scroll.scrollToTop()}>
					Awesome
				</Logo>
				<Rights>
					Awesome &copy; {new Date().getFullYear()} All rights reserved
				</Rights>
				<SocialLinks>
					<SocialLink href='/' target='_blank'>
						<FaFacebook />
					</SocialLink>
					<SocialLink href='/' target='_blank'>
						<FaTwitter />
					</SocialLink>
					<SocialLink href='/' target='_blank'>
						<FaLinkedin />
					</SocialLink>
					<SocialLink href='/' target='_blank'>
						<FaInstagram />
					</SocialLink>
					<SocialLink href='/' target='_blank'>
						<FaYoutube />
					</SocialLink>
				</SocialLinks>
			</Social>
		</FooterWrapper>
	);
};

export default Footer;
