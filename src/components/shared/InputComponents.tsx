import { InputHTMLAttributes, forwardRef } from "react";

interface InputComponentsProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

const InputComponents = forwardRef<HTMLInputElement, InputComponentsProps>(
	({ label, ...props }, ref) => (
		<div className="flex flex-col gap-1">
			{label && <label htmlFor={props.id || props.name}>{label}</label>}
			<input ref={ref} className="border-2 px-4 py-2 rounded" {...props} />
		</div>
	)
);

export default InputComponents;
