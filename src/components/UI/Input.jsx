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
        className="w-full rounded-lg bg-slate-100 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-theme focus:ring-4 focus:ring-theme/20"
      />
    </div>
  );
}
