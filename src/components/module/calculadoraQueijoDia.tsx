import FormGroup from "../elements/formGroups";
import { Input } from "../elements/input";
import { CalculadoraProps } from "./typeSchema";

export const CalculadoraQueijoDia = ({ register, errors }: CalculadoraProps) => {
	return (
		<FormGroup label="Dados OP" flexWrap>
			<Input
				type="number"
				step="0.01"
				widthFull
				label="Quantidade total de PI"
				placeholder=""
				{...register("apontamentoQueijoDia.quantidadePI")}
				notification={errors.apontamentoQueijoDia?.quantidadePI?.message}
			/>
			<Input
				type="number"
				step="0.01"
				widthFull
				label="Quantidade de reprocesso"
				placeholder=""
				{...register("apontamentoQueijoDia.quantidadeReprocesso")}
				notification={errors.apontamentoQueijoDia?.quantidadeReprocesso?.message}
			/>
			<Input
				type="number"
				step="0.01"
				widthFull
				label="Quantidade de PA Dia"
				placeholder=""
				{...register("apontamentoQueijoDia.quantidadePaDia")}
				notification={errors.apontamentoQueijoDia?.quantidadePaDia?.message}
			/>
			<Input
				type="number"
				step="0.01"
				widthFull
				label="Quantidade de PA CM"
				placeholder=""
				{...register("apontamentoQueijoDia.quantidadePaCM")}
				notification={errors.apontamentoQueijoDia?.quantidadePaCM?.message}
			/>
		</FormGroup>
	);
};

export const ValorApontamentoQueijoDias = ({ watch }: CalculadoraProps) => {
	return (
		<FormGroup label="Resultado" flexWrap>
			<Input
				type="number"
				widthFull
				readOnly
				value={watch("apontamentoQueijoDia.valorPaDia")}
				label="Valor para apontamento de PA - DIA (kg)"
				placeholder=""
			/>
			<Input
				type="number"
				widthFull
				readOnly
				label="Valor para apontamento de PA - CM (kg)"
				placeholder=""
				value={watch("apontamentoQueijoDia.valorPaCM")}
			/>
		</FormGroup>
	);
};

export const calculoQueijoDias = (
	totalPI: number,
	quantidadeReprocesso: number,
	quantidadePaDIA: number,
	quantidadePaCM: number
) => {
	
	var valueApoDia = (quantidadePaDIA / (quantidadePaCM + quantidadePaDIA)) * (totalPI - quantidadeReprocesso);
	var valueApoCM = (quantidadePaCM / (quantidadePaCM + quantidadePaDIA)) * (totalPI - quantidadeReprocesso);
	
	return { 
		valueApoDia: valueApoDia.toFixed(2), 
		valueApoCM: valueApoCM.toFixed(2) 
	  };
};


