import { Button } from "@material-tailwind/react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleLogIn}= useAuth()
    const navigate = useNavigate()

    const handleGoogleLogin = ()=>{
        googleLogIn()
        .then((result)=>{
            console.log(result.user)
            navigate("/")
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

    return (
        <div>
            <div className="divider"></div>       
        <Button
            onClick={handleGoogleLogin}
            variant="outlined"
            size="lg"
            className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt="google"
              className="h-6 w-6"
            />{" "}
            sign in with google
          </Button>
        </div>
    );
};

export default SocialLogin;