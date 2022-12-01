import {View, TextInput, StyleSheet} from "react-native";
import React from "react";


const SearchBar = (props) => {
    return(
        <View style={styles.container}>
            <TextInput placeholder="Search" 
            style = {styles.input}
            value = {props.searchText}
            onChangeText = {(text) => props.setSearchText(text)}
            // onSubmitEditing = {props.onSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    input: {
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        color: "black",
        borderWidth: 0.5,
        borderColor: "#dbdbdb"
    }
})

export default SearchBar;