const iterator = (results) => {
    /* [key] => count */
    /* year => count */
    const yearCountMap = new Map();

    results.forEach(function(item){
        let year = item.pubYear;
        let count = 1;
        
        if (yearCountMap.has(year)) {
            count = yearCountMap.get(year) + 1;
            yearCountMap.set(year, count);
        }
        else {
            yearCountMap.set(year, 1);
        }
    });
    return yearCountMap;
};

export default iterator;
