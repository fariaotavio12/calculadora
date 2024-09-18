import FormGroup from "../elements/formGroups";
import { Input } from "../elements/input";
import { CalculadoraProps } from "./typeSchema";

export const CalculadoraBandeija = ({ register, errors }: CalculadoraProps) => {
	return (
		<FormGroup label="Dados OP" flexWrap>
			<Input
				type="number"
				widthFull
				step="0.01"
				label="Quantidade total de PS"
				placeholder=""
				{...register("apontamentoBandeija.quantidadePs")}
				notification={errors.apontamentoBandeija?.quantidadePs?.message}
			/>
			<Input
				type="number"
				widthFull
				step="0.01"
				label="Quantidade de PA - Morango (Un)"
				placeholder=""
				{...register("apontamentoBandeija.quantidadePaMorango")}
				notification={errors.apontamentoBandeija?.quantidadePaMorango?.message}
			/>
			<Input
				type="number"
				widthFull
				step="0.01"
				label="Quantidade de PA - Mix (Un)"
				placeholder=""
				{...register("apontamentoBandeija.quantidadePaMix")}
				notification={errors.apontamentoBandeija?.quantidadePaMix?.message}
			/>
		</FormGroup>
	);
};

export const ValorApontamentoBandeija = ({ watch }: CalculadoraProps) => {
	return (
		<FormGroup label="Resultado" flexWrap>
			<Input
				type="number"
				widthFull
				readOnly
				value={watch("apontamentoBandeija.valorPsMorango")}
				label="Valor para apontamento de PS no Morango (kg)"
				placeholder=""
			/>
			<Input
				type="number"
				widthFull
				readOnly
				value={watch("apontamentoBandeija.valorPsMix")}
				label="Valor para apontamento de PS no Mix (kg)"
			/>
		</FormGroup>
	);
};

export const calculoBandeja = (
	totalPS: number,
	quantidadePAMorango: number,
	quantidadePAMix: number,
) => {
	
	var valuePSMorango = quantidadePAMorango / (quantidadePAMorango + quantidadePAMix ) * totalPS
	var valuePSMix = quantidadePAMix / (quantidadePAMorango + quantidadePAMix ) * totalPS
	
	return { 
		valuePSMorango: valuePSMorango.toFixed(2), 
		valuePSMix: valuePSMix.toFixed(2) 
	  };
};

