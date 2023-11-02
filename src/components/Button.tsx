export default function Button({
  size = 'medium',
  label,
  ...props
}: {
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick: () => void;
}) {
  console.log('size', size);
  return (
    <button type="button" className="bg-red-500 text-white" {...props}>
      {label}
    </button>
  );
}
