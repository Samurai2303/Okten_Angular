import {environment} from "../../environments/environment";

let {API} = environment;

let auth = `${API}/auth`;

let urls = {
  cars: `${API}/cars`,
  login: {
    login: auth,
    refresh: `${auth}/refresh`,
  }
};

export {urls};
