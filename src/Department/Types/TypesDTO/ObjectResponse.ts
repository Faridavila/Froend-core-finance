export interface ObjectResponse<T> {
    data(data: any): unknown;
    message: string;
    code: number;
    content?: T; 
}
