export interface Role {
    name: string;
    permissions: {
        [key: string]: string
    }
}