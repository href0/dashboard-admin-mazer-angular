import { environment } from "../../../environments/environment.development";

export const constants = {
  ACCESS_TOKEN : 'ACCESS_TOKEN',
};

const apiurl = environment.API_URL;

export const apiEndpoint = {
  AuthEndpoint: {
    login: `${apiurl}/auth/signin`,
    logout: `${apiurl}/auth/signout`,
    // loggedUser: `${apiurl}/user`,
  },
  UserEndPoint : {
    getAll : `${apiurl}/user`
  }
  // TodoEndpoint: {
  //   getAllTodo: `${apiurl}/todo`,
  //   addTodo: `${apiurl}/todo`,
  //   updateTodo: `${apiurl}/todo`,
  // },
};