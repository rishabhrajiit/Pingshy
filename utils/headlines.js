export const getHeadlines = async(category) => {
    try {
        const result = await axios.get(`https://gnews.io/api/v4/top-headlines?category=${encodeURIComponent(category)}&apikey=${process.env.REACT_GNEWS_API_KEY}`);
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
}