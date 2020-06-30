const backgroundColor = 'orange';
import { StyleSheet } from 'react-native';

const myStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backgroundColor,
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

export { myStyles };
