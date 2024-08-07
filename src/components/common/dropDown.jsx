const Dropdown = ({ options = [], placeholder, selected, onChange }) => {
  return (
    <div className="relative text-base font-light text-gray-600">
      <select
        className="cursor-pointer block appearance-none w-full bg-white border border-gray-200 px-5 py-3 pr-8 rounded leading-tight 
        focus:outline-none focus:bg-white focus:border-gray-500 hover:bg-gray-50"
        value={selected} // Use value instead of selected on option
        onChange={onChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M7 10l5 5 5-5H7z"/>
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
