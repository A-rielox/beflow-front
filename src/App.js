import styled from "styled-components";
import TypeWriter from "./pages/components/TypeWriter";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<Wrapper>
			<TypeWriter />

			<Dashboard />
		</Wrapper>
	);
}

export default App;

const Wrapper = styled.section`
	width: 90vw;
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem 0;

	.main {
		width: 90vw;
		margin: 0 auto;
		padding: 2rem 0;
	}

	@media (min-width: 992px) {
	}
`;
