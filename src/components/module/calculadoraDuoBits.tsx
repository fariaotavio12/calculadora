import FormGroup from "../elements/formGroups";
import { Input } from "../elements/input";
import { CalculadoraProps } from "./typeSchema";

export const CalculadoraDuoBits = ({ register, errors }: CalculadoraProps) => {
	return (
		<FormGroup label="Dados OP" flexWrap>
			<Input
				type="number"
				widthFull
				label="Qnt. Iorgute Duo Morango (kg)"
				placeholder=""
				{...register("apontamentoDuoBits.quantidadeIorgute")}
				notification={errors.apontamentoDuoBits?.quantidadeIorgute?.message}
			/>
			<Input
				type="number"
				widthFull
				label="Qnt. Iorgute BITS Duo Mor. 129g (un)"
				placeholder=""
				{...register("apontamentoDuoBits.quantidadeBITSMorango")}
				notification={errors.apontamentoDuoBits?.quantidadeBITSMorango?.message}
			/>
			<Input
				type="number"
				widthFull
				label="Qnt. BITS Chocodiscos 130 g (un)"
				placeholder=""
				{...register("apontamentoDuoBits.quantidadeBITSChocodiscos")}
				notification={errors.apontamentoDuoBits?.quantidadeBITSChocodiscos?.message}
			/>
			<Input
				type="number"
				widthFull
				label="Qnt. BITS Chocobal 130 g (un)"
				placeholder=""
				{...register("apontamentoDuoBits.quantidadeBITSChocobol")}
				notification={errors.apontamentoDuoBits?.quantidadeBITSChocobol?.message}
			/>
		</FormGroup>
	);
};

export const ValorApontamentoDuoBits = ({ watch }: CalculadoraProps) => {
	return (
		<FormGroup label="Resultado" flexWrap>
			<Input
				type="number"
				widthFull
				step="0.01"
				readOnly
				value={watch("apontamentoDuoBits.valorMorango")}
				label="Valor Apont. Bicamada Duo Morango 129g  (kg)"
				placeholder=""
			/>
			<Input
				type="number"
				widthFull
				step="0.01"
				readOnly
				value={watch("apontamentoDuoBits.valorPessego")}
				label="Valor Apont. Iorgute BITS Chocodiscos 130g (kg)"
			/>
			<Input
				type="number"
				widthFull
				step="0.01"
				readOnly
				value={watch("apontamentoDuoBits.valorAmeixa")}
				label="Valor Apont. Iorgute BITS Chocobal 130g (kg)"
			/>
		</FormGroup>
	);
};

export const calculoDuoBits = (
	totalIorguteMorango: number,
	quantidadeMorango: number,
	quantidadeChocodiscos: number,
	quantidadeChocobol: number
) => {
	var valueMorango =
		((quantidadeMorango * 0.11) /
			(quantidadeMorango * 0.11 + quantidadeChocodiscos * 0.115 + quantidadeChocobol * 0.115)) *
		totalIorguteMorango;

	var valuePessego =
		((quantidadeChocodiscos * 0.115) /
			(quantidadeMorango * 0.11 + quantidadeChocodiscos * 0.115 + quantidadeChocobol * 0.115)) *
		totalIorguteMorango;

	var valueAmeixa =
		((quantidadeChocobol * 0.115) /
			(quantidadeMorango * 0.11 + quantidadeChocodiscos * 0.115 + quantidadeChocobol * 0.115)) *
		totalIorguteMorango;

	console.log(valueMorango);

	return {
		valueMorango: valueMorango.toFixed(2),
		valuePessego: valuePessego.toFixed(2),
		valueAmeixa: valueAmeixa.toFixed(2),
	};
};
