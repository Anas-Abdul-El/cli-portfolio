import { help, commandNotFound } from '../commands/commandsMsg';

const runCommand = (cmd: string) => {
  switch (cmd) {
    case 'help':
      return { output: help };

    default:
      return { output: commandNotFound(cmd) };
  }
};

export default runCommand;
