import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const NewsContext = createContext();

export const useNewsContext = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
    const API_KEY = "d740a79c3e1348389fceb1884abb78ef";
    const BASE_URL = "https://newsapi.org/v2";

    const [articles, setArticles] = useState([]); // News data are articles here
    const [loading, setLoading] = useState(true); // For loading
    const [error, setError] = useState(null);    // For errors
    const [category, setCategory] =  useState("")
    const [query, setQuery] = useState("")

    const fetchNews = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${BASE_URL}/top-headlines`, {
                params: {
                    apiKey: API_KEY,
                    country: "us",
                    category,
                    q: query
                },
            });
            console.log(response.data.articles);
            setArticles(response.data.articles);
        } catch (error) {
            setError("Couldn't fetch the news.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, [category,query]);

    const changeCategory = (newCategory) => {
        setCategory(newCategory)
    }

    return (
        <NewsContext.Provider value={{ articles, loading, error, fetchNews, category, changeCategory, setQuery }}>
            {children}
        </NewsContext.Provider>
    );
};