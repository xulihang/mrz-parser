## MRZ Parser

Type 3 MRZ code parser.

### Usage


```js
const parser = require("mrz-parser");
parsed = parser.parse("P<GBRFOMKIN<<ALEKSEY<<<<<<<<<<<<<<<<<<<<<<<<","5032403533GBR7006236M2305296<<<<<<<<<<<<<<06")
console.log(parsed["surname"]);
```

Output:

| doc_type | country | surname | names   | date_of_birth | sex | expiration_date |
|----------|---------|---------|---------|---------------|-----|-----------------|
| P<       | GBR     | FOMKIN  | ALEKSEY | 700623        | M   | 230529          |

