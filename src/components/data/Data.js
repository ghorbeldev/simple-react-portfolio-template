export const sections = [
	{
		id: 'about',
		topline: 'Premium Bank',
		heading: 'Unlimited Transaction With zero fees',
		description:
			'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any feesGet access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
		img: {
			url: process.env.PUBLIC_URL + 'assets/images/pic-1.svg',
			alt: 'Draw',
			start: false,
		},
		button: {
			label: 'Get Started',
			primary: true,
		},
		lightBackground: false,
		darkText: false,
	},
	{
		id: 'discover',
		topline: 'Unlimited Access',
		heading: 'Unlimited Transaction With zero fees',
		description: '',
		img: {
			url: process.env.PUBLIC_URL + 'assets/images/pic-2.svg',
			alt: 'Draw',
			start: true,
		},
		button: {
			label: 'Learn More',
			primary: false,
		},
		lightBackground: true,
		darkText: true,
	},
	{
		id: 'signup',
		topline: 'Premium Bank',
		heading: 'Join Our Team',
		description:
			"Get everything set up and ready in under 10 minutes. need to do is add your information and you're ready to go.",
		img: {
			url: process.env.PUBLIC_URL + 'assets/images/pic-5.svg',
			alt: 'Draw',
			start: false,
		},
		button: {
			label: 'Start Now',
			primary: true,
		},
		lightBackground: false,
		darkText: false,
	},
];
