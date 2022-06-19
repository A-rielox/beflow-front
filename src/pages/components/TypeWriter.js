import Typewriter from "typewriter-effect";

import styled from "styled-components";
import { motion } from "framer-motion";

const container = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			duration: 1,
		},
	},
};

const titleContainer = {
	hidden: {
		x: -200,
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

const TypeWriter = () => {
	return (
		<Wrapper>
			<motion.div
				className="motion"
				variants={container}
				initial="hidden"
				animate="show"
			>
				<motion.div
					className="title-app"
					variants={titleContainer}
					initial="hidden"
					animate="show"
				>
					Tus Indicadores
				</motion.div>

				<div className="text-wrapper">
					<Typewriter
						options={{
							autoStart: true,
							loop: true,
						}}
						onInit={(typewriter) => {
							typewriter
								.typeString(`<span>UF</span>`)
								.pauseFor(2000)
								.deleteAll()
								.typeString(`<span>Dólar Observado</span>`)
								.pauseFor(2000)
								.deleteAll()
								.typeString(`<span>Dólar Acuerdo</span>`)
								.pauseFor(2000)
								.deleteAll()
								.typeString(`<span>Euro</span>`)
								.pauseFor(2000)
								.deleteAll()
								.typeString(`<span>UTM</span>`)
								.pauseFor(2000)
								.deleteAll()
								.typeString(`<span>IMACEC</span>`)
								.pauseFor(2000)
								.deleteAll()
								.typeString(`<span>Libra de Cobre</span>`)
								.pauseFor(2000)
								.deleteAll()
								.typeString(`<span>Tasa de desempleo</span>`)
								.pauseFor(2000)
								.deleteAll()
								.typeString(`<span>Bitcoin</span>`)
								.pauseFor(2000)
								.deleteAll()
								.start();
						}}
					/>
				</div>
			</motion.div>
		</Wrapper>
	);
};

export default TypeWriter;

const Wrapper = styled.article`
	.motion {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-bottom: 3rem;

		.title-app {
			font-size: 3rem;
		}

		@media (max-width: 550px) {
			justify-content: center;

			.text-wrapper {
				display: none;
			}

			.title-app {
				font-size: 2rem;
			}
		}
	}
`;
