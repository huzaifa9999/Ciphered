import react, { useContext, createContext, useState ,useEffect} from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [username, setUsername] = useState();
    const [userId, setUserid] = useState();
    const [userpfp, setPfp] = useState();
    const [usertoken, setToken] = useState();
    const [logged, setLogged] = useState(false);

    // const updateUser = (userData) => {
    //     setUser(userData);
    // };
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
        const storedpfp = localStorage.getItem('pfp');
        if (storedpfp) {
          setPfp(storedpfp);
        }
        const storedid = localStorage.getItem('id');
        if (storedid) {
          setLogged(!logged)
          setUserid(storedid);
        }
        const storedtoken = localStorage.getItem('token');
        if (storedtoken) {
          setToken(storedtoken);
        }

      }, []);

    return (
        <UserContext.Provider value={{ username,userId,userpfp,usertoken,logged}}>
            {children}
        </UserContext.Provider>
    );
};
export const UserState = () => {
    return useContext(UserContext);
};
  
  export default UserProvider;