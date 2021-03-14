export interface Recipe {
  id: number;
  title: string;
  description?: string;
  body: string;
  tools?: RecipeTool[];
  ingredients: RecipeIngredient[];
  creator: User;
  created: number;
  updated: number;
}

export interface RecipeTool extends Measurable {
  id: number;
  tool: Tool;
}

export interface Measurable {
  count: number;
  unit: Unit;
}

export interface Unit {
  id: number;
  name: string;
  description?: string;
}

export interface Tool {
  id: number;
  name: string;
  description?: string;
}

export interface RecipeIngredient extends Measurable {
  id: number;
  ingredient: Ingredient;
}

export interface Ingredient {
  id: number;
  name: string;
  description?: string;
}

export interface User {
  id: number;
  username: string;
}
