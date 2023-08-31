export const ToggleButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
}> = ({ children, onClick, selected }) => {
  return (
    <div
      className={`h-20 border font-maison-neue-medium text-xl leading-6 rounded-lg flex items-center justify-center cursor-pointer ${
        selected ? 'border-4 border-gray-900' : 'border-lightgray-700'
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
