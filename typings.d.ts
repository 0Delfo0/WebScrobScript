declare module traktapi2 {
  export let Trakt: any;
}

declare module "*.json" {
  const value: any;
  export default value;
}
