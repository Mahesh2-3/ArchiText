export interface TechStackItem {
    area: string;
    name: string;
    reason: string;
}

export interface SchemaField {
    name: string;
    type: string;
    description: string;
}

export interface SchemaItem {
    collection: string;
    fields: SchemaField[];
}

export interface ApiItem {
    method: string;
    route: string;
    description: string;
}

export interface StructureItem {
    section: string;
    paths: string[];
}

export interface ArchitectureData {
    projectTitle: string;
    techStack: TechStackItem[];
    schema: SchemaItem[];
    apis: ApiItem[];
    structure: StructureItem[];
    scaling: string[];
}

export interface MessageType {
    role: "user" | "assistant";
    content: string;
}
