import React, { useEffect, useState }  from "react";
import axios from "axios";
import { View, StyleSheet, FlatList } from 'react-native';
import { get } from "react-native/Libraries/Utilities/PixelRatio";
import Article from "../components/Article";


const Sports = () => {

    const [articles, setArticles] = useState([]);
    const getSportsNews = async () => {
        try{
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=75cd8903b64846129096b0138166a05e', 
            {params:{
                category: "sports",
                pageSize: 15
            }})
            setArticles(response.data.articles);
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getSportsNews();
    }, [])

    return (
        <View style={styles.container}>
            <FlatList 
                data={articles}
                renderItem = {({item}) => {
                    return(<Article
                    urlToImage = {item.urlToImage}
                    title = {item.title}
                    description = {item.description}
                    author = {item.author}
                    publishedAt = {item.publishedAt}
                    sourceName = {item.source.name}
                    />)
                }}
                keyExtractor = {(item) => item.title}
            />
            
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfa'
    }
})

export default Sports;