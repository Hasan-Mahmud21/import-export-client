import React, { useMemo, useState, useEffect, use } from "react";
import { Link, useNavigate, useLocation } from "react-router";

import { toast } from "react-toastify";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { createUser, signInWithGoogle, updateUserProfile, loading } =
    use(AuthContext) || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // --- Dynamic title to meet the assignment's "Dynamic title" requirement
  useEffect(() => {
    document.title = "Register • Import Export Hub";
  }, []);

  const passwordError = useMemo(() => {
    const { password } = formData;
    if (password.length < 6) return "Must be at least 6 characters";
    if (!/[A-Z]/.test(password))
      return "Must include at least one uppercase letter";
    if (!/[a-z]/.test(password))
      return "Must include at least one lowercase letter";
    return null;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!createUser || !updateUserProfile) {
      toast.error(
        "Auth not initialized. Make sure AuthProvider wraps your app."
      );
      return;
    }
    if (passwordError) {
      toast.error(passwordError);
      return;
    }
    try {
      setSubmitting(true);
      await createUser(formData.email, formData.password);
      await updateUserProfile(formData.name, formData.photoURL);
      toast.success("Account created successfully!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message || "Registration failed");
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleRegister = async () => {
    if (!signInWithGoogle) {
      toast.error(
        "Auth not initialized. Make sure AuthProvider wraps your app."
      );
      return;
    }
    try {
      setSubmitting(true);
      await signInWithGoogle();
      toast.success("Signed in with Google!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message || "Google sign-in failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body p-8">
          
          <h2 className="text-3xl font-bold text-center mb-8">
            Create your account
          </h2>

          {/* Registration Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div className="form-control w-full">
              <label className="label pb-1" htmlFor="name">
                <span className="label-text font-medium">Name</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-control w-full">
              <label className="label pb-1" htmlFor="email">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            {/* Photo URL */}
            <div className="form-control w-full">
              <label className="label pb-1" htmlFor="photoURL">
                <span className="label-text font-medium">Photo URL</span>
              </label>
              <input
                id="photoURL"
                type="url"
                name="photoURL"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
                value={formData.photoURL}
                onChange={handleChange}
                autoComplete="photo"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control w-full">
              <label className="label pb-1" htmlFor="password">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className={`input input-bordered w-full pr-12 ${
                    passwordError ? "input-error" : ""
                  }`}
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>
              <label className="label pt-1">
                <span
                  className={`label-text-alt text-xs ${
                    passwordError ? "text-error" : "text-gray-500"
                  }`}
                >
                  {passwordError
                    ? `Password error: ${passwordError}`
                    : "Must have 6+ characters, 1 uppercase & 1 lowercase letter"}
                </span>
              </label>
            </div>

            {/* Register Button */}
            <div className="form-control w-full pt-2">
              <button
                type="submit"
                className="btn btn-primary text-white w-full"
                disabled={submitting || loading || Boolean(passwordError)}
              >
                {submitting ? "Creating..." : "Register"}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider my-4">OR</div>

          {/* Google Button */}
          <button
            onClick={handleGoogleRegister}
            className="btn btn-outline w-full"
            disabled={submitting || loading}
          >
            <FaGoogle className="text-lg" />
            Continue with Google
          </button>

          {/* Login Link  */}
          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link to="/auth/login" className="link link-primary font-semibold">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
