interface ButtonIconProps {
  icon: string;
  alt: string;
}

export default function ButtonIcon({ icon, alt }: ButtonIconProps) {
  return (
    <button className="">
      <img src={icon} alt={alt} />
    </button>
  );
}
