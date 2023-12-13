import axios from 'axios';

//v1
// export type Params = {
//     query: String,
//     page: String,
//     num_pages: String,
// }
// export const fetchPopularJob = (params: Params) => {
//     const options = {
//         method: 'GET',
//         url: 'https://jsearch.p.rapidapi.com/search',
//         params: {...params},
//         headers: {
//           'X-RapidAPI-Key': '9c7fae566cmshbc8cac89e57fefbp133518jsn3e0e50eb1703',
//           'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
//         },
//       };
//     const url = 'https://jsearch.p.rapidapi.com/search';
//     return axios.get(url,options).then(response => response.data);

// };

//use for testing
export type Params = {
    q: String,
    page: String,
    country: String,
    city: String
}
export const fetchPopularJob = (params: Params) => {
    const options = {
        params: {...params},
        headers: {
            'X-RapidAPI-Key': '9c7fae566cmshbc8cac89e57fefbp133518jsn3e0e50eb1703',
            'X-RapidAPI-Host': 'job-search-api1.p.rapidapi.com',
          },    
      };
    const url = 'https://job-search-api1.p.rapidapi.com/v1/job-description-search';
    return axios.get(url,options).then(response => response.data);

};
