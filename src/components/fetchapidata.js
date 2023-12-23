import { useState, useEffect } from 'react';

const useFetchData = (apiurl) => {
    const [show, setShow] = useState([]);

    useEffect(() => {
        async function fetchDataAsync() {
            try {
                const response = await fetch(apiurl);
                const data = await response.json();
                setShow(data);
                console.log(data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchDataAsync();
    }, [apiurl]);

    return show;
};

export default useFetchData;
