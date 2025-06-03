1. Logical Operators

| Operator | Description | Example                              |
| -------- | ----------- | ------------------------------------ |
| `Op.and` | Logical AND | `{ [Op.and]: [{ a: 5 }, { b: 6 }] }` |
| `Op.or`  | Logical OR  | `{ [Op.or]: [{ a: 5 }, { b: 6 }] }`  |
| `Op.not` | Logical NOT | `{ a: { [Op.not]: 5 } }`             |

2. Comparison Operators

| Operator | Description                | Example                  |
| -------- | -------------------------- | ------------------------ |
| `Op.eq`  | Equal (=)                  | `{ a: { [Op.eq]: 5 } }`  |
| `Op.ne`  | Not equal (!=)             | `{ a: { [Op.ne]: 5 } }`  |
| `Op.gt`  | Greater than (>)           | `{ a: { [Op.gt]: 5 } }`  |
| `Op.gte` | Greater than or equal (>=) | `{ a: { [Op.gte]: 5 } }` |
| `Op.lt`  | Less than (<)              | `{ a: { [Op.lt]: 5 } }`  |
| `Op.lte` | Less than or equal (<=)    | `{ a: { [Op.lte]: 5 } }` |

3. Range Operators

   | Operator        | Description         | Example                              |
   | --------------- | ------------------- | ------------------------------------ |
   | `Op.between`    | Between (inclusive) | `{ a: { [Op.between]: [3, 5] } }`    |
   | `Op.notBetween` | Not between         | `{ a: { [Op.notBetween]: [3, 5] } }` |
   | `Op.in`         | In an array         | `{ a: { [Op.in]: [1, 2, 3] } }`      |
   | `Op.notIn`      | Not in an array     | `{ a: { [Op.notIn]: [1, 2, 3] } }`   |

4. String Operators (LIKE)

   | Operator      | Description                               | Example                             |
   | ------------- | ----------------------------------------- | ----------------------------------- |
   | `Op.like`     | LIKE pattern                              | `{ a: { [Op.like]: '%foo%' } }`     |
   | `Op.notLike`  | NOT LIKE pattern                          | `{ a: { [Op.notLike]: '%foo%' } }`  |
   | `Op.iLike`    | Case-insensitive LIKE (Postgres only)     | `{ a: { [Op.iLike]: '%foo%' } }`    |
   | `Op.notILike` | Case-insensitive NOT LIKE (Postgres only) | `{ a: { [Op.notILike]: '%foo%' } }` |

5. Null / Existence Operators

   | Operator | Description                              | Example                     |
   | -------- | ---------------------------------------- | --------------------------- |
   | `Op.is`  | IS NULL / IS TRUE / IS FALSE             | `{ a: { [Op.is]: null } }`  |
   | `Op.not` | IS NOT NULL / IS NOT TRUE / IS NOT FALSE | `{ a: { [Op.not]: null } }` |

6. Other Useful Operators

   | Operator | Description                 | Example                              |
   | -------- | --------------------------- | ------------------------------------ |
   | `Op.any` | ANY (array) (Postgres only) | `{ a: { [Op.any]: [2, 3, 4] } }`     |
   | `Op.all` | ALL (array) (Postgres only) | `{ a: { [Op.all]: [2, 3, 4] } }`     |
   | `Op.col` | Reference to another column | `{ a: { [Op.col]: 'otherColumn' } }` |

   Additional Sequelize Operators
   Operator Description Example
   Op.regexp Matches using regular expressions (MySQL, Postgres) { field: { [Op.regexp]: '^abc' } }
   Op.notRegexp Negation of regexp match (MySQL, Postgres) { field: { [Op.notRegexp]: '^abc' } }
   Op.match Full-text search (Postgres) { field: { [Op.match]: 'foo & bar' } }
   Op.contains Array contains (Postgres) { field: { [Op.contains]: [1, 2] } }
   Op.contained Is contained by array (Postgres) { field: { [Op.contained]: [1, 2, 3] } }
   Op.overlap Overlap arrays (Postgres) { field: { [Op.overlap]: [1, 2] } }
   Op.startsWith String starts with (Sequelize helper) { field: { [Op.startsWith]: 'foo' } }
   Op.endsWith String ends with { field: { [Op.endsWith]: 'bar' } }
   Op.substring String contains substring { field: { [Op.substring]: 'baz' } }
