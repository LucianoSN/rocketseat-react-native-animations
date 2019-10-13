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

const User = () => {
	return (
		<Container>
			<UserContainer>
				<Thumbnail />

				<InfoContainer>
					<BioContainer>
						<Name>John</Name>
						<Description>The king</Description>
					</BioContainer>
					<LikesContainer>
						<Icon name="heart" size={12} color="#FFF" />
						<Likes>5</Likes>
					</LikesContainer>
				</InfoContainer>
			</UserContainer>
		</Container>
	);
};

export default User;
