export type BuildMode = "production" | "development"

export interface BuildPath {
    entry: string;
    html: string;
    build: string
}

export interface BuildEnv{
    port: number;
    mode: BuildMode;
}

export interface BuildOptions {
    mode: BuildMode;
    port: number;
    paths: BuildPath;
    isDev: boolean;
}