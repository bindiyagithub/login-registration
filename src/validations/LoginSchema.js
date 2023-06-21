
import * as  Yup from 'yup';
 

export const LoginSchema = Yup.object({
   
  email : Yup.string().email('Invalid Email').required(),
    
  password : Yup.string().required('Password Must be Required')
    .matches(/^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,30}$/ ,'Enter Strong Password')
});