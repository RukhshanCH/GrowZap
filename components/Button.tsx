import Link from "next/link";
import type {
  ReactNode,
  ButtonHTMLAttributes,
} from "react";

type Variant = "primary" | "secondary" | "on-dark" | "ghost";

interface BaseProps {
  variant?: Variant;
  size?: "md" | "sm";
  block?: boolean;
  className?: string;
  showArrow?: boolean;
}

interface LinkProps extends BaseProps {
  children: ReactNode;
  href: string;
  target?: string;
  rel?: string;
}

interface ButtonProps
  extends BaseProps,
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children: ReactNode;
  href?: undefined;
}

const Arrow = () => (
  <svg
    className="btn__icon"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function classes(
  variant: Variant,
  size: "md" | "sm",
  block: boolean,
  className?: string
) {
  return [
    "btn",
    `btn--${variant}`,
    size === "sm" ? "btn--sm" : "",
    block ? "btn--block" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  block = false,
  showArrow = true,
  children,
  className,
  ...rest
}: LinkProps | ButtonProps) {
  const cls = classes(variant, size, block, className);

  if (href) {
    const isExternal = href.startsWith("http");

    return (
      <Link
        href={href}
        className={cls}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        <span>{children}</span>
        {showArrow && <Arrow />}
      </Link>
    );
  }

  return (
    <button
      className={cls}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <span>{children}</span>
      {showArrow && <Arrow />}
    </button>
  );
}