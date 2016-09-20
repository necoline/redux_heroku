import $ from 'jquery';

export const login = (email, password, history, redirect) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/auth/signin',
      type: 'POST',
      data: ({ email, password })
    }).done( (res) => {
      let id = res.id; //to know who is logged in
      let token = getToken(); //a method that we can reuse later
      sessionStorage.token = token;
          //to auth. user thru-out sesh, saved to browser, need to bring in express session
      sessionStorage.userId = id; //id saved to browser
      dispatch({ type: 'LOGIN', id, token }); //compare to redux state
      history.push(redirect);
   });
  }
}

export const signup = (email, password, history, redirect) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/auth/signup',
      type: 'POST',
      data: { email, password }
    }).done( (res) => {
      let id = res.id
      let token = getToken();
      sessionStorage.token = token;
      sessionStorage.userId = id;
      dispatch({ type: 'LOGIN', id, token });
      history.push(redirect);
    });
  }
};

export const logout = () => {
 sessionStorage.removeItem('userId'); //clear from browser sesh
 sessionStorage.removeToken('token'); //clear from browser sesh
 return { type: 'LOGOUT' }; //clear redux state
};

const getToken = () => {
 return Math.random().toString(36).substring(7);
};
