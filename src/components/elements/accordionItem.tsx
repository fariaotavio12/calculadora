import { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

interface itemProps {
    id: string;
	title: string;
	children?: ReactNode;
}


const ItemAbrirFechar = ({ title, children , id = "1" }: itemProps) => {
	

	return (
		<Accordion type="single" collapsible>
			<AccordionItem value={id}>
				<AccordionTrigger>{title}</AccordionTrigger>
				<AccordionContent>{children}</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export default ItemAbrirFechar;
