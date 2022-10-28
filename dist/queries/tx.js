"use strict";
exports.__esModule = true;
exports["default"] = "\nquery($id: ID!) {\n  transaction(id: $id) {\n    id\n    anchor\n    signature\n    recipient\n    owner {\n      address\n      key\n    }\n    fee {\n      winston\n      ar\n    }\n    quantity {\n      winston\n      ar\n    }\n    data {\n      size\n      type\n    }\n    tags {\n      name\n      value\n    }\n    block {\n      id\n      timestamp\n      height\n      previous\n    }\n    parent {\n      id\n    }\n  }\n}\n";
