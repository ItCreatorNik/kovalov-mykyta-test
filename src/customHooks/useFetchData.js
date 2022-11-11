import { useState, useEffect, useCallback } from "react";

export const useFetchData = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const getJobs = useCallback(() => {
        setIsLoading(true);

        fetch(url)
            .then((response) => response.json())
            .then((jobs) => {
                setData(jobs);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(true);
                console.error(error);
            });

    }, [url])

    useEffect(() => {
        getJobs()
    }, [url, getJobs])

    return { data, isLoading }


}
