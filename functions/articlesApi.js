import axios from "axios";

export default getArticle = async (queryParameters) => {
    console.log(queryParameters.toString());
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=5dc8297d808e4575a0ca807c005de5ed&'
            + queryParameters.toString()
            )
        return(response.data.articles);
    }
    catch (e) {
        console.log(e);
        throw new Error("search failed")
    }

}