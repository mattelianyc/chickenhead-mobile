import axios from 'axios';
// import config from '../config';

const api = axios.create({
	baseURL: 'https://api.yelp.com/v3',
	headers: {
		Authorization: `Bearer ${config['YELP_KEY']}`
	}
});

class YelpService {
	getCoffeeShops() {
		return api
			.get('/businesses/search', {
				params: {
					latitude: 40.7457425,
					longitude: -73.9740916,
					limit: 10,
					categories: 'chicken,waffles'
				}
			})
			.then(res =>
				res.data.businesses.map(business => ({
					name: business.name,
					coordinates: business.coordinates
				}))
			)
			.catch(error => console.error(error));
	}
}

export default new YelpService();