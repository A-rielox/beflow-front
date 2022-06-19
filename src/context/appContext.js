import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import { GET_INDICADORES_BEGIN, GET_INDICADORES_SUCCESS } from "./actions";

export const initialState = {
	isLoading: true,
	indicadores: {},
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getIndicadores = async () => {
		let url = `https://mindicador.cl/api`;

		dispatch({ type: GET_INDICADORES_BEGIN });

		try {
			const response = await fetch(url);
			const data = await response.json();

			dispatch({
				type: GET_INDICADORES_SUCCESS,
				payload: data,
			});
		} catch (error) {
			console.log(error.response);
		}
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				getIndicadores,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};

export { AppProvider };
