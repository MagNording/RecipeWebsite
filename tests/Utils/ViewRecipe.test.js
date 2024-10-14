import { getShortUnit, fetchRecipeById, fetchCommentsByRecipeId, saveRecipeRating } from "../../src/components/Utils/ViewRecipe";

describe('fetchRecipeById', () => {
    // mock the global fetch function before each test
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    // clear the mocks after each test
    afterEach(() => {
        jest.clearAllMocks(); 
    });

    test('should return recipe data when fetch is successful', async () => {
        const mockData = [{ id: 1, title: 'Pasta', category: 'Italian' },
            { id: 2, title: 'Pizza', category: 'Italian' },
            { id: 3, title: 'Tacos', category: 'Mexican' }
        ];
        const recipeId = 2;
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });
        
        const data = await fetchRecipeById(recipeId);
        expect(data).toEqual(mockData);
        expect(fetch).toHaveBeenCalledWith(`https://recept3-bolen.reky.se/recipes/${recipeId}`);
    });

    test('should return NULL when fetch fails', async () => {
        // to mock console.error
        jest.spyOn(console, 'error').mockImplementation(() => {}); 
        const recipeId = 'UnknownId';
        fetch.mockRejectedValueOnce(new Error('Fetch failed'));

        const data = await fetchRecipeById(recipeId);

        expect(data).toEqual(null);
        expect(fetch).toHaveBeenCalledWith(`https://recept3-bolen.reky.se/recipes/${recipeId}`);
        expect(console.error).toHaveBeenCalledWith(`Error fetching recipe with id: ${recipeId}`, expect.any(Error));
    });
});