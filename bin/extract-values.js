const json = JSON.parse(process.argv[2]);
const keys = process.argv[3].split(".");

let value = json;

for (const key of keys) {
  value = value?.[key];
}
if (typeof value !== "object") {
  console.log(value);
} else {
  console.log(JSON.stringify(value));
}
