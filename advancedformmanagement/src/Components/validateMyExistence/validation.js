import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(3,"Name or Nick is fine")
      .required("Must include Name"),
    email: yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: yup
    .string()
    .min(8,"Passwords need 6 charas")
    .required('Password is required'),
    terms: yup
      .boolean()
      .oneOf([true], "You must accept Terms and Conditions")
      
  });

  export default formSchema