import { name, version } from "~/package.json";
import { testingExport } from "@";

console.log(`Testing for ${name} v${version}`);
testingExport();

process.exit(0);
