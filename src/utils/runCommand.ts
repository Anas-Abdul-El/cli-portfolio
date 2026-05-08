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

    case 'whatisthis':
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

    case 'github':
      setTimeout(() => {
        window.open('https://github.com/anas-abdul-el', '_blank');
      }, 1000);
      return {
        output: redirectingMsg('GitHub profile'),
      };
    case 'whatido':
      return { output: whatIdo };

    default:
      return { output: commandNotFound(cmd) };
  }
};

export default runCommand;
