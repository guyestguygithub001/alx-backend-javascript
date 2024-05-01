// Represents a unique identifier for a row
export type RowID = number;

// Defines the structure of a row element
export interface RowElement {
  firstName: string; // First name of the row element
  lastName: string;  // Last name of the row element
  age?: number;      // Optional property for age
}
