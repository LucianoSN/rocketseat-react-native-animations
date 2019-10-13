import styled from 'styled-components';

export const Container = styled.TouchableWithoutFeedback``;

export const UserContainer = styled.View`
	flex-direction: column;
	border-radius: 10px;
	margin: 10px 15px 0 15px;
`;

export const Thumbnail = styled.Image`
	width: 100%;
	height: 150px;
`;

export const InfoContainer = styled.View`
	flex-direction: row;
	background-color: ${props => props.bgColor || '#57bcbc'};
	align-items: center;
	padding: 15px 8px;
`;

export const BioContainer = styled.View`
	flex: 1;
`;

export const Name = styled.Text`
	color: #fff;
	font-weight: 900;
	font-size: 10px;
`;

export const Description = styled.Text`
	color: #fff;
	font-size: 13px;
	margin-top: 2px;
`;

export const LikesContainer = styled.View`
	flex-direction: row;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.1);
	padding: 3px 8px;
	border-radius: 20px;
`;

export const Likes = styled.Text`
	color: #fff;
	font-size: 12px;
	margin-left: 5px;
`;
