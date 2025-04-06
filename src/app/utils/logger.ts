import chalk from 'chalk';

declare global {
  interface Console {
    styledLog(type: 'log' | 'warn' | 'error' | 'info', message: string, style?: string): void;
  }
}

const styles = {
  log: 'color: green; font-weight: bold;',
  warn: 'color: orange; font-weight: bold;',
  error: 'color: red; font-weight: bold;',
  info: 'color: blue; font-weight: bold;',
} as const;

const terminalStyles = {
  log: chalk.green.bold,
  warn: chalk.yellow.bold,
  error: chalk.red.bold,
  info: chalk.blue.bold,
} as const;

console.styledLog = function(type, message: any, style = '') {
  if (typeof window === 'undefined') {
    // Server-side (Terminal)
    console[type](terminalStyles[type](message));
  } else {
    // Client-side (Browser)
    const appliedStyle = style || styles[type];
    console[type](`%c${message}`, appliedStyle);
  }
};
