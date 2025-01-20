function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (match, p1) => p1.toUpperCase());
}

export default toCamelCase;
