import app from "./app";
import ENV from "./core/environment/environment";

app.listen(ENV.PORT, () => {
  console.log(`the server has started in ${ENV.PORT}`);
});
