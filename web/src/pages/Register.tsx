import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 blur-[100px] rounded-full pointer-events-none opacity-40 mix-blend-screen"></div>

      {/* Top Left Logo */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
        <Link to="/" className="hover:scale-105 transition-transform flex items-center">
          <Logo />
        </Link>
      </div>

      <div className="w-full max-w-md relative z-10 mt-8">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-headline-md font-bold text-on-surface mb-2">Create Account</h1>
          <p className="text-on-surface-variant text-center">
            Join ICTPilot to access institutional AI trading signals.
          </p>
        </div>

        {/* Register Card */}
        <div className="glass-card rounded-3xl p-8 border border-outline-variant/30 shadow-2xl relative overflow-hidden">
          
          <form className="flex flex-col gap-5">
            
            {/* Username Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-on-surface-variant ml-1" htmlFor="username">Username</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/70 text-[20px]">
                  person
                </span>
                <input 
                  type="text" 
                  id="username"
                  placeholder="TraderPro99"
                  className="w-full bg-surface-container/50 border border-outline-variant/30 text-on-surface rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-[#032EA1] focus:ring-1 focus:ring-[#032EA1]/50 transition-all placeholder:text-on-surface-variant/40"
                />
              </div>
            </div>

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
              <label className="text-sm font-bold text-on-surface-variant ml-1" htmlFor="password">Password</label>
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

            {/* Confirm Password Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-on-surface-variant ml-1" htmlFor="confirmPassword">Confirm Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/70 text-[20px]">
                  lock_reset
                </span>
                <input 
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="w-full bg-surface-container/50 border border-outline-variant/30 text-on-surface rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:border-[#032EA1] focus:ring-1 focus:ring-[#032EA1]/50 transition-all placeholder:text-on-surface-variant/40 tracking-wider"
                />
                <button 
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/70 hover:text-on-surface transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showConfirmPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Terms of Service */}
            <div className="flex items-start gap-3 mt-2 ml-1">
              <input 
                type="checkbox" 
                id="terms" 
                className="w-4 h-4 mt-0.5 rounded border-outline-variant/30 bg-surface-container/50 text-[#032EA1] focus:ring-[#032EA1] focus:ring-offset-background"
              />
              <label htmlFor="terms" className="text-xs text-on-surface-variant cursor-pointer select-none leading-relaxed">
                I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="mt-4 bg-[#032EA1] hover:brightness-110 text-white w-full py-3.5 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(3,46,161,0.3)] hover:shadow-[0_0_25px_rgba(3,46,161,0.5)] active:scale-[0.98]"
            >
              Create Account
            </button>
          </form>

        </div>

        {/* Footer */}
        <p className="text-center text-on-surface-variant mt-8 text-sm">
          Already have an account? <Link to="/login" className="text-primary font-bold hover:text-primary-fixed transition-colors underline underline-offset-4 decoration-primary/30 hover:decoration-primary">Sign In</Link>
        </p>

      </div>
    </div>
  );
}
