import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import Article from '../components/Article';
import getArticles from '../functions/articlesApi';

const Search = ({ navigation }) => {
    const [searchText, setSearchText] = useState("");
    const [articles, setArticles] = useState([]);

    useEffect( () => {
        async function handleArticleChange(){
            if(searchText == ""){
                setArticles([]);
            }
            else{
                let params = new URLSearchParams();
                params.append("q", searchText);
                let result = await getArticles(params);
                setArticles(result);
            }    
    }
    handleArticleChange();
        
    }, [searchText]);



    return (
        <View style={styles.container}>
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>
            {
                articles.length != 0? <FlatList
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
                /> : <Text style={styles.Text}>No results</Text>
            }
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Text: {
        marginBottom: "120%",
        fontSize: 24,
        textAlign: "center",
        color: "gray"
    }
    
})


export default Search;