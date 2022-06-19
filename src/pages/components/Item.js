import styled from "styled-components";
import { motion } from "framer-motion";

const FramerItem = {
	hidden: { scale: 0, opacity: 0 },
	show: {
		scale: 1,
		opacity: 1,
		transition: { type: "spring", duration: 0.5 },
	},
};

function Item({ nombre, unidad_medida, valor, fondo, color }) {
	return (
		<Wrapper variants={FramerItem} color={color} fondo={fondo}>
			<h5 className="title">{nombre}</h5>

			<header>
				<span className="valor">{valor}</span>

				<div className="unidad">
					{unidad_medida === "Porcentaje"
						? "%"
						: unidad_medida === "Dólar"
						? "Dolares"
						: unidad_medida}
				</div>
			</header>
		</Wrapper>
	);
}

export default Item;

const Wrapper = styled(motion.article)`
	cursor: pointer;
	padding: 2rem;
	background: var(--white);
	border-radius: var(--borderRadius);
	border-bottom: 5px solid ${(props) => props.color};
	border-left: 5px solid ${(props) => props.color};

	header {
		justify-content: space-around;
		display: flex;
		align-items: center;
	}
	.valor {
		color: ${(props) => props.color};
		font-weight: 700;
		font-size: 45px;
		display: block;
	}
	.title {
		margin: 0;
		text-transform: capitalize;
		text-align: center;
		margin-top: 0.5rem;
		border-right: 1px solid ${(props) => props.color};
		border-bottom: 1px solid ${(props) => props.color};
	}

	.unidad {
		width: 70px;
		height: 30px;
		font-size: 12px;
		background: ${(props) => props.fondo};
		border-radius: var(--borderRadius);
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
