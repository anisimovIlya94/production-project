export type BuildMode = "production" | "development"

export interface BuildPath {
    entry: string;
    html: string;
    build: string;
    src: string
    locales: string
    buildLocales: string
}

export interface BuildEnv{
    port: number;
    mode: BuildMode;
    apiUrl: string
}

export interface BuildOptions {
    mode: BuildMode;
    port: number;
    paths: BuildPath;
    isDev: boolean;
    apiUrl: string;
    project: "frontend" | "jest" | "storybook"
}