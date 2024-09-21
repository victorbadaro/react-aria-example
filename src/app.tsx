import { Button } from './components/button';

export function App() {
	return (
		<div className="min-h-screen bg-zinc-950 text-zinc-50">
			<main className="container mx-auto py-10">
				<h1 className="mb-20 text-6xl font-bold font-serif">
					React Aria Components
				</h1>

				<h2 id="buttons" className="mb-1.5 text-xl font-bold">
					Buttons
				</h2>
				<hr className="mb-8 h-1 rounded-sm bg-slate-50" />
				<div className="grid grid-cols-3 gap-6">
					<div className="flex flex-col border border-zinc-700 rounded overflow-hidden">
						<div className="flex items-center justify-center h-40 border-b border-blue-600/10 bg-gray-950">
							<Button type="button">Button</Button>
						</div>
						<div className="flex flex-col p-3">
							<strong>Primary</strong>
							<code>
								variant="primary" <i>(default)</i>
							</code>
						</div>
					</div>
					<div className="flex flex-col border border-zinc-700 rounded overflow-hidden">
						<div className="flex items-center justify-center h-40 border-b border-blue-600/10 bg-gray-950">
							<Button type="button" variant="secondary">
								Button
							</Button>
						</div>
						<div className="flex flex-col p-3">
							<strong>Secondary</strong>
							<code>variant="secondary"</code>
						</div>
					</div>
					<div className="flex flex-col border border-zinc-700 rounded overflow-hidden">
						<div className="flex items-center justify-center h-40 border-b border-blue-600/10 bg-gray-950">
							<Button type="button" variant="destructive">
								Button
							</Button>
						</div>
						<div className="flex flex-col p-3">
							<strong>Destructive</strong>
							<code>variant="destructive"</code>
						</div>
					</div>
					<div className="flex flex-col border border-zinc-700 rounded overflow-hidden">
						<div className="flex items-center justify-center h-40 border-b border-blue-600/10 bg-gray-950">
							<Button
								type="button"
								className="bg-lime-400 text-lime-950 hover:bg-lime-500"
							>
								Button
							</Button>
						</div>
						<div className="flex flex-col p-3">
							<strong>Custom</strong>
							<code>
								className="bg-lime-400 text-lime-950 hover:bg-lime-500"
							</code>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
