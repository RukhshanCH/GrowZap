import Link from "next/link";
import Image from "next/image";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link href="/" className="logo" aria-label="GrowZap home">
      <Image
        src="/images/logo-icon-blue-purple.png"
        alt=""
        width={36}
        height={36}
        className="logo__mark"
        priority
      />
      <span className={`logo__wordmark logo__wordmark--${variant}`}>
        Grow<span className="logo__zap">Zap</span>
      </span>
    </Link>
  );
}
