import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { user, createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Check if the user is already authenticated
  if (user) {
    return <Navigate to="/"></Navigate>;
  }

  const handleRegister = (e) => {
    const passRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>?]{6,}$/;
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // const terms = form.terms.checked;
    // console.log(name, photo, email, password, terms);

    // check password
    if (!passRegex.test(password)) {
      toast.warn(
        "Password must contain one uppercase letter, one special character, and should not be less than 6 characters.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      return;
    }

    // create user in firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // update profile name & photo
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "User Registered Successfully.",
          confirmButtonText: "Cool",
        });
        // reset the input field
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        // check for duplicate email usage
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          toast.error("Email already is in use", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else if (error.message === "Firebase: Error (auth/invalid-email).") {
          toast.error("Invalid Email", {
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

  return (
    <section>
      <NavBar></NavBar>
      <div className="container mx-auto">
        <div className="glass-newsletter flex justify-center mt-20 md:mt-32 py-20">
          <Card color="transparent" shadow={false}>
            <Typography
              variant="h4"
              className="text-center text-blue-gray-200 font-annie text-3xl mb-5"
            >
              Sign Up
            </Typography>
            <Typography className="font-normal text-center text-blue-gray-200 text-lg font-kalam">
              Enter your details to register.
            </Typography>
            <form onSubmit={handleRegister} className="mt-10 mb-2 w-72 md:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <span className="space-y-3">
                  <p className="text-menu text-xl font-medium">Name</p>
                  <Input
                    className="text-gray-100"
                    type="text"
                    name="name"
                    size="lg"
                    label="Enter Your Name"
                    required
                  />
                </span>
                <span className="space-y-3">
                  <p className="text-menu text-xl font-medium">Photo</p>
                  <Input
                    className="text-gray-100"
                    type="url"
                    name="photo"
                    size="lg"
                    label="Enter Photo URL"
                    required
                  />
                </span>
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
                  className="absolute bottom-[188px] right-3"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <Checkbox
                name="terms"
                required
                label={
                  <Typography
                    variant="small"
                    className="flex items-center text-blue-gray-200 font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors text-blue-gray-100 hover:text-gray-100"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="mt-6" type="submit" fullWidth>
                <input type="submit" value="Register" />
              </Button>
              <Typography className="mt-4 text-center text-blue-gray-200 font-normal">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-blue-gray-100 hover:text-gray-100"
                >
                  Sign In
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </section>
  );
};

export default Register;
