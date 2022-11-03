import {environment} from '../../environments/environment';

let {jsonplaceholderAPI, carsAPI} = environment;

let urls = {
  users:`${jsonplaceholderAPI}/users`,
  posts:`${jsonplaceholderAPI}/posts`,
  comments:`${jsonplaceholderAPI}/comments`,
  cars:`${carsAPI}/cars`,
}

export {urls};
