import React, { useState } from 'react';
import { StatusBar, Platform } from 'react-native';

import Animated from 'react-native-reanimated';

import { HeaderView, Container, ImageContainer, Images, Text } from './styles';

const images = [
	{ id: 1, uri: require('../../assets/image025.jpg') },
	{ id: 2, uri: require('../../assets/image026.jpg') },
	{ id: 3, uri: require('../../assets/image027.jpg') },
	{ id: 4, uri: require('../../assets/image028.jpg') },
	{ id: 5, uri: require('../../assets/image029.jpg') },
	{ id: 6, uri: require('../../assets/image020.jpg') },
];

const HEADER_HEIGHT =
	Platform.OS === 'ios' ? 115 : 70 + StatusBar.currentHeight;

const Header = () => {
	const [scrollY, setScrollY] = useState(new Animated.Value(0));

	const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);

	const headerY = Animated.interpolate(diffClampScrollY, {
		inputRange: [0, HEADER_HEIGHT],
		outputRange: [0, -HEADER_HEIGHT],
	});

	return (
		<Container>
			<StatusBar barStyle="light-content" />
			<HeaderView
				wHeight={HEADER_HEIGHT}
				style={{
					transform: [{ translateY: headerY }],
				}}
			>
				<Text>Animated Header</Text>
			</HeaderView>

			<Animated.ScrollView
				bounces={false}
				scrollEventThrottle={16}
				onScroll={Animated.event([
					{
						nativeEvent: { contentOffset: { y: scrollY } },
					},
				])}
				style={{ paddingTop: HEADER_HEIGHT }}
			>
				{images.map(item => (
					<ImageContainer key={item.id}>
						<Images source={item.uri} />
					</ImageContainer>
				))}
			</Animated.ScrollView>
		</Container>
	);
};

export default Header;
