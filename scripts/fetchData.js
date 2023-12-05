export async function fetchData(url, options = { method: 'POST' }) {
    try {
        const fetchOptions = {
            ...options,
            headers: {
                "Content-Type": "application/json",
            },
        }
        const response = await fetch(url, fetchOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error with API call', error);
    }
}