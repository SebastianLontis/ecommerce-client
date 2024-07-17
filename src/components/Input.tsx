
const Input = ({ className }: { className: string }, ...props: any[]) => {
  return (
    <input className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className}`} {...props} />
  );
};

export default Input;
