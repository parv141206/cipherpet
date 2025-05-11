export function isRSAPossible(p: number, q: number) {
  let numberOfPrimes = 0;
  for (let i = p + 1; i < q; i++) {
    if (numberOfPrimes > 0) {
      return true;
    }
    if (checkPrime(i)) {
      numberOfPrimes++;
    }
  }
  return false;
}
export function checkPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

export function calculateN(p: number, q: number): number {
  return p * q;
}

export function calculatePhiOfN(p: number, q: number): number {
  return (p - 1) * (q - 1);
}

export function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

export function extendedGCD(
  a: number,
  b: number,
): { gcd: number; x: number; y: number } {
  if (a === 0) {
    return { gcd: b, x: 0, y: 1 };
  }

  const remainder = b % a;
  const { gcd, x: x1, y: y1 } = extendedGCD(remainder, a);

  const x = y1 - Math.floor(b / a) * x1;
  const y = x1;

  return { gcd, x, y };
}

export function modInverse(e: number, phi: number): number {
  const { gcd, x } = extendedGCD(e, phi);

  if (gcd !== 1) {
    throw new Error(`No modular inverse exists: gcd(${e}, ${phi}) = ${gcd}`);
  }

  return ((x % phi) + phi) % phi;
}

export function chooseE(phiOfN: number): number {
  const commonValues = [3, 5, 17, 257, 65537];

  for (const e of commonValues) {
    if (e < phiOfN && gcd(e, phiOfN) === 1) {
      const d = modInverse(e, phiOfN);
      if (e !== d) {
        return e;
      }
    }
  }

  const smallPrimes = [7, 11, 13, 19, 23, 29, 31, 37, 41, 43, 47];
  for (const e of smallPrimes) {
    if (e < phiOfN && gcd(e, phiOfN) === 1) {
      const d = modInverse(e, phiOfN);
      if (e !== d) {
        return e;
      }
    }
  }

  for (let e = 7; e < phiOfN; e += 2) {
    if (gcd(e, phiOfN) === 1) {
      const d = modInverse(e, phiOfN);
      if (e !== d) {
        return e;
      }
    }
  }

  throw new Error(`Could not find valid e for φ(n) = ${phiOfN}`);
}

export function calculateD(e: number, phi: number): number {
  return modInverse(e, phi);
}

export function modPow(
  base: number,
  exponent: number,
  modulus: number,
): number {
  if (modulus === 1) return 0;

  let result = 1;
  base = base % modulus;

  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result = (result * base) % modulus;
    }

    base = (base * base) % modulus;

    exponent = Math.floor(exponent / 2);
  }

  return result;
}

export function generateRSAKeys(p: number, q: number) {
  if (!checkPrime(p) || !checkPrime(q)) {
    throw new Error(`Both p (${p}) and q (${q}) must be prime numbers`);
  }

  if (p === q) {
    throw new Error("p and q must be different prime numbers");
  }

  const n = calculateN(p, q);
  const phiOfN = calculatePhiOfN(p, q);

  const e = chooseE(phiOfN);
  const d = calculateD(e, phiOfN);

  console.log(`For p=${p}, q=${q}: n=${n}, φ(n)=${phiOfN}, e=${e}, d=${d}`);

  return {
    publicKey: { e, n },
    privateKey: { d, n },
  };
}

export function encrypt(
  message: number,
  publicKey: { e: number; n: number },
): number {
  if (message >= publicKey.n) {
    throw new Error(
      `Message (${message}) is too large for the given key size (n=${publicKey.n})`,
    );
  }

  return modPow(message, publicKey.e, publicKey.n);
}

export function decrypt(
  ciphertext: number,
  privateKey: { d: number; n: number },
): number {
  return modPow(ciphertext, privateKey.d, privateKey.n);
}
