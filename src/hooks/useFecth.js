import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
            .then((result) => {
                setData(result.data)
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                setError(err)
                console.log(err);
            })
    }, [url])

    return [data, loading, error]
}

export default useFetch

