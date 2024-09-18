
import Calculadora from "./components/module/calculadora";
import { ThemeProvider } from "./lib/context/theme";

function App() {
	return (
		<>
			<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
				<Calculadora />
			</ThemeProvider>
		</>
	);
}

export default App;
