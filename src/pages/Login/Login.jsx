import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Successfully Logged In. Welcome ${result?.user?.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        // check for invalid credential
        if (
          error.message === "Firebase: Error (auth/invalid-login-credentials)."
        ) {
          toast.error("Invalid Email or Password!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Successfully Logged In. Welcome ${result?.user?.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <section className="container mx-auto">
      <div className="glass-newsletter flex justify-center mt-20 md:mt-32 py-20">
        <Card color="transparent" shadow={false}>
          <Typography
            variant="h4"
            className="text-center text-blue-gray-200 font-annie text-3xl mb-5"
          >
            Sign In
          </Typography>
          <Typography className="font-normal text-center text-blue-gray-200 text-lg font-kalam">
            Enter your details to login.
          </Typography>
          <form onSubmit={handleLogin} className="mt-10 mb-2 w-72 md:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <span className="space-y-3">
                <p className="text-menu text-xl font-medium">Email</p>
                <Input
                  className="text-gray-100"
                  type="email"
                  name="email"
                  size="lg"
                  label="Enter Your Email"
                  required
                />
              </span>
              <span className="space-y-3">
                <p className="text-menu text-xl font-medium">Password</p>
                <Input
                  className="text-gray-100"
                  type={showPass ? "text" : "password"}
                  name="password"
                  size="lg"
                  label="Enter Your Password"
                  required
                />
              </span>
              <span
                className="absolute top-72 right-3"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>

            <Typography
              variant="small"
              color="gray"
              className="flex items-center text-blue-gray-200 font-normal"
            >
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-100"
              >
                Forgot password?
              </a>
            </Typography>

            <Button className="mt-6" type="submit" fullWidth>
              <input type="submit" value="Login" />
            </Button>
            <Typography className="mt-4 text-center text-blue-gray-200 font-normal">
              Not registered yet?{" "}
              <Link
                to="/register"
                className="font-medium text-blue-gray-100 hover:text-gray-100"
              >
                Sign Up
              </Link>
            </Typography>
          </form>
          <Typography
            variant="h6"
            className="mt-4 text-center text-blue-gray-200 font-bold"
          >
            Or
          </Typography>
          <Button
            onClick={handleGoogleSignIn}
            className="flex justify-center items-center gap-2 normal-case mt-5"
          >
            <FcGoogle></FcGoogle>Login with Google
          </Button>
        </Card>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
