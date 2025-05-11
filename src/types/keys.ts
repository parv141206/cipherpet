export interface Keys {
  publicKey: {
    e: number;
    n: number;
  } | null;
  privateKey: {
    d: number;
    n: number;
  } | null;
}
