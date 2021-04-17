export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-4 rounded-full bg-light-purple font-bold"
    >
      {children}
    </button>
  );
}
