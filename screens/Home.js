import React, { useEffect, useState }  from "react";
import axios from "axios";
import { View, StyleSheet, FlatList } from 'react-native';
import { get } from "react-native/Libraries/Utilities/PixelRatio";
import Article from "../components/Article";


const Home = ({navigation}) => {

    const [articles, setArticles] = useState([]);
    const getNews = async () => {
        try{
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=75cd8903b64846129096b0138166a05e', 
            {params:{
                pageSize: 50
            }})
            setArticles(response.data.articles);
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getNews();
    }, [])

    return (
        <View style={styles.container}>
            <FlatList 
                data={articles}
                renderItem = {({item}) => {
                    return(<Article
                    navigation = {navigation}
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
        backgroundColor: '#f5f5f5'
    }
})

export default Home;