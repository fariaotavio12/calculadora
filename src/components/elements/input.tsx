import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Label } from "./label";
import { Typography } from "./typography";

const inputVariants = cva(
	`flex w-full items-center overflow-hidden rounded-md border bg-background
	px-3 py-1 text-sm shadow-sm  file:border-0 file:bg-background 
	file:text-sm file:font-medium placeholder:text-muted-foreground focus-within:ring-1 
	focus-visible:outline-none disabled:cursor-not-allowed  gap-2`,
	{
		variants: {
			variant: {
				default: "border-input focus-within:border-ring focus-within:ring-ring",
				destructive: "border-destructive focus-within:border-destructive focus-within:ring-destructive",
			},
			inputSize: {
				default: "h-10",
				sm: "h-8",
				lg: "h-12",
			},
			readOnly: {
				true : "bg-slate-100"
			},
			
		},
		defaultVariants: {
			variant: "default",
			inputSize: "default",
		},
	}
);

interface CustomInputProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof inputVariants> {
	notification?: string;
	label?: string;
	decorationLeft?: React.ReactNode;
	decorationRight?: React.ReactNode;
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	inline?: boolean;
	widthFull?: boolean;
	readOnly?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, CustomInputProps>(
	(
		{
			notification,
			label,
			decorationLeft,
			decorationRight,
			iconLeft,
			iconRight,
			inputSize,
			className,
			inline,
			hidden,
			widthFull,
			readOnly,
			...inputProps
		},
		ref
	) => {
		return (
			<div className={cn("w-full min-w-32 flex items-end justify-between gap-3", className, hidden ? "hidden" : "" , widthFull ? "" : "md:max-w-60" , )}>
				<div className=" w-full flex flex-col gap-1">
					<div className={cn("w-full flex flex-col gap-4", inline && "flex-row items-center")}>
						{label && <Label htmlFor={inputProps?.id}>{label}</Label>}
						<div className="w-full flex items-center gap-2">
							{decorationLeft && <>{decorationLeft}</>}
							<div
								className={cn(
									inputVariants({
										inputSize,
										variant: notification ? "destructive" : "default",
									}),
									"px-4",
									inputProps.disabled ? "bg-secondary/50 shadow-none " : "",
									readOnly ? "bg-slate-100" : ""
								)}
							>
								{iconLeft && <>{iconLeft}</>}

								<input
									className={"appearance-none w-full h-full bg-transparent outline-none disabled:cursor-not-allowed disabled:opacity-50 "}
									ref={ref}
									{...inputProps}
								/>

								{iconRight && <>{iconRight}</>}
							</div>
							{decorationRight && <>{decorationRight}</>}
						</div>
					</div>
					{notification && (
						<Typography className="text-destructive" display="prXsmall">
							{notification}
						</Typography>
					)}
				</div>
			</div>
		);
	}
);

export { Input };

