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
declare class ThaiAddr {
    constructor();
    findByZip(zipCode: string): ThaiAddrRecord[];
    findBySubdistrictCode(code: string): ThaiAddrRecord | undefined;
    zips(): string[];
    provinces(): ThaiAddrMiniRecord[];
    districts(code: string): ThaiAddrMiniRecord[];
    subdistricts(code: string): ThaiAddrMiniRecord[];
}
export default ThaiAddr;
