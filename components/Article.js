import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import moment from "moment";

const Article = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <TouchableOpacity style={{width: 100, height: 100}}> */}
                {/* image */}
            <Image
                style={styles.image}
                source={{
                    uri: props.urlToImage
                }}
            />
            {/* title */}
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('ArticleDetailed', {
                    uri: props.urlToImage,
                    title: props.title,
                    description: props.description,
                    author: props.author,
                    sourceName: props.sourceName
                })
            }}>
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>

                {/* Description */}
                <View style={styles.data}>
                <Text style={styles.date}>{moment(props.publishedAt).format("Do MMM YY")}</Text>
                </View>
                <Text style={{ marginTop: 5 }}><Text style={styles.source}>{props.sourceName}</Text></Text>

                {/* source */}
                
            </View>
            </TouchableOpacity>
            {/* </TouchableOpacity> */}
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: "92%",
        alignSelf: "center",
        borderRadius: 10,
        elevation: 2,
        shadowOpacity: 0.5,
        shadowColor: "#00115e",
        shadowOffset: {
            width: 5,
            height: 5
        },
        backgroundColor: "#fff",
        marginVertical: 6,
        overflow: "hidden"
    },
    textContainer:{
        width: "85%",
        padding: 15,
        flex: 1,
        justifyContent: "center",

    },
    image: {
        height: "auto",
        width: "30%",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    title: {
        fontSize: 16,
        fontWeight: "600"
    },
    data: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    },
    date: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#00115e"
    },
    source: {
        fontSize: 15,
        fontWeight: "500",
        color: "#00115e"
    }
})

export default Article;