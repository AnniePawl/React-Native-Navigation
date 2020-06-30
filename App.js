import * as React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { cats, dogs } from './breeds.js';
// import myStyles from './styles';

function Item({ title, data }) {
	const characteristics = Object.keys(data);
	const char_components = characteristics.map((str) => {
		return (
			<Text>
				{str}:{data[str]}
			</Text>
		);
	});
	return (
		<View style={styles.item}>
			<Text style={styles.title}>{title}</Text>
			{char_components}
		</View>
	);
}

function CatScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			{/* CATS */}
			<FlatList
				style={styles.flatlist}
				data={cats}
				renderItem={({ item, index }) => {
					return <Item title={`${item.breed} `} data={item} />;
				}}
				// keyExtractor
				keyExtractor={(item) => item.breed}
			/>
		</View>
	);
}

function DogScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<FlatList
				style={styles.flatlist}
				data={dogs}
				renderItem={({ item, index }) => {
					return <Item title={`${item.breed} `} data={item} />;
				}}
				// keyExtractor
				keyExtractor={(item) => item.breed}
			/>
		</View>
	);
}

// function FunScreen() {
// 	return (
// 		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// 			<Text>Fun!</Text>
// 		</View>
// 	);
// }

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Cat') {
							iconName = focused ? 'cat' : 'cat';
						} else if (route.name === 'Dog') {
							iconName = focused ? 'dog' : 'dog';
						}

						// You can return any component that you like here!
						return <Icon name={iconName} size={size} color={color} />;
					}
				})}
				tabBarOptions={{
					activeTintColor: 'salmon',
					inactiveTintColor: 'gray'
				}}
			>
				<Tab.Screen name="Cat" component={CatScreen} />
				<Tab.Screen name="Dog" component={DogScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'orange',
		alignItems: 'center',
		justifyContent: 'center'
	},
	heading_container: {
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white'
	},
	heading_text: {
		fontSize: 15
	},
	scrollView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	item: {
		backgroundColor: 'steelblue',
		width: '100%',
		padding: 15,
		borderBottomColor: 'white',
		borderBottomWidth: 2
	},
	title: {
		fontSize: 24,
		color: 'white'
	},
	flatlist: {
		flex: 1,
		width: '100%'
	},
	safearea: {
		flex: 1,
		width: '100%'
	},
	buttonContainer: {
		margin: 10
	}
});
