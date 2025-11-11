import axios from "axios";
export const getHeadlines = async(category) => {
    try {
        const result = await axios.get(`https://gnews.io/api/v4/top-headlines?category=${encodeURIComponent(category)}&country=in&lang=en&apikey=${import.meta.env.VITE_GNEWS_API_KEY}`);
        console.log(result);
        return result?.data?.articles;
    } catch (error) {
        console.log(error);
        
    }
}