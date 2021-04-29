import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer DhvrolzzLUSRu1oRViSOcSpHKm0n0MfulCDkIJtzzpGZXy7ngdeZGTYL6zexoPtXzA4P5jM7yc5TqZjKQwWyMcsStxByHI0wdcM_mJ1-XBVMdNReFdEtKFuAilKfXXYx',
  },
});
