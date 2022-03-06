import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { ArrowContainer } from './ScrollToTop.styled';
import { animateScroll } from 'react-scroll';
const ScrollToTop = () => {
	const [show, setShow] = useState(false);
	useEffect(() => {
		window.onscroll = () => {
			if (
				document.body.scrollTop > 200 ||
				document.documentElement.scrollTop > 200
			) {
				setShow(true);
			} else {
				setShow(false);
			}
		};
		return () => {};
	}, []);
	return (
		<ArrowContainer
			show={show ? true : false}
			onClick={() => animateScroll.scrollToTop()}
		>
			<FaArrowUp size={26} color='white' />
		</ArrowContainer>
	);
};

export default ScrollToTop;
