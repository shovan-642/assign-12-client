import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import SocialLogin from "../components/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userData = {
            name: data.name,
            email: data.email,
            role: "participant"
          };
          axiosPublic.post("/users", userData)
          .then((res) => {
            if (res.data.insertedID) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        });
        
      })
      .catch((error) => console.log(error));
      
  };

  return (
    <div>
      <Card
        shadow={false}
        className="md:px-24 md:py-14 py-8 border border-gray-300"
      >
        <CardHeader shadow={false} floated={false} className="text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:text-4xl"
          >
            Register
          </Typography>
        </CardHeader>
        <CardBody>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                {...register("name", { required: false })}
                size="lg"
                name="name"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Photo URL
              </Typography>
              <Input
                {...register("photoURL", { required: false })}
                size="lg"
                name="photoURL"
                type="url"
                placeholder="Your Photo URL"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                {...register("email", { required: true })}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                {...register("password", { required: true })}
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Button
              type="submit"
              className="mt-6 bg-black text-white px-6 py-2"
              fullWidth
            >
              sign up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account? <Link to={"/login"}>Sign Up</Link>
            </Typography>
          </form>
          <SocialLogin></SocialLogin>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
