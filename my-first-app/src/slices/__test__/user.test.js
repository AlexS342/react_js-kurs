import { userReducer, removeUser } from '../user'

describe('Проверяем редусер userReducer', () => {
    it('Инициализация state', () => {
        const result = userReducer(undefined, { type: "" });
        expect(result).toEqual({ email: null, id: null, isAuth: false, token: null });
    });
    it('Очистка state', () => {
        const testState = { email: 'abc@mail.ru', id: 1, isAuth: true, token: 'GD34FG4EFGH5YSDGHTY4554HDF' }
        const action = { type: removeUser, payload: testState }
        const result = userReducer(testState, action);
        expect(result).toEqual({ email: null, id: null, isAuth: false, token: null });
    });

});