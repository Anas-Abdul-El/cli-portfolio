import { useState } from 'react';
import useRunCommand from './hooks/useRunCommand';

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

      const { output } = useRunCommand(input);

      setHistory([...history, { command, output }]);
      setInput('');
    }
  };

  return (
    <div className="w-full h-screen bg-black text-green-500 font-mono p-4">
      {history.map((item, i) => (
        <div key={i}>
          <div className="mr-2">Anas-Abdul-El &gt; {item.command}</div>
          <div>{item.output}</div>
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
