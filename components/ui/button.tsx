import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("cursor-pointer bg-yellow-600", {
  variants: {
    variant: {
      default: "rounded-sm text-white hover:text-gray-900",
      full: "h-0 opacity-0 transition-all text-gray-900 hover:text-white group-hover:h-fit group-hover:opacity-100 uppercase",
    },
    size: {
      default: "px-8 py-2 text-xl lg:px-12 lg:py-4 lg:text-2xl",
      sm: "px-4 py-2",
      full: "w-full px-4 py-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => (
  <button className={buttonVariants({ variant, size, className })} {...props} />
);

//   return (
//     <button className="h-0 w-full cursor-pointer bg-yellow-600 px-4 py-2 opacity-0 transition-all hover:text-white group-hover:h-fit group-hover:opacity-100">
//       HIRE NOW
//     </button>
//   );
// }
