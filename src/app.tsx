import { Button } from 'react-aria-components';

export function App() {
	return (
		<div className="flex items-center justify-center h-screen bg-zinc-950 text-zinc-50">
			<div className="flex flex-col items-center gap-y-2">
				<h1>
					Hello, <span className="underline">React Aria!</span>
				</h1>
				<Button
					onPress={() =>
						console.log("Hello! I'm using react-aria-components now. =)")
					}
					className="py-2 px-4 w-fit rounded-lg bg-lime-400 text-lime-950 hover:opacity-80 transition-opacity"
				>
					Press me
				</Button>
			</div>
		</div>
	);
}
