import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Typography } from "./typography";

interface FormGroupProps {
	children: React.ReactNode;
	label?: string;
	isVisible?: boolean;
	isColl?: boolean;
	flexWrap?: boolean;
	className?: string;
}

const FormGroup = ({ children, label, isVisible = true, isColl, flexWrap, className }: FormGroupProps) => {
	return (
		<>
			<AnimatePresence initial={false}>
				{isVisible && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="w-full flex flex-col bg-background rounded-md border shadow-sm accordion-down"
					>
						{label && (
							<div className="w-full p-3 border-b ">
								<Typography currentText display="prMd" weight="medium" className=" capitalize ">
									{label}
								</Typography>
								{/* <button onClick={toggleCollapse}>Toggle Collapse</button> */}
							</div>
						)}
						<div
							className={cn(
								
								`flex flex-wrap ${flexWrap ? "" : "md:flex-nowrap"} gap-6 p-4 items-start ${
									isColl && "flex-col"
								}`, className
							)}
						>
							{children}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default FormGroup;
