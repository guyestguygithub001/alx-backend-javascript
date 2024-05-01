// Interface representing major credits with a branding to distinguish them from other numeric values
export interface MajorCredits {
  credits: number & { __brand: 'MajorCredits.credits' };
}

// Interface representing minor credits with a branding to distinguish them from other numeric values
export interface MinorCredits {
  credits: number & { __brand: 'MinorCredits.credits' };
}

// Function to sum the credits of two MajorCredits objects and return a new MajorCredits object
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

// Function to sum the credits of two MinorCredits objects and return a new MinorCredits object
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
