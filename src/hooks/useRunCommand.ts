import { help, commandNotFound } from '../commands/commandsMsg';

const useRunCommand = (cmd: string) => {
  switch (cmd) {
    case 'help':
      return { output: help };

    default:
      return { output: commandNotFound(cmd) };
  }
};

export default useRunCommand;
