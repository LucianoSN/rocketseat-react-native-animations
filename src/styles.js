import styled from 'styled-components';
import { Platform, Animated } from 'react-native';

export const Container = styled.View`
	flex: 1;
`;

export const Scroll = styled.ScrollView``;

export const View = styled.View``;

export const Header = styled(Animated.View)`
	padding-top: ${Platform.OS === 'ios' ? 40 : 20};
	padding-left: 15px;
	padding-right: 15px;
	background-color: #2e93e5;
`;

export const HeaderImage = styled.Image`
	...StyleSheet.absoluteFillObject;
`;

export const HeaderText = styled.Text`
	font-size: 24px;
	font-weight: 900;
	color: #fff;
	background-color: transparent;
	position: absolute;
	left: 15px;
	bottom: 20px;
`;
