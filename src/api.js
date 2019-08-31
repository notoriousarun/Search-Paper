const BASE_URL = 'https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=';

const handleErrors = (response) => {
    if(!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};


const fetchData = (query, fromDate, toDate, pageSize) => {
    return (
        fetch(`${BASE_URL 
              }'${ 
              query 
              }'` +
              ` AND ` +
              `PUB_YEAR:` +
              `[` +
              `'${ 
              fromDate 
              }'` +
              `+TO+` +
              `'${ 
              toDate 
              }'` +
              `]` +
              `  sort_cited:y&format=json` +
              `&pageSize=${ 
              pageSize 
              }&resulttype=lite`
             )
            .then(handleErrors)
            .then(response => response.json())
            .catch(error => console.log(error))
    );
};

export default fetchData;
