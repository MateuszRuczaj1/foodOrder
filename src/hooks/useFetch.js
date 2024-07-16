import { useCallback, useEffect, useState } from "react"

async function sendRequest(url, config) {
    const response = await fetch(url, config)
    const resData = await response.json()
    if (!response.ok) {
        throw new Error(resData.message || 'Failed to send request')
    }
    return resData
}
export default function useFetch(url, config, initialData) {
    const [data, setData] = useState(initialData)
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const sendReq = useCallback(async function sendReq() {
        setIsLoading(true)
        try {
            const resData = await sendRequest(url, config)
            setData(resData)
        } catch (error) {
            setError(error.message || 'Something went wrong!')
        }
        setIsLoading(false)
    }, [url, config])
    useEffect(() => {
        if (config && config.method === "GET") {
            sendReq()
        }
    }, [sendReq])
    return {
        data,
        error,
        isLoading,
        sendReq
    }
}