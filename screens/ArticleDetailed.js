import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import moment from "moment";


const ArticleDetailed = ({ route }) => {
    let { title, description, sourceName, author, publishedAt, uri} = route.params;

    return (
        <>
        <Image
                style={styles.image}
                source={{
                    uri: uri
                }}
            />
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.data}>
                <Text><Text style={styles.value}>{author}</Text></Text>
                <Text style={styles.date}>{moment(publishedAt).format("Do MMM YY")}</Text>
            </View>
            <Text style={styles.source}>{sourceName}</Text>

        </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: "100%",
        width: "100%",
        alignSelf: "center",
        elevation: 2,
        shadowOpacity: 0.5,
        shadowColor: "#00115e",
        shadowOffset: {
            width: 5,
            height: 5
        },
        backgroundColor: "#f5f5f5",
        overflow: "hidden"
    },
    image: {
        height: "35%",
        width: "100%",
    },
    title: {
        fontSize: 28,
        fontWeight: "600"
    },
    description: {
        fontSize: 18,
        fontWeight: "400",
        marginTop: 20
    },
    data: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30
    },
    value: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#00115e"
    },
    date: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#00115e"
    },
    source: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: "500",
        color: "#00115e"
    }
})


export default ArticleDetailed;