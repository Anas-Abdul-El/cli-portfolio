import { useState } from 'react';
import runCommand from './utils/runCommand';

function App() {
  const [bash, setBash] = useState('Anas-Abdul-El >');
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ command: string; output: string }[]>(
    []
  );

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = input.trim();

      if (command === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }

      if (input.includes(' && ')) {
        const commands = input.split(' && ').map((cmd) => cmd.trim());
        let combinedOutput = '';

        for (const cmd of commands) {
          const { output } = runCommand(cmd);
          combinedOutput += `${bash} ${cmd}\n${output}\n`;
        }

        setHistory([...history, { command: input, output: combinedOutput }]);
        setInput('');
        return;
      }

      const { output } = runCommand(input);

      setHistory([...history, { command, output }]);
      setInput('');
    }

    if (e.key === 'ArrowUp') {
      console.log('press');

      if (history.length === 0) return;
      const lastCommand = history[history.length - 1].command;
      setInput(lastCommand);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-green-500 font-mono p-4">
      {history.map((item, i) => (
        <div key={i} className="mb-5">
          <div className="mr-2">Anas-Abdul-El &gt; {item.command}</div>
          <div className="whitespace-pre-wrap">{item.output}</div>
        </div>
      ))}

      <div className="w-full flex">
        <label htmlFor="commandInput" className="mr-2 shrink-0">
          {bash}
        </label>
        <input
          id="commandInput"
          name="commandInput"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent border-none focus:outline-none w-full"
        />
      </div>
    </div>
  );
}

export default App;
