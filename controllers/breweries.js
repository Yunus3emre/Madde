

const breweries = async (req, res) => {
    try {
        let apiUrl = 'https://api.openbrewerydb.org/breweries';
        const queryParam = req.query.query;

        if (queryParam) {
            apiUrl = `https://api.openbrewerydb.org/breweries/search?query=` + queryParam;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching data' });
    }
};

module.exports = { breweries };
