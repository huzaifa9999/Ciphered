import { Container} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux"
const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  useEffect(() => {

    if (userInfo) {

      navigate("/confessions");
    }
    
  }, [navigate, userInfo])

  const handleSubmit = async (e) => {
 
    e.preventDefault();
    dispatch(login(email, password));



  };


  return (
    <>

      <Container component="main" maxWidth="sm">
        <div class="w-full">
          <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4" >
            <div class="mb-4">
              <label class="block text-white text-lg font-bold mb-4 text-white" for="username">
                Username
              </label>
              <input class="shadow  transparent  bg-[#0f111f]  border-2 border-transparent  border-b-[#6d78ba] text-white  w-full py-2 px-3  leading-tight focus:outline-[#b3ccdb]  focus:shadow-outline" id="username" type="text" placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label class="block text-white text-lg  font-bold mb-2" for="password">
                Password
              </label>
              <input onChange={(e) => setPassword(e.target.value)} class="shadow  transparent  bg-[#0f111f] border-2 border-transparent border-b-[#6d78ba]  w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-[#b3ccdb] focus:shadow-outline" id="password" type="password" placeholder="******************" />
            </div>
            <div class="flex items-center justify-center">
              <button onClick={handleSubmit} class="bg-[#b3ccdb] hover:bg-[#07091d] hover:text-[#b3ccdb] text-[#0f111f] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Log-In
              </button>
            </div>
          </form>

        </div>


      </Container>



    </>
  );
};

export default Login;
