import type { Metadata } from "next";
import { loginAction } from "./actions";

export const metadata: Metadata = {
  title: "Admin Login - CodexUg",
  robots: "noindex, nofollow",
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const hasError = params.error === "1";

  return (
    <div className="min-h-screen bg-[#060E1A] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo / Branding */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Codex<span className="text-cyan-400">Ug</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm">Admin Dashboard</p>
        </div>

        {/* Card */}
        <div className="bg-[#0A1628] border border-white/10 rounded-2xl p-8">
          <h2 className="text-white font-semibold text-xl mb-6 text-center">Sign In</h2>

          {hasError && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
              Invalid password. Please try again.
            </div>
          )}

          <form action={loginAction} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-gray-400 text-sm mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="Enter admin password"
                className="w-full bg-[#0F1E35] border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 placeholder:text-gray-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-3 rounded-xl transition-colors duration-200"
            >
              Login
            </button>
          </form>
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          Protected area — unauthorised access is prohibited.
        </p>
      </div>
    </div>
  );
}
