import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/static/images/logo.png"
      width={125}
      height={50}
      alt="Ready Chef logo"
    />
  );
}
