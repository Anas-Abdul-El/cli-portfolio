# CLI Portfolio

A terminal-style portfolio application built with React, TypeScript, and Vite. This interactive CLI simulator allows users to explore information about Anas Abdul El through various commands, providing a unique and engaging way to showcase skills, projects, and background.

## Features

- **Terminal Simulation**: Authentic terminal interface with green text on black background
- **Interactive Commands**: Execute various commands to learn about the developer
- **Command Chaining**: Support for chaining commands with `&&`
- **Command History**: Navigate through previous commands using arrow keys
- **Responsive Design**: Built with Tailwind CSS for modern, responsive UI

## Available Commands

- `help` - Display available commands
- `whoami` - Learn about Anas Abdul El
- `whatisthis` - Information about this project
- `skills -ls` - List technical skills
- `projects -ls` - List notable projects
- `gui` - Open GUI portfolio website
- `github` - Open GitHub profile
- `whatido` - Learn about areas of expertise
- `clear` - Clear terminal history

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Testing**: Vitest, React Testing Library
- **Linting**: ESLint with Prettier
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm test` - Run tests with Vitest
- `pnpm lint` - Run ESLint for code quality
- `pnpm format` - Format code with Prettier

## Project Structure

```
src/
├── App.tsx              # Main application component
├── App.css              # Application styles
├── main.jsx             # Application entry point
├── setupTests.js        # Test configuration
├── commands/
│   └── commandsMsg.ts   # Command messages and responses
└── utils/
    ├── runCommand.ts    # Command execution logic
    └── runCommand.test.ts # Unit tests for commands
```

## Testing

The project includes comprehensive tests using Vitest and React Testing Library:

- Unit tests for command execution logic
- Integration tests for UI interactions
- Tests for command chaining and history features

Run tests with:

```bash
pnpm test
```

## Development

This project uses modern development practices:

- **TypeScript** for type safety
- **ESLint** and **Prettier** for code quality
- **Husky** for git hooks
- **Vitest** for fast testing
- **Tailwind CSS** for utility-first styling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if necessary
5. Run the test suite
6. Submit a pull request

## License

This project is private and proprietary.

## Author

**Anas Abdul El** - Passionate software developer specializing in modern web technologies.

- Website: [anas-abdul-el.vercel.app](https://anas-abdul-el.vercel.app/)
- GitHub: [github.com/anas-abdul-el](https://github.com/anas-abdul-el)
