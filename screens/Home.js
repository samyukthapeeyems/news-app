import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Article from "../components/Article";
import getArticles from "../functions/articlesApi"


const Home = ({ navigation }) => {

    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState("all");

    async function getNews(params) {
        let result = await getArticles(params);
        setArticles(result);
    }


    useEffect(() => {
        let params = new URLSearchParams();
        params.append("pageSize", "50");
        if(category != "all")
            params.append("category", category);
        getNews(params);
    }, [category])

    const categories = ["All", "Technology", "Business", "Entertainment", "Health", "Science", "Sports"];

    return (
        <>
            <View style={{ height: "6%" }}>
                <ScrollView
                    horizontal={true} style={styles.category}>
                    {
                        categories.map(category => <TouchableOpacity key={category} style={styles.button} onPress={() => setCategory(category.toLowerCase())}>
                            <Text style={styles.CategoryText}>{category}</Text>
                        </TouchableOpacity>
                        )
                    }
                </ScrollView>
            </View>


            <View style={styles.container}>

                <FlatList
                    data={articles}
                    renderItem={({ item }) => {
                        return (<Article
                            navigation={navigation}
                            urlToImage={item.urlToImage}
                            title={item.title}
                            description={item.description}
                            author={item.author}
                            publishedAt={item.publishedAt}
                            sourceName={item.source.name}
                        />)
                    }}
                    keyExtractor={(item) => item.title}
                />

            </View>
        </>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    category: {
        // backgroundColor: "red",
        margin: 0
    },
    button : {
        flex: 1,
        marginHorizontal: 15,
        alignItems: "center",
        justifyContent: "space-around"
    } ,
    CategoryText: {
        fontSize: 18,
        color: "#00115e",
        fontWeight: "bold"
    }
})

export default Home;