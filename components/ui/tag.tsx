import { cva, type VariantProps } from "class-variance-authority";

const tagVariants = cva("inline-flex items-center rounded-md font-medium", {
  variants: {
    variant: {
      default: "bg-green-50 text-green-700 ring-green-600/20",
      notActive: "bg-gray-50 text-gray-700 ring-gray-600/20",
    },
    size: {
      default: "px-2 py-1 text-xs",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

export const Tag: React.FC<TagProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <span className={tagVariants({ className, variant, size })} {...props}>
      {!variant ? "Active" : "Not Active"}
    </span>
  );
};
