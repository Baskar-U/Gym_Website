import { forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg" | "xl";
  isSkewed?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isSkewed = true, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-red-600 hover:shadow-[0_0_20px_rgba(229,57,53,0.4)]",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
      ghost: "text-white hover:text-primary hover:bg-white/5",
      white: "bg-white text-background hover:bg-gray-200"
    };

    const sizes = {
      sm: "text-xs px-4 py-2",
      md: "text-sm px-6 py-3",
      lg: "text-base px-8 py-4",
      xl: "text-lg px-10 py-5"
    };

    if (isSkewed) {
      return (
        <button
          ref={ref}
          className={cn(baseStyles, variants[variant], sizes[size], "skew-button group relative overflow-hidden", className)}
          {...props}
        >
          {variant === 'primary' && (
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          )}
          <span className="skew-button-content flex items-center gap-2 relative z-10">
            {children}
          </span>
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
