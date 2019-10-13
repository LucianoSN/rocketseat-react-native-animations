import React, { useState } from 'react';
import { Dimensions, StatusBar, Animated } from 'react-native';

import User from './components/User';
import { users } from './data/users';

import { Container, Scroll, Header, HeaderImage, HeaderText } from './styles';

const { width } = Dimensions.get('window');

const Index = () => {
	const [userSelected, setUserSelected] = useState(null);
	const [userInfoVisible, setUserInfoVisible] = useState(false);

	let yOffset = new Animated.Value(0);
	const onScroll = Animated.event([
		{ nativeEvent: { contentOffset: { y: yOffset } } },
	]);

	const selectUser = user => {
		setUserSelected(user);
		setUserInfoVisible(true);
	};

	const renderDetail = () => (
		<User
			user={userSelected}
			onPress={() => {
				setUserSelected(null);
				setUserInfoVisible(false);
			}}
		/>
	);

	const renderList = () => (
		<Container>
			<Scroll onScroll={onScroll} scrollEventThrottle={16}>
				{users.map(user => (
					<User
						key={user.id}
						user={user}
						onPress={() => selectUser(user)}
					/>
				))}
			</Scroll>
		</Container>
	);

	return (
		<Container>
			<StatusBar barStyle="light-content" />

			<Header
				styles={[
					{
						height: yOffset.interpolate({
							inputRange: [0, 140],
							outputRange: [200, 70],
						}),
					},
				]}
			>
				<HeaderImage
					source={
						userSelected ? { uri: userSelected.thumbnail } : null
					}
				/>

				<HeaderText>
					{userSelected ? userSelected.name : 'GoNative'}
				</HeaderText>
			</Header>

			{userInfoVisible ? renderDetail() : renderList()}
		</Container>
	);
};

export default Index;
