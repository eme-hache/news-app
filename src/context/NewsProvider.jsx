import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const NewsContext = createContext()

const NewsProvider = ({ children }) => {
    const [category, setCategory] = useState('general')
    const [totalResults, setTotalResults] = useState(0)
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)

    const getNews = async newCategory => {
        let url = ''
        
        if (newCategory) {
            url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
            setPage(1)
        }
        else {
            url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&page=${page}&apiKey=${import.meta.env.VITE_API_KEY}`
        }

        const { data } = await axios.get(url)

        console.log("jijij")

        setTotalResults(data.totalResults)
        setNews(data.articles)
    }

    useEffect(() => {
        getNews(true)
    }, [category])

    useEffect(() => {
        getNews()
    }, [page])

    const handleChangePage = (evt, value) => {
        setPage(value)
    }

    const handleChange = evt => {
        setCategory(evt.target.value)
    }

    return (
        <NewsContext.Provider 
            value={{
                page,
                news,
                category,
                totalResults,
                handleChange,
                handleChangePage
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}

export { NewsProvider }

export default NewsContext

