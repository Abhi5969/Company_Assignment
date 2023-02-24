import NavBar from '../components/Nav';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="w-screen space-y-4">
      <NavBar />
      <div className="flex items-center justify-center w-full gap-4">
        <Link to="/register" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Register
        </Link>
        <Link to="/login" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
