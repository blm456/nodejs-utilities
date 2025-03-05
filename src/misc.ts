/**
 * Gets a string set in environment and either throws an error if not set, or returns the default value passed if unset. (Requires initialization of ENV variables, ie dotenv)
 * @param key The name of the environment variable
 * @param defaultValue Optional argument that, if passed, will return if the environment variable is not set
 * @returns The environment variable string
 *
 * @example
 * import { envString } from "@blm456/utilities/misc";
 *
 * const GITHUB_TOKEN = envString("GITHUB_TOKEN");
 *
 *
 * @example
 * import { envString } from "@blm456/utilities/misc";
 *
 * const GITHUB_TOKEN = envString("GITHUB_TOKEN", "default_token");
 */
export function envString(key: string, defaultValue?: string): string {
  if (typeof process.env[key] !== "string") {
    if (defaultValue) return defaultValue;
    throw new Error(`Required environment variable "${key}" is not set!`);
  }
  return process.env[key];
}

/**
 * Gets a boolean (from strings "TRUE" or "FALSE") set in environment and either throws an error if not set, or returns the default value passed if unset. (Requires initialization of ENV variables, ie dotenv)
 * @param key The name of the environment variable
 * @param defaultValue Optional argument that, if passed, will return if the environment variable is not set
 * @returns The boolean from environment variable
 *
 * @example
 * import { envBool } from "@blm456/utilities/misc";
 *
 * const DEV = envBool("DEV");
 *
 * @example
 * import { envBool } from "@blm456/utilities/misc";
 *
 * const DEV = envBool("DEV", false);
 */
export function envBool(key: string, defaultValue?: boolean): boolean {
  const evar = envString(
    key,
    defaultValue === undefined ? undefined : defaultValue.toString()
  );

  switch (evar.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      throw new Error(
        `Environment variable "${key}" must be "TRUE" or "FALSE"`
      );
  }
}
