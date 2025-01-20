import toCamelCase from "./to-camel-case";
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function convertKeysToCamelCase(obj: any): any {
  if (Array.isArray(obj)) {
    obj.map(convertKeysToCamelCase);
  } else if (obj !== null && typeof obj === "object") {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const newObj: any = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const newKey = toCamelCase(key);
        newObj[newKey] = convertKeysToCamelCase(obj[key]);
      }
    }
    return newObj;
  }
  return obj;
}
