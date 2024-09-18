import FormGroup from "../elements/formGroups";
import { Input } from "../elements/input";
import { CalculadoraProps } from "./typeSchema";

export const CalculadoraTripoZero = ({ register, errors }: CalculadoraProps) => {
	return (
		<FormGroup label="Dados OP" flexWrap>
			<Input
				type="number"
				widthFull
				label="Quantidade total de base branca (Kg)"
				placeholder=""
				{...register("apontamentoTriploZero.quantidadeBaseBranca")}
				notification={errors.apontamentoTriploZero?.quantidadeBaseBranca?.message}
			/>
			<Input
				type="number"
				widthFull
				label="Quantidade Iorgute TPZ Morango 480g (un)"
				placeholder=""
				{...register("apontamentoTriploZero.quantidadeTPZMorango")}
				notification={errors.apontamentoTriploZero?.quantidadeTPZMorango?.message}
			/>
			<Input
				type="number"
				widthFull
				label="Quantidade Iorgute TPZ Pêssego 480g (un)"
				placeholder=""
				{...register("apontamentoTriploZero.quantidadeTPZPessego")}
				notification={errors.apontamentoTriploZero?.quantidadeTPZPessego?.message}
			/>
			<Input
				type="number"
				widthFull
				label="Quantidade Iorgute TPZ Ameixa 480g (un)"
				placeholder=""
				{...register("apontamentoTriploZero.quantidadeTPZAmeixa")}
				notification={errors.apontamentoTriploZero?.quantidadeTPZAmeixa?.message}
			/>
		</FormGroup>
	);
};

export const ValorApontamentoTriploZero = ({ watch }: CalculadoraProps) => {
	return (
		<FormGroup label="Resultado" flexWrap>
			<Input
				type="number"
				widthFull
				step="0.01"
				readOnly
				value={watch("apontamentoTriploZero.valorTPZMorango")}
				label="Valor Apont. Iorgute TPZ Morango 480 g (kg)"
				placeholder=""
			/>
			<Input
				type="number"
				widthFull
				step="0.01"
				readOnly
				value={watch("apontamentoTriploZero.valorTPZPessego")}
				label="Valor Apont. Iorgute TPZ Pessego 480 g (kg)"
			/>
			<Input
				type="number"
				widthFull
				step="0.01"
				readOnly
				value={watch("apontamentoTriploZero.valorTPZAmeixa")}
				label="Valor Apont. Iorgute TPZ Ameixa 480 g (kg)"
			/>
		</FormGroup>
	);
};

export const calculoTriploZero = (
	totalBase: number,
	quantidadeMorango: number,
	quantidadePessego: number,
	quantidadeAmeixa: number
) => {
	
	var valueMorango = quantidadeMorango / ((quantidadeMorango + quantidadePessego + quantidadeAmeixa)) * totalBase
	var valuePessego = quantidadePessego / ((quantidadeMorango + quantidadePessego + quantidadeAmeixa)) * totalBase
	var valueAmeixa = quantidadeAmeixa / ((quantidadeMorango + quantidadePessego + quantidadeAmeixa)) * totalBase

	console.log(valueMorango);
	
	return { 
		valueMorango: valueMorango.toFixed(2), 
		valuePessego: valuePessego.toFixed(2),
		valueAmeixa : valueAmeixa.toFixed(2),
	  };
};
