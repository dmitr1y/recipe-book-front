import { Ingredient, Recipe, Tool, Unit, User } from './interface';

export const UserMock: User = {
  id: 1,
  username: 'admin',
};
export const UnitMock: Unit = {
  id: 1,
  name: 'шт',
};
export const IngredientMock: Ingredient = {
  id: 1,
  name: 'Aenean',
};
export const ToolMock: Tool = {
  id: 1,
  name: 'Mauris',
};
export const RecipeMock: Recipe = {
  id: 1,
  title: 'Lorem ipsum dolor sit amet.',
  body: 'Ut in leo non massa efficitur facilisis ut nec nibh.<br>' +
    'Etiam scelerisque arcu vitae dui fermentum, sit amet vulputate odio rhoncus.<br>' +
    'Phasellus ac dolor a dui pharetra tempus. ',
  ingredients: [
    {
      id: 1,
      count: 30,
      unit: UnitMock,
      ingredient: IngredientMock,
    },
    {
      id: 2,
      count: 30,
      unit: UnitMock,
      ingredient: IngredientMock,
    },
    {
      id: 3,
      count: 30,
      unit: UnitMock,
      ingredient: IngredientMock,
    },
  ],
  tools: [
    {
      id: 1,
      count: 30,
      unit: UnitMock,
      tool: ToolMock,
    },
    {
      id: 2,
      count: 30,
      unit: UnitMock,
      tool: ToolMock,
    },
    {
      id: 3,
      count: 30,
      unit: UnitMock,
      tool: ToolMock,
    },
  ],
  creator: UserMock,
  created: 1615713997534,
  updated: 1615713997534,
};



