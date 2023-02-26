import useForm from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import validationSchema from '../validations/register';
const RegisterPg = () => {
  const navigate = useNavigate() 
  const initailValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = async (value) => {
    console.log(value);
    try{
      const {data} = await axios.post('api/v1/auth/register',
        value)   
        // to do save user data to app context
        
        alert(data.message)
        navigate('/login')
      }catch(err){
        // console.log(err);
        alert(err.response.data.message + err.response.status +" Error")
      }
  };

  const form = useForm({
    initailValues,
    onSubmit: handleSubmit,
    // validationSchema,
  });

  return (
    <div className="grid min-h-screen place-items-center">
      <div className="p-6 border rounded-md shadow-md shadow-slate-300/20">
        <form onSubmit={form.handleSubmit} className="flex flex-col space-y-2">
          <label>User Name:</label>
          <input
            name="username"
            className="bg-slate-200"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors?.username && <p>{form.errors?.username}</p>}
          <label>email:</label>
          <input
            name="email"
            className="bg-slate-200"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors?.email && <p>{form.errors?.email}</p>}
          <label>Password:</label>
          <input
            name="password"
            type="password"
            className="bg-slate-200"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors?.password && <p>{form.errors?.password}</p>}
          <label> Confirm Password:</label>
          <input
            name="confirmPassword"
            className="bg-slate-200"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors?.password && <p>{form.errors?.password}</p>}
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            submit
          </button>
          <div class="flex justify-center items-center mt-6">
        <a
          href="#"
          target="_blank"
          class="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
        >
          <span class="ml-2"
            >You have an account?
            <a
              href="/login"
              class="text-xs ml-2 text-blue-500 font-semibold"
              >Login here</a
            ></span
          >
        </a>
      </div>
        </form>
      </div>
    </div>
  )
};

export default RegisterPg;
