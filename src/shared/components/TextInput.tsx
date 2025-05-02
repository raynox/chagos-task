interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: React.ReactNode;
}

export default function TextInput({ value, onChange, placeholder, icon }: TextInputProps) {
  return (
    <div className="relative w-full max-w-md">
      {icon}
      <input
        type="text"
        placeholder={placeholder}
        className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
