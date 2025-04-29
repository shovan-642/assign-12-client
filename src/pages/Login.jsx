import { Button, Card, CardBody, CardHeader, Input, Typography } from '@material-tailwind/react';
import React from 'react';
import SocialLogin from '../components/SocialLogin';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const {login}=useAuth()
    const navigate = useNavigate()

    const handleLogin = (event)=>{
      event.preventDefault()
      const form = event.target
      const email = form.email.value
      const password = form.password.value
      login(email, password)
      .then((result)=>{
        const user = result.user
        console.log(user)
        navigate("/")
      })
      .catch((error)=>
      console.log(error))



    }

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
         Login
        </Typography>
      </CardHeader>
      <CardBody>
        <form
        onSubmit={handleLogin}
          action="submit"
          className="flex flex-col gap-4 md:mt-12"
        >
          <div>
            <label htmlFor="email">
              <Typography
                variant="small"
                color="blue-gray"
                className="block font-medium mb-2"
              >
                Your Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div>
            <label htmlFor="password">
              <Typography
                variant="small"
                color="blue-gray"
                className="block font-medium mb-2"
              >
                Your Password
              </Typography>
            </label>
            <Input
              id="password"
              color="gray"
              size="lg"
              type="password"
              name="password"
              placeholder="Type your Password here"
              className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <Button type='submit' color="black" className='mt-6 bg-black text-white px-6 py-2'>
            Login
          </Button>
              

        </form>
        <SocialLogin></SocialLogin>
      </CardBody>
    </Card>
        </div>
    );
};

export default Login;