import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../elements/button";
import { Combobox } from "../elements/combobox";
import FormGroup from "../elements/formGroups";
import { CalculadoraBandeija, ValorApontamentoBandeija, calculoBandeja } from "./calculadoraBandeija";
import { CalculadoraDuoBits, ValorApontamentoDuoBits, calculoDuoBits } from "./calculadoraDuoBits";
import { CalculadoraQueijoDia, ValorApontamentoQueijoDias, calculoQueijoDias } from "./calculadoraQueijoDia";
import { CalculadoraTripoZero, ValorApontamentoTriploZero, calculoTriploZero } from "./calculadoraTriploZero";
import { ActiveSchema } from "./typeSchema";

const options = [
	{ id: 1, label: "Apontamento PI dos queijos DIA" },
	{ id: 2, label: "Apontamento bandeja - PS" },
	{ id: 3, label: "Apontamento triplo zero" },
	{ id: 4, label: "Apontamento Duo/Bits" },
];

const Calculadora = () => {
	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		reset,
		watch,
		formState: { errors },
	} = useForm<z.infer<typeof ActiveSchema>>({
		resolver: zodResolver(ActiveSchema),
	});

	const onSubmit = (data: any) => {
		console.log(data);
		if (watch("optionsApontamento.id") == 1) {
			//@ts-ignore
			var result = calculoQueijoDias(
				//@ts-ignore
				+watch("apontamentoQueijoDia.quantidadePI"),
				//@ts-ignore
				+watch("apontamentoQueijoDia.quantidadeReprocesso"),
				//@ts-ignore
				+watch("apontamentoQueijoDia.quantidadePaDia"),
				//@ts-ignore
				+watch("apontamentoQueijoDia.quantidadePaCM")
			);

			setValue("apontamentoQueijoDia.valorPaDia", result.valueApoDia.toString());
			setValue("apontamentoQueijoDia.valorPaCM", result.valueApoCM.toString());
		}
		if (watch("optionsApontamento.id") == 2) {
			var resultBandeija = calculoBandeja(
				//@ts-ignore
				+watch("apontamentoBandeija.quantidadePs"),
				//@ts-ignore
				+watch("apontamentoBandeija.quantidadePaMorango"),
				//@ts-ignore
				+watch("apontamentoBandeija.quantidadePaMix")
			);

			setValue("apontamentoBandeija.valorPsMorango", resultBandeija.valuePSMorango.toString());
			setValue("apontamentoBandeija.valorPsMix", resultBandeija.valuePSMix.toString());
		}
		if (watch("optionsApontamento.id") == 3) {
			var resultTriplo = calculoTriploZero(
				//@ts-ignore
				+watch("apontamentoTriploZero.quantidadeBaseBranca"),
				//@ts-ignore
				+watch("apontamentoTriploZero.quantidadeTPZMorango"),
				//@ts-ignore
				+watch("apontamentoTriploZero.quantidadeTPZPessego"),
				//@ts-ignore
				+watch("apontamentoTriploZero.quantidadeTPZAmeixa")
			);

			setValue("apontamentoTriploZero.valorTPZMorango", resultTriplo.valueMorango.toString());
			setValue("apontamentoTriploZero.valorTPZPessego", resultTriplo.valuePessego.toString());
			setValue("apontamentoTriploZero.valorTPZAmeixa", resultTriplo.valueAmeixa.toString());
		}
		if (watch("optionsApontamento.id") == 4) {
			var resultDuoBits = calculoDuoBits(
				//@ts-ignore
				+watch("apontamentoDuoBits.quantidadeIorgute"),
				//@ts-ignore
				+watch("apontamentoDuoBits.quantidadeBITSMorango"),
				//@ts-ignore
				+watch("apontamentoDuoBits.quantidadeBITSChocodiscos"),
				//@ts-ignore
				+watch("apontamentoDuoBits.quantidadeBITSChocobol")
			);

			setValue("apontamentoDuoBits.valorMorango", resultDuoBits.valueMorango.toString());
			setValue("apontamentoDuoBits.valorPessego", resultDuoBits.valuePessego.toString());
			setValue("apontamentoDuoBits.valorAmeixa", resultDuoBits.valueAmeixa.toString());
		}
	};

	return (
		<form className="w-full h-auto flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
			<FormGroup label="Tipo de calculo" flexWrap>
				<Combobox
					className=""
					displayField={"label"}
					index="id"
					label="Selecione o apontamento"
					options={options}
					value={watch("optionsApontamento")}
					onChange={(e: any) => {
						console.log(e);
						reset();
						if (e.id == getValues("optionsApontamento")) {
							setValue("optionsApontamento", undefined);
						} else setValue("optionsApontamento", e);
					}}
					notification={errors.optionsApontamento?.message}
				/>
			</FormGroup>

			{watch("optionsApontamento.id") == 1 && (
				<CalculadoraQueijoDia register={register} errors={errors} watch={watch} />
			)}
			{watch("optionsApontamento.id") == 2 && (
				<CalculadoraBandeija register={register} errors={errors} watch={watch} />
			)}
			{watch("optionsApontamento.id") == 3 && (
				<CalculadoraTripoZero register={register} errors={errors} watch={watch} />
			)}
			{watch("optionsApontamento.id") == 4 && (
				<CalculadoraDuoBits register={register} errors={errors} watch={watch} />
			)}
			{watch("optionsApontamento.id") != undefined && <Button>Calcular</Button>}

			{watch("apontamentoQueijoDia.valorPaCM") != undefined && (
				<ValorApontamentoQueijoDias register={register} errors={errors} watch={watch} />
			)}
			{watch("apontamentoBandeija.valorPsMix") != undefined && (
				<ValorApontamentoBandeija register={register} errors={errors} watch={watch} />
			)}
			{watch("apontamentoTriploZero.valorTPZMorango") != undefined && (
				<ValorApontamentoTriploZero register={register} errors={errors} watch={watch} />
			)}
			{watch("apontamentoDuoBits.valorMorango") != undefined && (
				<ValorApontamentoDuoBits register={register} errors={errors} watch={watch} />
			)}
		</form>
	);
};

export default Calculadora;
