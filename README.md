# mcp-tool-discovery

Dynamic lazy tool loading for MCP — keyword scoring, on-demand schema.

```typescript
import { discover } from "mcp-tool-discovery";
const tools = discover(index, "web fetch", { limit: 5 });
```

MIT
