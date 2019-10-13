import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
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

const User = ({ user, onPress }) => {
	const [opacity, setOpacity] = useState(new Animated.Value(0));
	const [offset, setOffSet] = useState(new Animated.ValueXY({ x: 0, y: 50 }));

	const AniOpacity = Animated.timing(opacity, {
		toValue: 1,
		duration: 500,
	});

	const AniBounce = Animated.spring(offset.y, {
		toValue: 0,
		speed: 5,
		bounciness: 20,
	});

	useEffect(() => {
		Animated.parallel([AniBounce, AniOpacity]).start();
	}, []);

	return (
		<Animated.View
			style={[
				{ transform: [...offset.getTranslateTransform()] },
				{ opacity: opacity },
			]}
		>
			<Container onPress={onPress}>
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
		</Animated.View>
	);
};

export default User;
