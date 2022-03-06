import React from 'react';
import {
	CloseIcon,
	Icon,
	SidebarContainer,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SidebarBtnWrap,
	SidebarRoute,
} from './Sidebar.styled';
const Sidebar = ({ isOpen, closeSidebar }) => {
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon onClick={closeSidebar}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink
						to='about'
						onClick={closeSidebar}
						smooth={true}
						duration={500}
						spy={true}
						offset={-80}
					>
						About
					</SidebarLink>
					<SidebarLink
						to='discover'
						onClick={closeSidebar}
						smooth={true}
						duration={500}
						spy={true}
						offset={-80}
					>
						Discover
					</SidebarLink>
					<SidebarLink
						to='services'
						onClick={closeSidebar}
						smooth={true}
						duration={500}
						spy={true}
						offset={-80}
					>
						Services
					</SidebarLink>
					<SidebarLink
						to='signup'
						onClick={closeSidebar}
						smooth={true}
						duration={500}
						spy={true}
						offset={-80}
					>
						Sign Up
					</SidebarLink>
				</SidebarMenu>
				<SidebarBtnWrap>
					<SidebarRoute to='/signin'>Sign in</SidebarRoute>
				</SidebarBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
