# Miscellaneous

- [envString](#envstring)

## envString

```typescript
envString(key: string, default?: string)
```

Gets a string set in environment and either throws an error if not set, or returns the default value passed if unset. (Requires initialization of ENV variables, ie `dotenv`)

### key

The name of the environment variable

### default

Optional argument that, if passed, will return if the environment variable is not set

### Examples:

If the variable is not set, an error will be thrown informing the variable needs to be set

```typescript
import { envString } from "@blm456/utilities/misc";

const GITHUB_TOKEN = envString("GITHUB_TOKEN");
```

If the variable is not set, a default is passed in it's place. (Do not actually hardcode tokens in... this is an example)

```typescript
import { envString } from "@blm456/utilities/misc";

const GITHUB_TOKEN = envString("GITHUB_TOKEN", "default_token");
```

## envBool

```typescript
envBool(key: string, default?: boolean)
```

Gets a boolean (from strings "TRUE" or "FALSE") set in environment and either throws an error if not set, or returns the default value passed if unset. (Requires initialization of ENV variables, ie `dotenv`)

### key

The name of the environment variable

### default

Optional argument that, if passed, will return if the environment variable is not set

### Examples:

If the variable is not set, an error will be thrown informing the variable needs to be set

```typescript
import { envBool } from "@blm456/utilities/misc";

const DEV = envBool("DEV");
```

If the variable is not set, a default is passed in it's place.

```typescript
import { envBool } from "@blm456/utilities/misc";

const DEV = envBool("DEV", false);
```
