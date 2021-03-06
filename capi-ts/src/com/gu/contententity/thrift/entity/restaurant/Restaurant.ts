/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as com_gu_contententity_thrift from "./../..";
export interface IRestaurant {
    restaurantName: string;
    approximateLocation?: string;
    webAddress?: string;
    address?: com_gu_contententity_thrift.IAddress;
    geolocation?: com_gu_contententity_thrift.IGeolocation;
}
export interface IRestaurantArgs {
    restaurantName: string;
    approximateLocation?: string;
    webAddress?: string;
    address?: com_gu_contententity_thrift.IAddressArgs;
    geolocation?: com_gu_contententity_thrift.IGeolocationArgs;
}
export const RestaurantCodec: thrift.IStructCodec<IRestaurantArgs, IRestaurant> = {
    encode(args: IRestaurantArgs, output: thrift.TProtocol): void {
        const obj: any = {
            restaurantName: args.restaurantName,
            approximateLocation: args.approximateLocation,
            webAddress: args.webAddress,
            address: args.address,
            geolocation: args.geolocation
        };
        output.writeStructBegin("Restaurant");
        if (obj.restaurantName != null) {
            output.writeFieldBegin("restaurantName", thrift.TType.STRING, 1);
            output.writeString(obj.restaurantName);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[restaurantName] is unset!");
        }
        if (obj.approximateLocation != null) {
            output.writeFieldBegin("approximateLocation", thrift.TType.STRING, 2);
            output.writeString(obj.approximateLocation);
            output.writeFieldEnd();
        }
        if (obj.webAddress != null) {
            output.writeFieldBegin("webAddress", thrift.TType.STRING, 3);
            output.writeString(obj.webAddress);
            output.writeFieldEnd();
        }
        if (obj.address != null) {
            output.writeFieldBegin("address", thrift.TType.STRUCT, 4);
            com_gu_contententity_thrift.AddressCodec.encode(obj.address, output);
            output.writeFieldEnd();
        }
        if (obj.geolocation != null) {
            output.writeFieldBegin("geolocation", thrift.TType.STRUCT, 5);
            com_gu_contententity_thrift.GeolocationCodec.encode(obj.geolocation, output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IRestaurant {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.STRING) {
                        const value_1: string = input.readString();
                        _args.restaurantName = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_2: string = input.readString();
                        _args.approximateLocation = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.webAddress = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_4: com_gu_contententity_thrift.IAddress = com_gu_contententity_thrift.AddressCodec.decode(input);
                        _args.address = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_5: com_gu_contententity_thrift.IGeolocation = com_gu_contententity_thrift.GeolocationCodec.decode(input);
                        _args.geolocation = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        if (_args.restaurantName !== undefined) {
            return {
                restaurantName: _args.restaurantName,
                approximateLocation: _args.approximateLocation,
                webAddress: _args.webAddress,
                address: _args.address,
                geolocation: _args.geolocation
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read Restaurant from input");
        }
    }
};
export class Restaurant extends thrift.StructLike implements IRestaurant {
    public restaurantName: string;
    public approximateLocation?: string;
    public webAddress?: string;
    public address?: com_gu_contententity_thrift.IAddress;
    public geolocation?: com_gu_contententity_thrift.IGeolocation;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IRestaurantArgs) {
        super();
        if (args.restaurantName != null) {
            const value_6: string = args.restaurantName;
            this.restaurantName = value_6;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[restaurantName] is unset!");
        }
        if (args.approximateLocation != null) {
            const value_7: string = args.approximateLocation;
            this.approximateLocation = value_7;
        }
        if (args.webAddress != null) {
            const value_8: string = args.webAddress;
            this.webAddress = value_8;
        }
        if (args.address != null) {
            const value_9: com_gu_contententity_thrift.IAddress = new com_gu_contententity_thrift.Address(args.address);
            this.address = value_9;
        }
        if (args.geolocation != null) {
            const value_10: com_gu_contententity_thrift.IGeolocation = new com_gu_contententity_thrift.Geolocation(args.geolocation);
            this.geolocation = value_10;
        }
    }
    public static read(input: thrift.TProtocol): Restaurant {
        return new Restaurant(RestaurantCodec.decode(input));
    }
    public static write(args: IRestaurantArgs, output: thrift.TProtocol): void {
        return RestaurantCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return RestaurantCodec.encode(this, output);
    }
}
