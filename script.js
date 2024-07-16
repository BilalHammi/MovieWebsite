let url = 'https://imdb8.p.rapidapi.com/auto-complete?q=star%20wars%20';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '4ceeb87f83mshfbe8769ade08178p1691f9jsn0d2c6aa0608e',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.json()
        .then(data => {
            const list = data.d;
            list.map((item) => {
                console.log(item);
            })
        })

} catch (error) {
    console.error(error);
}