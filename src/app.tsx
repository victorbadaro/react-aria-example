import { Button } from './components/button';

export function App() {
	return (
		<div className="flex items-center justify-center h-screen bg-zinc-950 text-zinc-50">
			<Button className="bg-lime-400 text-lime-950 hover:bg-lime-500">
				Button
			</Button>
			<Button variant="primary">Button</Button>
			<Button variant="secondary">Button</Button>
			<Button variant="destructive">Button</Button>
		</div>
	);
}
