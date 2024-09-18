import { IconNotFound } from "@/assets/icons";
import { Button } from "@/components/elements/button";
import { Command, CommandGroup, CommandInput, CommandItem } from "@/components/elements/command";
import { Label } from "@/components/elements/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/elements/popover";
import { Typography } from "@/components/elements/typography";
import { cn } from "@/lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

// Definindo um tipo genérico para os itens da opção

// Definindo um tipo genérico para o componente ComboboxDemo
interface ComboboxDemoProps<T> {
	options?: T[];
	onChange: (value: T) => void;
	placeholder?: string;
	value?: any;
	label?: string;
	displayField: keyof T; // Campo a ser exibido na interface
	index?: string;
	notification?: string;
	disabled?: boolean;
	className?: string;
	widthFull?: boolean;
}

export function Combobox<T>({
	value,
	label,
	options,
	notification,
	onChange = () => {},
	placeholder = "Selecione",
	displayField,
	disabled,
	className,
	index = "id",
	widthFull,
}: ComboboxDemoProps<T>) {
	const [open, setOpen] = React.useState(false);

	const exibeNome = () => {
		if (value && options) {
			const fa =
				options?.find((o) => String(o[displayField]) === value)?.[displayField] || value[displayField];
			if (fa == "undefined" || fa == undefined || fa == "") return placeholder;
			return fa.toString().toLowerCase();
		} else {
			return placeholder;
		}
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild className={`w-full min-w-32 ${widthFull ? "" : "md:max-w-60"}`}>
				<div className=" flex flex-col gap-1">
					<div className=" flex flex-col gap-4">
						{label && <Label>{label}</Label>}
						<Button
							variant={notification ? "error" : "outline"}
							type="button"
							role="combobox"
							aria-expanded={open}
							disabled={disabled}
							className={cn("w-full justify-between font-normal text-muted-foreground capitalize", className)}
						>
							<span className="normal-case w-auto truncate"> {exibeNome()}</span>
							<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</div>
					{notification && (
						<Typography className="text-destructive " display="prXsmall">
							{notification}
						</Typography>
					)}
				</div>
			</PopoverTrigger>
			{!disabled && (
				<PopoverContent className={`PopoverContent p-0  ${notification ? "-mt-5" : ""}`}>
					<Command className=" max-w-none max-h-52 ">
						<CommandInput placeholder={placeholder} className="h-9" />
						{options && options.length === 0 && (
							<div className="w-full min-h-16 flex items-center justify-center">
								<IconNotFound />
							</div>
						)}
						<CommandGroup className="h-auto">
							{Array.isArray(options)
								? options?.map((item, valuen) => (
										<CommandItem
											// eslint-disable-next-line @typescript-eslint/ban-ts-comment
											//@ts-ignore
											key={String(item[index]) ?? valuen}
											value={String(item[displayField]) ?? index}
											onSelect={() => {
												onChange(item);
												setOpen(false);
											}}
										>
											<span className="first-letter:uppercase lowercase">{String(item[displayField])}</span>
											<CheckIcon
												className={cn(
													"ml-auto h-4 w-4",
													value && value[displayField] === String(item[displayField])
														? "opacity-100"
														: "opacity-0"
												)}
											/>
										</CommandItem>
								  ))
								: null}
						</CommandGroup>
					</Command>
				</PopoverContent>
			)}
		</Popover>
	);
}
