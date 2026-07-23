export interface ToolEntry{name:string;description?:string;tags?:string[];inputSchema?:Record<string,unknown>;}
export interface SearchResult{tool:ToolEntry;score:number;matches:{field:string;term:string}[];}
export interface DiscoveryConfig{limit?:number;minScore?:number;}
