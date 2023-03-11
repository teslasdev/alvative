import { toast } from "react-hot-toast"
export async function LoginValidate(values) {
    const errors = emailVerify({},values);
    passwordVerify(errors,values)
    return errors;
}


function emailVerify(error={},values) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    if(!values.email) {
        error.email = toast.error('Email is Required...!')
    } else if(!specialChars.test(values.email)) {
        error.email = toast.error('Invalid Email...!')
    }
}


function passwordVerify(error={},values) {
    if(!values.password) {
        error.password = toast.error('Password is Required...!')
    } else if(values.password.length < 4 ) {
        error.password = toast.error('Password must be more than 4')
    }
}
