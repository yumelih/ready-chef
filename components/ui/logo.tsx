import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/static/images/logo.png"
      width={100}
      height={35}
      alt="Ready Chef logo"
    />
  );
}
