import axios from 'axios';

//https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch

//v1 get info from JSearch
// export type Params = {
//     query: String,
//     page: String,
//     num_pages: String,
// }
// export const fetchPopularJob = (params: Params) => {
//     const options = {
//         params: {...params},
//         headers: {
//             'X-RapidAPI-Key': '9c7fae566cmshbc8cac89e57fefbp133518jsn3e0e50eb1703',
//             'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//           }
//       };
//     const url = 'https://jsearch.p.rapidapi.com/search';
//     return axios.get(url,options).then(response => response.data.data);
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
    return axios.get(url,options).then(response => response.data)};