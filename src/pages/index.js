import React, { useState } from 'react';
import Hero from '../components/hero/Hero';
import Section from '../components/section/Section';
import { sections } from '../components/data/Data';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Services from '../components/services/Services';
import Footer from '../components/footer/Footer';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';
const Home = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const toggleSidebar = state => {
		setIsSidebarOpen(state || !isSidebarOpen);
	};
	return (
		<>
			<Navbar openSidebar={() => toggleSidebar(true)} />
			<Sidebar
				isOpen={isSidebarOpen}
				closeSidebar={() => toggleSidebar(false)}
			/>
			<Hero />
			{sections.map(sectionData => (
				<Section key={sectionData.id} {...sectionData} />
			))}
			<Services />
			<Footer />
			<ScrollToTop />
		</>
	);
};

export default Home;
