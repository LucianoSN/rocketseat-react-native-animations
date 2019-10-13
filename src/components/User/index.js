import React from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
	Container,
	BioContainer,
	Description,
	InfoContainer,
	Name,
	Thumbnail,
	UserContainer,
	LikesContainer,
	Likes,
} from './styles';

const User = ({ user }) => {
	return (
		<Container onPress={null}>
			<UserContainer>
				<Thumbnail source={{ uri: user.thumbnail }} />

				<InfoContainer bgColor={user.color}>
					<BioContainer>
						<Name>{user.name.toUpperCase()}</Name>
						<Description>{user.description}</Description>
					</BioContainer>
					<LikesContainer>
						<Icon name="heart" size={12} color="#FFF" />
						<Likes>{user.likes}</Likes>
					</LikesContainer>
				</InfoContainer>
			</UserContainer>
		</Container>
	);
};

export default User;
