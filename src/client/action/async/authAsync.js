import fetch from "isomorphic-fetch";

export const authenticateEmployee = () => {
   return (dispatch) => {
       fetch("http://localhost:3000/login")
           .then(res => {

           })
           .catch(error => {
               console.log(error)
           })
   }
};
