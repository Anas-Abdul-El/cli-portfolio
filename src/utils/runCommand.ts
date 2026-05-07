import {
  help,
  commandNotFound,
  whoAmI,
  whatIsThis,
  skillsLs,
  projectsLs,
  redirectingMsg,
  whatIdo,
} from '../commands/commandsMsg';

const runCommand = (cmd: string) => {
  switch (cmd) {
    case 'help':
      return { output: help };

    case 'whoami':
      return { output: whoAmI };

    case 'what-is-this':
      return { output: whatIsThis };

    case 'skills -ls':
      return {
        output: skillsLs,
      };

    case 'projects -ls':
      return {
        output: projectsLs,
      };

    case 'gui':
      setTimeout(() => {
        window.open('https://anas-abdul-el.vercel.app/', '_blank');
      }, 1000);
      return {
        output: redirectingMsg('GUI portfolio'),
      };

    case 'whatido':
      return { output: whatIdo };

    default:
      return { output: commandNotFound(cmd) };
  }
};

export default runCommand;
