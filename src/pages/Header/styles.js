import styled from 'styled-components';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
	flex: 1;
`;

export const ImageContainer = styled.View`
	height: 300px;
	margin: 20px;
`;

export const Images = styled.Image`
	flex: 1;
	border-radius: 10px;
	width: 100%;
`;

export const HeaderView = styled(Animated.View)`
	position: absolute;
	background-color: #333;
	left: 0;
	right: 0;
	top: 0;
	height: ${props => props.wHeight};
	z-index: 1000;
	elevation: 1000;

	justify-content: center;
	align-items: center;
`;

export const Text = styled.Text`
	color: #fff;
	padding-top: 45px;
	font-size: 16px;
	font-weight: 700;
`;
