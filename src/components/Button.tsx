type Props = {
  children: React.ReactNode;
};

export default function Button({
  children,
  ...props
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props}>{children}</button>;
}
