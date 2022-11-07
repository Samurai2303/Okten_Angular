import {environment} from '../../environments/environment';

let {carsAPI} = environment;

let urls = {
  cars: `${carsAPI}/cars`,
  login: `${carsAPI}/auth/login`,
  refresh: `${carsAPI}/auth/refresh`,
  register: `${carsAPI}/users`
}

export {urls};
