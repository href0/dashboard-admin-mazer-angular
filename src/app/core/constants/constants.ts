import { environment } from "../../../environments/environment";

export const constants = {
  ACCESS_TOKEN : 'ACCESS_TOKEN',
};

const apiurl = environment.API_URL;

export const apiEndpoint = {
  AuthEndpoint: {
    login: `${apiurl}/auth/signin`,
    logout: `${apiurl}/auth/signout`,
    refreshToken: `${apiurl}/auth/refresh-token`,
    // loggedUser: `${apiurl}/user`,
  },
  UserEndPoint : {
    get    : `${apiurl}/user`,
    create : `${apiurl}/user`,
    update : `${apiurl}/user`,
    delete : `${apiurl}/user`,
  }
  // TodoEndpoint: {
  //   getAllTodo: `${apiurl}/todo`,
  //   addTodo: `${apiurl}/todo`,
  //   updateTodo: `${apiurl}/todo`,
  // },
};