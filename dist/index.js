"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var ThaiAddr = /** @class */ (function () {
    function ThaiAddr() {
    }
    ThaiAddr.prototype.findByZip = function (zipCode) {
        return lodash_1.default.filter(addresses, function (addr) { return addr.zip === zipCode; });
    };
    ThaiAddr.prototype.findBySubdistrictCode = function (code) {
        return lodash_1.default.head(lodash_1.default.filter(addresses, function (addr) { return addr.subdistrictCode === code; }));
    };
    ThaiAddr.prototype.zips = function () {
        return lodash_1.default.sortBy(lodash_1.default.uniq(lodash_1.default.map(addresses, function (addr) { return addr.zip; })));
    };
    ThaiAddr.prototype.provinces = function () {
        return lodash_1.default.sortBy(lodash_1.default.uniqBy(lodash_1.default.map(addresses, function (addr) { return ({
            name: addr.province,
            code: addr.provinceCode
        }); }), 'code'), 'name');
    };
    ThaiAddr.prototype.districts = function (code) {
        return lodash_1.default.map(lodash_1.default.sortBy(lodash_1.default.uniqBy(lodash_1.default.filter(addresses, function (addr) { return addr.provinceCode === code; }), 'districtCode'), 'district'), function (addr) { return ({
            name: addr.district,
            code: addr.districtCode
        }); });
    };
    ThaiAddr.prototype.subdistricts = function (code) {
        return lodash_1.default.map(lodash_1.default.sortBy(lodash_1.default.uniqBy(lodash_1.default.filter(addresses, function (addr) { return addr.districtCode === code; }), 'subdistrictCode'), 'subdistrict'), function (addr) { return ({
            name: addr.subdistrict,
            code: addr.subdistrictCode
        }); });
    };
    return ThaiAddr;
}());
;
exports.default = ThaiAddr;