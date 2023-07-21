"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gender = exports.Role = void 0;
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["StorageManager"] = 1] = "StorageManager";
    Role[Role["AdvertisingManager"] = 2] = "AdvertisingManager";
    Role[Role["User"] = 3] = "User";
    Role[Role["Supplier"] = 4] = "Supplier";
})(Role || (exports.Role = Role = {}));
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (exports.Gender = Gender = {}));
