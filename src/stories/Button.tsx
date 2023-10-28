interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({ size = 'medium', label, ...props }: ButtonProps) => {
  console.log('size', size);
  return (
    <button type="button" className="bg-red-500 text-white" {...props}>
      {label}
    </button>
  );
};
