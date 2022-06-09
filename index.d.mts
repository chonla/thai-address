export default ThaiAddr;
declare class ThaiAddr {
    findByZip(zipCode: string): ThaiAddrRecord[];
    findBySubdistrictCode(code: string): ThaiAddrRecord;
    zips(): string[];
    provinces(): string[];
    districts(code: string): ThaiAddrMiniRecord[];
    subdistricts(code: string): ThaiAddrMiniRecord[];
}
export interface ThaiAddrRecord {
    province: string;
    district: string;
    subdistrict: string;
    zip: string;
    subdistrictCode: string;
    districtCode: string;
    provinceCode: string;
}
export interface ThaiAddrMiniRecord {
    name: string;
    code: string;
}
