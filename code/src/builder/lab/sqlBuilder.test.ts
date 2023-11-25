import { SQLQueryBuilder } from "./sqlQueryBuilder";

describe('[Builder - lab] SQL builder', () => {
    it('should build simple SQL query', () => {
        //given
        const query = new SQLQueryBuilder();
        const expectedQuery = 'SELECT * FROM users';

        // when
        const sql = query.select('*').from('users').build();

        // then
        expect(sql).toEqual(expectedQuery);
    });
});