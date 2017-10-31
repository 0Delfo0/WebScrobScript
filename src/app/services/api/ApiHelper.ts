interface ApiHelper {
  // base Props
  kind: ServiceKind;
  // API
  baseApi(): string;
  
  callApi(): void;

}
