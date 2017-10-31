interface IServiceApi {
  // base Props
  kind: ServiceKind;
  // API
  baseApi(): string;

  callApi(): void;

}
