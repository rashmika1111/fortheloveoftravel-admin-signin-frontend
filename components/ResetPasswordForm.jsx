"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    // Get token from URL parameters
    const resetToken = searchParams.get("token");
    if (!resetToken) {
      alert(
        "Invalid or missing reset parameters. Please request a new password reset link."
      );
      router.push("/forgotpassword");
      return;
    }
    setToken(resetToken);
  }, [searchParams, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: token,
            password: form.password, // backend expects `password`
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Password has been reset successfully!");
        router.push(process.env.NEXT_PUBLIC_REDIRECT_AFTER_RESET_PASSWORD || "/login");
      } else {
        alert(data.message || "Failed to reset password. Please try again.");
      }
    } catch (error) {
      console.error("Reset password error:", error);
      alert("Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Reset Password
        </h2>

        <p className="text-sm text-gray-600 text-center">
          Enter your new password below. This link is valid for a limited time.
        </p>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition disabled:opacity-50"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>

        <p className="text-sm text-center text-gray-600">
          <a href="/login" className="text-green-600 hover:underline">
            Back to Login
          </a>
        </p>
      </form>
    </div>
  );
}
