const apiUrl = `https://stargateapi.azurewebsites.net`

const fetchAllPeople = async () => {
    try {
        const response = await fetch(apiUrl + `/Person/`, {
            mode: "cors",
            method: "GET"
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        } else {
            const data = await response.json();
            return data.people;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const fetchPersonByName = async (name) => {
    try {
        const response = await fetch(apiUrl + `/Person/${name}`, {
            mode: "cors",
            method: "GET"
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        } else {
            const data = await response.json();
            return data.person; 
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const fetchDutiesByName = async (name) => {
    try {
        const response = await fetch(apiUrl + `/AstronautDuty/${name}`, {
            mode: "cors",
            method: "GET"
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        } else {
            const data = await response.json();
            return data.astronautDuties;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// export resuable api calls
export { fetchDutiesByName };
export { fetchPersonByName };
export { fetchAllPeople };