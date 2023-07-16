export interface IFileService {
  create(file: any): Promise<string>;
}
