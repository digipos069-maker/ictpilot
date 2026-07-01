import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 blur-[100px] rounded-full pointer-events-none opacity-40 mix-blend-screen"></div>

      <div className="w-full max-w-md relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="mb-6 hover:scale-105 transition-transform">
            <Logo />
          </Link>
          <h1 className="text-3xl font-headline-md font-bold text-on-surface mb-2">Welcome Back</h1>
          <p className="text-on-surface-variant text-center">
            Log in to access your institutional trading signals and journal.
          </p>
        </div>

        {/* Login Card */}
        <div className="glass-card rounded-3xl p-8 border border-outline-variant/30 shadow-2xl relative overflow-hidden">
          
          <form className="flex flex-col gap-5">
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-on-surface-variant ml-1" htmlFor="email">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/70 text-[20px]">
                  mail
                </span>
                <input 
                  type="email" 
                  id="email"
                  placeholder="name@example.com"
                  className="w-full bg-surface-container/50 border border-outline-variant/30 text-on-surface rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-[#032EA1] focus:ring-1 focus:ring-[#032EA1]/50 transition-all placeholder:text-on-surface-variant/40"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-on-surface-variant" htmlFor="password">Password</label>
                <Link to="/forgot-password" className="text-xs text-primary hover:text-primary-fixed transition-colors font-bold">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/70 text-[20px]">
                  lock
                </span>
                <input 
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••"
                  className="w-full bg-surface-container/50 border border-outline-variant/30 text-on-surface rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:border-[#032EA1] focus:ring-1 focus:ring-[#032EA1]/50 transition-all placeholder:text-on-surface-variant/40 tracking-wider"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/70 hover:text-on-surface transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3 mt-2 ml-1">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 rounded border-outline-variant/30 bg-surface-container/50 text-[#032EA1] focus:ring-[#032EA1] focus:ring-offset-background"
              />
              <label htmlFor="remember" className="text-sm text-on-surface-variant cursor-pointer select-none">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="mt-4 bg-[#032EA1] hover:brightness-110 text-white w-full py-3.5 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(3,46,161,0.3)] hover:shadow-[0_0_25px_rgba(3,46,161,0.5)] active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center mt-8 mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/20"></div>
            </div>
            <div className="relative bg-[#1a1829] px-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Or continue with
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-surface-container/40 border border-outline-variant/30 hover:bg-surface-container/80 transition-colors py-2.5 rounded-xl text-sm font-bold text-on-surface">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-surface-container/40 border border-outline-variant/30 hover:bg-surface-container/80 transition-colors py-2.5 rounded-xl text-sm font-bold text-on-surface">
              <span className="material-symbols-outlined text-[20px]">
                apple
              </span>
              Apple
            </button>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-on-surface-variant mt-8 text-sm">
          Don't have an account? <Link to="/ai-signal" className="text-primary font-bold hover:text-primary-fixed transition-colors underline underline-offset-4 decoration-primary/30 hover:decoration-primary">Start for free</Link>
        </p>

      </div>
    </div>
  );
}
