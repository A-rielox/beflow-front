import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./components/Loading";
import Item from "./components/Item";
import styled from "styled-components";
import { motion } from "framer-motion";

const container = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
			duration: 0.5,
		},
	},
};

const Dashboard = () => {
	const { getIndicadores, isLoading, indicadores } = useAppContext();

	useEffect(() => {
		getIndicadores();
		// eslint-disable-next-line
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Wrapper>
			<motion.div
				className="motion"
				variants={container}
				initial="hidden"
				animate="show"
			>
				{indicadores.map((item, index) => {
					return <Item key={index} i={index} {...item} />;
				})}
			</motion.div>
		</Wrapper>
	);
};

export default Dashboard;

const Wrapper = styled(motion.section)`
	.motion {
		display: grid;
		row-gap: 2rem;

		@media (min-width: 700px) {
			grid-template-columns: 1fr 1fr;
			column-gap: 1rem;
		}
		@media (min-width: 1100px) {
			grid-template-columns: 1fr 1fr 1fr;
			column-gap: 1rem;
		}
	}
`;
