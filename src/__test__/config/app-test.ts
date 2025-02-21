import app from "@app/app";
import supertest from "supertest";

const appTest = supertest(app);

export default appTest;
