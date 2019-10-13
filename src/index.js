import React, { useState } from 'react';
import { Dimensions, StatusBar } from 'react-native';

import User from './components/User';
import { users } from './data/users';

import {
	Container,
	Scroll,
	View,
	Header,
	HeaderImage,
	HeaderText,
} from './styles';

const { width } = Dimensions.get('window');

const Index = () => {
	const [userSelected, setUserSelected] = useState(null);
	const [userInfoVisible, setUserInfoVisible] = useState(false);

	const selectUser = user => {
		setUserSelected(user);
		setUserInfoVisible(true);
	};

	const renderDetail = () => (
		<View>
			<User user={userSelected} onPress={() => {}} />
		</View>
	);

	const renderList = () => (
		<Container>
			<Scroll>
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

			<Header>
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
