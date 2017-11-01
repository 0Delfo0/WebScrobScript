interface IMediaHandler {
    accept(url: string): boolean;

    verify(source: string, cycle: string, str: string): boolean;

    parseData(source: string, str: string): string;

    lifeOf(cycle: number): number;
}
