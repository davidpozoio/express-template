// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function toSnakeCase(obj: Record<string, any>) {
  const result: typeof obj = {};
  for (const key in obj) {
    const snakeKey = key.replace(
      /[A-Z]/g,
      (letter) => `_${letter.toLowerCase()}`,
    );
    result[snakeKey] = obj[key];
  }

  return result;
}

export default toSnakeCase;
