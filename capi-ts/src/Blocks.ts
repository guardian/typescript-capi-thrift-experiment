/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as Block from "./Block";
export interface IBlocks {
    main?: Block.IBlock;
    body?: Array<Block.IBlock>;
    totalBodyBlocks?: number;
    requestedBodyBlocks?: Map<string, Array<Block.IBlock>>;
}
export interface IBlocksArgs {
    main?: Block.IBlockArgs;
    body?: Array<Block.IBlockArgs>;
    totalBodyBlocks?: number;
    requestedBodyBlocks?: Map<string, Array<Block.IBlockArgs>>;
}
export const BlocksCodec: thrift.IStructCodec<IBlocksArgs, IBlocks> = {
    encode(args: IBlocksArgs, output: thrift.TProtocol): void {
        const obj: any = {
            main: args.main,
            body: args.body,
            totalBodyBlocks: args.totalBodyBlocks,
            requestedBodyBlocks: args.requestedBodyBlocks
        };
        output.writeStructBegin("Blocks");
        if (obj.main != null) {
            output.writeFieldBegin("main", thrift.TType.STRUCT, 1);
            Block.BlockCodec.encode(obj.main, output);
            output.writeFieldEnd();
        }
        if (obj.body != null) {
            output.writeFieldBegin("body", thrift.TType.LIST, 2);
            output.writeListBegin(thrift.TType.STRUCT, obj.body.length);
            obj.body.forEach((value_1: Block.IBlockArgs): void => {
                Block.BlockCodec.encode(value_1, output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (obj.totalBodyBlocks != null) {
            output.writeFieldBegin("totalBodyBlocks", thrift.TType.I32, 3);
            output.writeI32(obj.totalBodyBlocks);
            output.writeFieldEnd();
        }
        if (obj.requestedBodyBlocks != null) {
            output.writeFieldBegin("requestedBodyBlocks", thrift.TType.MAP, 4);
            output.writeMapBegin(thrift.TType.STRING, thrift.TType.LIST, obj.requestedBodyBlocks.size);
            obj.requestedBodyBlocks.forEach((value_2: Array<Block.IBlockArgs>, key_1: string): void => {
                output.writeString(key_1);
                output.writeListBegin(thrift.TType.STRUCT, value_2.length);
                value_2.forEach((value_3: Block.IBlockArgs): void => {
                    Block.BlockCodec.encode(value_3, output);
                });
                output.writeListEnd();
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IBlocks {
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
                        const value_4: Block.IBlock = Block.BlockCodec.decode(input);
                        _args.main = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.LIST) {
                        const value_5: Array<Block.IBlock> = new Array<Block.IBlock>();
                        const metadata_1: thrift.IThriftList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_6: Block.IBlock = Block.BlockCodec.decode(input);
                            value_5.push(value_6);
                        }
                        input.readListEnd();
                        _args.body = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.I32) {
                        const value_7: number = input.readI32();
                        _args.totalBodyBlocks = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.MAP) {
                        const value_8: Map<string, Array<Block.IBlock>> = new Map<string, Array<Block.IBlock>>();
                        const metadata_2: thrift.IThriftMap = input.readMapBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const key_2: string = input.readString();
                            const value_9: Array<Block.IBlock> = new Array<Block.IBlock>();
                            const metadata_3: thrift.IThriftList = input.readListBegin();
                            const size_3: number = metadata_3.size;
                            for (let i_3: number = 0; i_3 < size_3; i_3++) {
                                const value_10: Block.IBlock = Block.BlockCodec.decode(input);
                                value_9.push(value_10);
                            }
                            input.readListEnd();
                            value_8.set(key_2, value_9);
                        }
                        input.readMapEnd();
                        _args.requestedBodyBlocks = value_8;
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
            main: _args.main,
            body: _args.body,
            totalBodyBlocks: _args.totalBodyBlocks,
            requestedBodyBlocks: _args.requestedBodyBlocks
        };
    }
};
export class Blocks extends thrift.StructLike implements IBlocks {
    public main?: Block.IBlock;
    public body?: Array<Block.IBlock>;
    public totalBodyBlocks?: number;
    public requestedBodyBlocks?: Map<string, Array<Block.IBlock>>;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IBlocksArgs = {}) {
        super();
        if (args.main != null) {
            const value_11: Block.IBlock = new Block.Block(args.main);
            this.main = value_11;
        }
        if (args.body != null) {
            const value_12: Array<Block.IBlock> = new Array<Block.IBlock>();
            args.body.forEach((value_15: Block.IBlockArgs): void => {
                const value_16: Block.IBlock = new Block.Block(value_15);
                value_12.push(value_16);
            });
            this.body = value_12;
        }
        if (args.totalBodyBlocks != null) {
            const value_13: number = args.totalBodyBlocks;
            this.totalBodyBlocks = value_13;
        }
        if (args.requestedBodyBlocks != null) {
            const value_14: Map<string, Array<Block.IBlock>> = new Map<string, Array<Block.IBlock>>();
            args.requestedBodyBlocks.forEach((value_17: Array<Block.IBlockArgs>, key_3: string): void => {
                const value_18: Array<Block.IBlock> = new Array<Block.IBlock>();
                value_17.forEach((value_19: Block.IBlockArgs): void => {
                    const value_20: Block.IBlock = new Block.Block(value_19);
                    value_18.push(value_20);
                });
                const key_4: string = key_3;
                value_14.set(key_4, value_18);
            });
            this.requestedBodyBlocks = value_14;
        }
    }
    public static read(input: thrift.TProtocol): Blocks {
        return new Blocks(BlocksCodec.decode(input));
    }
    public static write(args: IBlocksArgs, output: thrift.TProtocol): void {
        return BlocksCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return BlocksCodec.encode(this, output);
    }
}
