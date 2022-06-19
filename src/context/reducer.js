import { GET_INDICADORES_BEGIN, GET_INDICADORES_SUCCESS } from "./actions";

const reducer = (state, action) => {
	if (action.type === GET_INDICADORES_BEGIN) {
		// isLoading: true -- por doble check
		return { ...state, isLoading: true };
	}

	if (action.type === GET_INDICADORES_SUCCESS) {
		const indicadoresFull = action.payload;

		const toPass = [
			"uf",
			"dolar",
			"dolar_intercambio",
			"euro",
			"utm",
			"imacec",
			"libra_cobre",
			"tasa_desempleo",
			"bitcoin",
		];
		let temp = [];
		let i = 0;
		let colors = [
			"#472D30",
			"#114B5F",
			"#456990",
			"#6FD08C",
			"#F45B69",
			"#E26D5C",
			"#C9CBA3",
			"#FFE1A8",
			"#E26D5C",
			"#723D46",
			"#BFD7EA",
			"#D52941",
			"#456990",
			"#F865B0",
			"#839788",
		];
		let fondo = [
			"#472d303c",
			"#114c5f39",
			"#45699032",
			"#6fd08c3a",
			"#f45b6840",
			"#e26e5c31",
			"#c9cba335",
			"#ffe1a83c",
			"#e26e5c39",
			"#723d4639",
			"#bfd7ea3a",
			"#d529403c",
			"#45699032",
			"#f865b135",
			"#83978837",
		];

		for (const [k, v] of Object.entries(indicadoresFull)) {
			if (toPass.includes(k)) {
				temp.push({ ...v, color: colors[i], fondo: fondo[i] });
			}

			i += 1;
		}

		return {
			...state,
			isLoading: false,
			indicadores: temp,
		};
	}

	throw new Error(`no such action :${action.type}`);
};

export default reducer;
