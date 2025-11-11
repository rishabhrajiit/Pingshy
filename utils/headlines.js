import axios from "axios";
export const getHeadlines = async(category) => {
    try {
        const result = await axios.get(`https://gnews.io/api/v4/top-headlines?category=${encodeURIComponent(category)}&apikey=${import.meta.env.VITE_GNEWS_API_KEY}`);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        
    }
}