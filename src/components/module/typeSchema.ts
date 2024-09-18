import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { z } from "zod";

export const ActiveSchema = z.object({
	optionsApontamento: z
		.object({
			id: z.number().optional(),
			label: z.string().optional(),
		})
		.optional(),
	apontamentoQueijoDia: z
		.object({
			quantidadePI: z.string().optional(),
			quantidadeReprocesso: z.string().optional(),
			quantidadePaDia: z.string().optional(),
			quantidadePaCM: z.string().optional(),
			valorPaDia: z.string().optional(),
			valorPaCM: z.string().optional(),
		})
		.optional(),
	apontamentoBandeija: z
		.object({
			quantidadePs: z.string().optional(),
			quantidadePaMorango: z.string().optional(),
			quantidadePaMix: z.string().optional(),
			valorPsMorango: z.string().optional(),
			valorPsMix: z.string().optional(),
		})
		.optional(),
	apontamentoTriploZero: z
		.object({
			quantidadeBaseBranca: z.string().optional(),
			quantidadeTPZMorango: z.string().optional(),
			quantidadeTPZPessego: z.string().optional(),
			quantidadeTPZAmeixa: z.string().optional(),
			valorTPZMorango: z.string().optional(),
			valorTPZPessego: z.string().optional(),
			valorTPZAmeixa: z.string().optional(),
		})
		.optional(),
	apontamentoDuoBits: z
		.object({
			quantidadeIorgute: z.string().optional(),
			quantidadeBITSMorango: z.string().optional(),
			quantidadeBITSChocodiscos: z.string().optional(),
			quantidadeBITSChocobol: z.string().optional(),
			valorMorango: z.string().optional(),
			valorPessego: z.string().optional(),
			valorAmeixa: z.string().optional(),
		})
		.optional(),
});
// .refine((data) => data.optionsApontamento, {
// 	message: "Campo de tipo obrigatório.",
// 	path: ["tipo"],
// });

export type FormSchema = z.infer<typeof ActiveSchema>;

export interface CalculadoraProps {
	watch: UseFormWatch<FormSchema>
	register: UseFormRegister<FormSchema>;
	errors: FieldErrors<FormSchema>;
	
}