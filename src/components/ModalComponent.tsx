import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputComponents from "./shared/InputComponents";
import { IoCloseSharp } from "react-icons/io5";

type FormData = {
	from_name: string;
	from_email: string;
	message: string;
};

type CloseModelProps = {
	onClose: () => void;
};

const ModalComponent: React.FC<CloseModelProps> = ({ onClose }) => {
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>();

	const sendEmail: SubmitHandler<FormData> = async (data) => {
		setLoading(true);
		try {
			await emailjs.send(
				"service_4cpcq1p",
				"template_10byuml",
				data,
				"3ugupnEwyNTYrvO3m"
			);
			toast.success("Request sent successfully!");
			reset();
			setTimeout(() => {
				onClose();
			}, 3000);
		} catch (error) {
			const errorMessage =
				error instanceof Error
					? error.message
					: "An unexpected error occurred.";
			toast.error(`Failed to send request: ${errorMessage}`);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className="w-full h-full fixed inset-0 flex items-center justify-center bg-black/40">
			<div className="text-black bg-white lg:w-1/3 w-4/5 sm:w-1/2 px-6 py-4 rounded-xl relative">
				<span className="absolute right-0 top-0">
					<IoCloseSharp
						className="text-5xl text-red-700 p-2 cursor-pointer"
						onClick={onClose}
					/>
				</span>
				<h1 className="text-2xl font-bold text-center p-4">
					Please fill the form
				</h1>
				<form
					onSubmit={handleSubmit(sendEmail)}
					className="flex flex-col gap-4 px-5 pb-5"
				>
					<div className="flex flex-col gap-1">
						<InputComponents
							label="Name"
							type="text"
							placeholder="Enter your name"
							{...register("from_name", { required: "Name is required" })}
						/>
						{errors.from_name && <span>{errors.from_name.message}</span>}
					</div>
					<div className="flex flex-col gap-1">
						<InputComponents
							label="Email"
							type="email"
							placeholder="Enter your email"
							{...register("from_email", {
								required: "Email is required",
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
									message: "Invalid email address",
								},
							})}
						/>
						{errors.from_email && <span>{errors.from_email.message}</span>}
					</div>
					<div>
						<button
							type="submit"
							className="bg-blue-700 px-4 py-2 rounded-lg text-xl text-white"
						>
							{" "}
							{loading ? "Processing..." : "Send message"}
						</button>
					</div>
				</form>
			</div>
			<ToastContainer />
		</div>
	);
};

export default ModalComponent;
