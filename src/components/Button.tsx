interface IButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, ...props }: IButtonProps) {
  return (
    <button type="button" className="bg-red-500 rounded-lg py-3 px-5 text-white hover:bg-red-500/90" {...props}>
      {label}
    </button>
  );
}
