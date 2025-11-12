import axios from "axios";
export const getHeadlines = async(category) => {
    try {
        const result = await axios.get(`https://gnews-proxy.rishabh-raj-cd-phy21.workers.dev?category=${category}`);
        console.log(result);
        return result?.data?.articles;
    } catch (error) {
        console.log(error);
        
    }
}