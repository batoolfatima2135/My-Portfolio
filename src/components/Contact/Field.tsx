export const Field = ({
  id,
  name,
  placeholder,
  type,
  required,
}: {
  id: string;
  name: string;
  placeholder: string;
  type: string;
  required?: boolean;
}) => {
  return (
    <div>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-black/20
          px-4
          py-3
          text-white
          placeholder:text-gray-500
          outline-none
          transition
          duration-300
          focus:border-purple-400/60
          focus:ring-2
          focus:ring-purple-500/20
        "
      />
    </div>
  );
};
