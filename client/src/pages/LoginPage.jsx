import useForm from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import validationSchema from '../validations/login';
import axios from "axios"
const LoginPg = () => {
  const navigate = useNavigate() 
  const initailValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (value) => {
    console.log(value);
    //backend connection
    try{
    const {data} = await axios.post('api/v1/auth/login',
      value)   
      // to do save user data to app context
      
      alert(data.message)
      navigate('/user-management')
    }catch(err){
      console.log(err);
      alert(err.response.data.message + err.response.status +" Error")
    }
  };

  const form = useForm({
    initailValues,
    onSubmit: handleSubmit,
    // validationSchema,to do fix validation
  });

  // console.log(form);

  return (
    <div className="grid min-h-screen place-items-center">
      <div className="p-6 border rounded-md shadow-md shadow-slate-500/20">
        <form onSubmit={form.handleSubmit} className="flex flex-col space-y-2">
          <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">email:</label>
          <input
            name="email"
            className="bg-slate-200"
            onChange={form.handleChange}
            // onBlur={form.handleBlur}
          />
          {form.errors?.email && <p>{form.errors?.email}</p>}
          </div>
          <div class="md:w-1/3" >
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password" >password:</label>
          <input
            name="password"
            className="bg-slate-200"
            onChange={form.handleChange}
            // onBlur={form.handleBlur}
          />
          {form.errors?.password && <p>{form.password?.password}</p>}
         </div>
          <button   class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPg;
