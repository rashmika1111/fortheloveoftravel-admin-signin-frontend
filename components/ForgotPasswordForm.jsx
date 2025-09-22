"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/forgot-password-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Password reset link has been sent to your email! Please check your inbox and click the link to reset your password.");
        router.push('/login');
      } else {
        // Check if response is JSON before parsing
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          alert(errorData.message || "Failed to send reset link. Please try again.");
        } else {
          const textResponse = await response.text();
          alert(`Server error (${response.status}): ${textResponse || 'Please try again.'}`);
        }
      }
    } catch (error) {
      console.error('Forgot password error:', error);
      alert("Failed to send reset link. Please try again.");
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
          Forgot Password
        </h2>

        <p className="text-sm text-gray-600 text-center">
          Enter your registered email, and we'll send you a password reset link.
        </p>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        <p className="text-sm text-center text-gray-600">
          Remember your password?{" "}
          <a href="/login" className="text-purple-600 hover:underline">
            Back to Login
          </a>
        </p>
      </form>
    </div>
  );
}