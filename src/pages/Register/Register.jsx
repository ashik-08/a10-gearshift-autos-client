import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    const passRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>?]{6,}$/;
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    // const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;
    // console.log(name, photo, email, password, terms);

    // check password
    if (!passRegex.test(password)) {
      //   Swal.fire({
      //     title:
      //       "Password must contain one uppercase letter, one special character, and should not be less than 6 characters.",
      //     icon: "warning",
      //     showClass: {
      //       popup: "animate__animated animate__fadeInDown",
      //     },
      //     hideClass: {
      //       popup: "animate__animated animate__fadeOutUp",
      //     },
      //   });
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
    // check terms & condition
    else if (!terms) {
      //   Swal.fire({
      //     title: "Please accept our terms and conditions!",
      //     icon: "warning",
      //     showClass: {
      //       popup: "animate__animated animate__fadeInDown",
      //     },
      //     hideClass: {
      //       popup: "animate__animated animate__fadeOutUp",
      //     },
      //   });
      toast.warn("Please accept our terms and conditions!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // create user in firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "User Registered Successfully",
          confirmButtonText: "Cool",
        });
        // update profile name & photo
        updateProfile(result.user, {
          displayName: name,
          // photoURL: photo,
        });
        // reset the input field
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        // check for duplicate email usage
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          //   Swal.fire({
          //     title: "Email already is in use!",
          //     icon: "error",
          //     showClass: {
          //       popup: "animate__animated animate__fadeInDown",
          //     },
          //     hideClass: {
          //       popup: "animate__animated animate__fadeOutUp",
          //     },
          //   });
          toast.error("Email already is in use!", {
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
    <section className="container mx-auto">
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
              {/* <Input
                type="text"
                name="photo"
                size="lg"
                label="Photo URL"
                required
              /> */}
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
      <ToastContainer />
    </section>
  );
};

export default Register;
