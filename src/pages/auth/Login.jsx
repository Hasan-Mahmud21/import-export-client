import React, { use, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { toast } from "react-toastify";
import {
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaUserShield,
  FaUserAlt,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signInUser, signInWithGoogle } = use(AuthContext) || {};

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Login • TradeSphere";
  }, []);

  // --- Auto-fill Demo Credentials ---
  const handleDemoLogin = (role) => {
    if (role === "admin") {
      setEmail("admin@tradesphere.com");
      setPassword("Admin@123");
    } else {
      setEmail("user@tradesphere.com");
      setPassword("User@123");
    }
    toast.info(`Demo ${role} credentials filled!`);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await signInUser(email, password);
      toast.success("Welcome back to TradeSphere!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error?.message || "Invalid credentials");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl rounded-[2.5rem] overflow-hidden">
        <div className="card-body p-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black text-primary italic">
              TradeSphere
            </h2>
            <p className="text-base-content/60 mt-2 font-medium">
              Global Logistics Portal
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="form-control">
              <label className="label text-sm font-bold opacity-70">
                BUSINESS EMAIL
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="input input-bordered w-full rounded-2xl bg-base-200 border-none focus:ring-2 ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label text-sm font-bold opacity-70">
                PASSWORD
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input input-bordered w-full pr-12 rounded-2xl bg-base-200 border-none focus:ring-2 ring-primary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="text-right mt-2">
                <button
                  type="button"
                  className="text-xs link link-primary no-underline font-bold"
                  onClick={() =>
                    document
                      .getElementById("forgot_password_modal")
                      ?.showModal()
                  }
                >
                  Forgot Password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full rounded-2xl text-white shadow-lg shadow-primary/30"
              disabled={submitting}
            >
              {submitting ? (
                <span className="loading loading-dots"></span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* --- Demo Section (Assignment Requirement) --- */}
          <div className="mt-8 pt-6 border-t border-base-200">
            <p className="text-center text-[10px] uppercase tracking-widest font-black opacity-40 mb-4">
              Quick Access Demo
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleDemoLogin("user")}
                className="btn btn-sm btn-outline rounded-xl gap-2 font-bold lowercase"
              >
                <FaUserAlt size={12} /> user_login
              </button>
              <button
                onClick={() => handleDemoLogin("admin")}
                className="btn btn-sm btn-outline rounded-xl gap-2 font-bold lowercase"
              >
                <FaUserShield size={12} /> admin_login
              </button>
            </div>
          </div>

          <div className="divider opacity-50 text-[10px] font-bold">
            OR CONTINUE WITH
          </div>

          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline w-full rounded-2xl gap-3 border-base-300 hover:bg-base-200 hover:text-base-content"
          >
            <FaGoogle className="text-error" /> Google Workspace
          </button>

          <p className="text-center mt-8 text-sm font-medium">
            New to the hub?{" "}
            <Link
              to="/auth/register"
              className="text-primary font-black hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
