export default function Input({ label, id, ...props }) {
  return (
    <div className="control">
      <label
        htmlFor={id}
        className="mb-2 block text-lg font-semibold text-slate-900"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        required
        {...props}
        type={props.type || "text"}
        placeholder={props.placeholder || ""}
        className="w-full rounded-xl outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 text-slate-900 bg-slate-100 px-4 py-3 rounded"
      />
    </div>
  );
}
