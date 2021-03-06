/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as EmailProvider from "./EmailProvider";
export interface INotificationProviders {
    email?: EmailProvider.IEmailProvider;
}
export interface INotificationProvidersArgs {
    email?: EmailProvider.IEmailProviderArgs;
}
export const NotificationProvidersCodec: thrift.IStructCodec<INotificationProvidersArgs, INotificationProviders> = {
    encode(args: INotificationProvidersArgs, output: thrift.TProtocol): void {
        const obj: any = {
            email: args.email
        };
        output.writeStructBegin("NotificationProviders");
        if (obj.email != null) {
            output.writeFieldBegin("email", thrift.TType.STRUCT, 1);
            EmailProvider.EmailProviderCodec.encode(obj.email, output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): INotificationProviders {
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
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_1: EmailProvider.IEmailProvider = EmailProvider.EmailProviderCodec.decode(input);
                        _args.email = value_1;
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
        return {
            email: _args.email
        };
    }
};
export class NotificationProviders extends thrift.StructLike implements INotificationProviders {
    public email?: EmailProvider.IEmailProvider;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: INotificationProvidersArgs = {}) {
        super();
        if (args.email != null) {
            const value_2: EmailProvider.IEmailProvider = new EmailProvider.EmailProvider(args.email);
            this.email = value_2;
        }
    }
    public static read(input: thrift.TProtocol): NotificationProviders {
        return new NotificationProviders(NotificationProvidersCodec.decode(input));
    }
    public static write(args: INotificationProvidersArgs, output: thrift.TProtocol): void {
        return NotificationProvidersCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return NotificationProvidersCodec.encode(this, output);
    }
}
