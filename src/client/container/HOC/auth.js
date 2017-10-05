/**
 * Created by sourabh on 4/10/17.
 */
import React from "react";
import extractToken from "../../token"
import { Redirect } from "react-router-dom"

export default (Component) => {
  return class HOC extends React.Component{
      render(){
          const token = extractToken();
           if(token){
               return <Component/>
           }
           else{
               return <Redirect to="/" />
           }

      }

  }
};
