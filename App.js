import { useState, setState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const App = () => {
	const goalInputChange = (enteredText) => {
		setInputValue(enteredText);
	};
	const addGoalInputClick = () => {
		setList([...list, inputValue]);
		setInputValue("");
	};
	const [inputValue, setInputValue] = useState("");
	const [list, setList] = useState([], setList);
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					styles={styles.textInput}
					placeholder="Your course goal..."
					onChangeText={goalInputChange}
					value={inputValue}
				/>
				<Button title="Add Goal" onPress={addGoalInputClick} />
			</View>
			<View style={styles.goalsContainer}>
				{list.map((item) => (
					<Text key={item}>{item}</Text>
				))}
			</View>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		padding: 50,
	},
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBlockColor: "#cccccc",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "70%",
		marginRight: 8,
		padding: 8,
	},
	goalsContainer: {
		flex: 5,
	},
});
