import React, { useMemo, useState, useEffect, use } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { toast } from "react-toastify";
import { FaGoogle, FaEye, FaEyeSlash, FaUserPlus } from "react-icons/fa";
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

  useEffect(() => {
    document.title = "Register • TradeSphere Hub";
  }, []);

  // Validation Logic
  const passwordError = useMemo(() => {
    const { password } = formData;
    if (password.length < 6) return "Min 6 characters";
    if (!/[A-Z]/.test(password)) return "Need uppercase";
    if (!/[a-z]/.test(password)) return "Need lowercase";
    return null;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (passwordError) {
      toast.error(passwordError);
      return;
    }
    try {
      setSubmitting(true);
      await createUser(formData.email, formData.password);
      await updateUserProfile(formData.name, formData.photoURL);
      toast.success("Welcome to the Hub!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message || "Registration failed");
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      setSubmitting(true);
      await signInWithGoogle();
      toast.success("Google account linked!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message || "Google sign-in failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      {/* Container with Premium Styling */}
      <div className="card w-full max-w-md bg-base-100 shadow-2xl rounded-[2.5rem] border border-base-200 overflow-hidden">
        <div className="card-body p-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <FaUserPlus className="text-primary text-2xl" />
            </div>
            <h2 className="text-3xl font-black text-gray-800">Join the Hub</h2>
            <p className="text-sm opacity-60 mt-2 font-medium italic">
              Start your global trade journey
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name */}
            <div className="form-control">
              <label className="label text-xs font-black opacity-50 uppercase tracking-widest">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="input input-bordered w-full rounded-2xl bg-base-200 border-none focus:ring-2 ring-primary"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label text-xs font-black opacity-50 uppercase tracking-widest">
                Business Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                className="input input-bordered w-full rounded-2xl bg-base-200 border-none focus:ring-2 ring-primary"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Photo URL */}
            <div className="form-control">
              <label className="label text-xs font-black opacity-50 uppercase tracking-widest">
                Avatar Link
              </label>
              <input
                type="url"
                name="photoURL"
                placeholder="https://..."
                className="input input-bordered w-full rounded-2xl bg-base-200 border-none focus:ring-2 ring-primary"
                value={formData.photoURL}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password with Dynamic Visual Feedback */}
            <div className="form-control">
              <label className="label text-xs font-black opacity-50 uppercase tracking-widest">
                Secure Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className={`input input-bordered w-full pr-12 rounded-2xl bg-base-200 border-none transition-all duration-300 focus:ring-2 ${
                    passwordError && formData.password.length > 0
                      ? "ring-error"
                      : "ring-primary"
                  }`}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100 hover:text-primary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>

              {/* Requirement Badges */}
              <div className="mt-3 flex flex-wrap gap-2">
                <div
                  className={`badge badge-sm py-2 px-3 gap-1 border-none transition-all font-bold ${
                    formData.password.length >= 6
                      ? "bg-success/20 text-success"
                      : "bg-base-300 opacity-40"
                  }`}
                >
                  {formData.password.length >= 6 && "✓"} 6+ Chars
                </div>
                <div
                  className={`badge badge-sm py-2 px-3 gap-1 border-none transition-all font-bold ${
                    /[A-Z]/.test(formData.password)
                      ? "bg-success/20 text-success"
                      : "bg-base-300 opacity-40"
                  }`}
                >
                  {/[A-Z]/.test(formData.password) && "✓"} Uppercase
                </div>
                <div
                  className={`badge badge-sm py-2 px-3 gap-1 border-none transition-all font-bold ${
                    /[a-z]/.test(formData.password)
                      ? "bg-success/20 text-success"
                      : "bg-base-300 opacity-40"
                  }`}
                >
                  {/[a-z]/.test(formData.password) && "✓"} Lowercase
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full rounded-2xl text-white shadow-xl shadow-primary/20 mt-2"
              disabled={submitting || loading || Boolean(passwordError)}
            >
              {submitting ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Create Elite Account"
              )}
            </button>
          </form>

          <div className="divider opacity-50 text-[10px] font-black uppercase tracking-widest my-6">
            Social Connect
          </div>

          <button
            onClick={handleGoogleRegister}
            className="btn btn-outline w-full rounded-2xl gap-3 border-base-300 hover:bg-base-200 hover:text-base-content transition-all"
            disabled={submitting || loading}
          >
            <FaGoogle className="text-error" /> Sign up with Google
          </button>

          <p className="text-center mt-8 text-sm font-medium">
            Member of TradeSphere?{" "}
            <Link
              to="/auth/login"
              className="text-primary font-black hover:underline"
            >
              Sign In Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
