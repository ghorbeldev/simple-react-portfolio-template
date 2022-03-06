import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
	Header,
	Logo,
	MobileIcon,
	NavContainer,
	NavMenu,
	NavItem,
	NavLink,
	NavBtn,
	NavBtnLink,
} from './Navbar.styled';

const Navbar = ({ openSidebar }) => {
	const headerRef = useRef(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const handleScroll = () => {
		if (
			document.body.scrollTop > 100 ||
			document.documentElement.scrollTop > 100
		) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Header scrolled={isScrolled}>
			<NavContainer ref={headerRef}>
				<Logo to='/' onClick={() => scroll.scrollToTop()}>
					Awesome
				</Logo>
				<MobileIcon onClick={openSidebar}>
					<FaBars />
				</MobileIcon>
				<NavMenu>
					<NavItem>
						<NavLink
							to='about'
							smooth={true}
							duration={500}
							spy={true}
							offset={-80}
						>
							About
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							to='discover'
							smooth={true}
							duration={500}
							spy={true}
							offset={-80}
						>
							Discover
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							to='services'
							smooth={true}
							duration={500}
							spy={true}
							offset={-80}
						>
							Services
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							to='signup'
							smooth={true}
							duration={500}
							spy={true}
							offset={-80}
						>
							Sign Up
						</NavLink>
					</NavItem>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='signin'>Sign In</NavBtnLink>
				</NavBtn>
			</NavContainer>
		</Header>
	);
};

export default Navbar;
