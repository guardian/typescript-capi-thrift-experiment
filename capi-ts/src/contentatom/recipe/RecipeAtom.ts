/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
import * as com_gu_contentatom_thrift from './../../com/gu/contentatom/thrift';
import * as __NAMESPACE__ from './.';
export interface IRecipeAtom {
  title: string;
  tags: __NAMESPACE__.ITags;
  time: __NAMESPACE__.ITime;
  serves?: __NAMESPACE__.IServes;
  ingredientsLists: Array<__NAMESPACE__.IIngredientsList>;
  steps: Array<string>;
  credits: Array<string>;
  images: Array<com_gu_contentatom_thrift.IImage>;
  sourceArticleId?: string;
}
export interface IRecipeAtomArgs {
  title: string;
  tags: __NAMESPACE__.ITagsArgs;
  time: __NAMESPACE__.ITimeArgs;
  serves?: __NAMESPACE__.IServesArgs;
  ingredientsLists: Array<__NAMESPACE__.IIngredientsListArgs>;
  steps: Array<string>;
  credits: Array<string>;
  images: Array<com_gu_contentatom_thrift.IImageArgs>;
  sourceArticleId?: string;
}
export const RecipeAtomCodec: thrift.IStructCodec<
  IRecipeAtomArgs,
  IRecipeAtom
> = {
  encode(args: IRecipeAtomArgs, output: thrift.TProtocol): void {
    const obj = {
      title: args.title,
      tags: args.tags,
      time: args.time,
      serves: args.serves,
      ingredientsLists: args.ingredientsLists,
      steps: args.steps,
      credits: args.credits,
      images: args.images,
      sourceArticleId: args.sourceArticleId,
    };
    output.writeStructBegin('RecipeAtom');
    if (obj.title != null) {
      output.writeFieldBegin('title', thrift.TType.STRING, 1);
      output.writeString(obj.title);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[title] is unset!'
      );
    }
    if (obj.tags != null) {
      output.writeFieldBegin('tags', thrift.TType.STRUCT, 2);
      __NAMESPACE__.TagsCodec.encode(obj.tags, output);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[tags] is unset!'
      );
    }
    if (obj.time != null) {
      output.writeFieldBegin('time', thrift.TType.STRUCT, 3);
      __NAMESPACE__.TimeCodec.encode(obj.time, output);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[time] is unset!'
      );
    }
    if (obj.serves != null) {
      output.writeFieldBegin('serves', thrift.TType.STRUCT, 4);
      __NAMESPACE__.ServesCodec.encode(obj.serves, output);
      output.writeFieldEnd();
    }
    if (obj.ingredientsLists != null) {
      output.writeFieldBegin('ingredientsLists', thrift.TType.LIST, 5);
      output.writeListBegin(thrift.TType.STRUCT, obj.ingredientsLists.length);
      obj.ingredientsLists.forEach(
        (value_1: __NAMESPACE__.IIngredientsListArgs): void => {
          __NAMESPACE__.IngredientsListCodec.encode(value_1, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[ingredientsLists] is unset!'
      );
    }
    if (obj.steps != null) {
      output.writeFieldBegin('steps', thrift.TType.LIST, 6);
      output.writeListBegin(thrift.TType.STRING, obj.steps.length);
      obj.steps.forEach(
        (value_2: string): void => {
          output.writeString(value_2);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[steps] is unset!'
      );
    }
    if (obj.credits != null) {
      output.writeFieldBegin('credits', thrift.TType.LIST, 7);
      output.writeListBegin(thrift.TType.STRING, obj.credits.length);
      obj.credits.forEach(
        (value_3: string): void => {
          output.writeString(value_3);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[credits] is unset!'
      );
    }
    if (obj.images != null) {
      output.writeFieldBegin('images', thrift.TType.LIST, 8);
      output.writeListBegin(thrift.TType.STRUCT, obj.images.length);
      obj.images.forEach(
        (value_4: com_gu_contentatom_thrift.IImageArgs): void => {
          com_gu_contentatom_thrift.ImageCodec.encode(value_4, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[images] is unset!'
      );
    }
    if (obj.sourceArticleId != null) {
      output.writeFieldBegin('sourceArticleId', thrift.TType.STRING, 9);
      output.writeString(obj.sourceArticleId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IRecipeAtom {
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
            const value_5: string = input.readString();
            _args.title = value_5;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.STRUCT) {
            const value_6: __NAMESPACE__.ITags = __NAMESPACE__.TagsCodec.decode(
              input
            );
            _args.tags = value_6;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.STRUCT) {
            const value_7: __NAMESPACE__.ITime = __NAMESPACE__.TimeCodec.decode(
              input
            );
            _args.time = value_7;
          } else {
            input.skip(fieldType);
          }
          break;
        case 4:
          if (fieldType === thrift.TType.STRUCT) {
            const value_8: __NAMESPACE__.IServes = __NAMESPACE__.ServesCodec.decode(
              input
            );
            _args.serves = value_8;
          } else {
            input.skip(fieldType);
          }
          break;
        case 5:
          if (fieldType === thrift.TType.LIST) {
            const value_9: Array<__NAMESPACE__.IIngredientsList> = new Array<
              __NAMESPACE__.IIngredientsList
            >();
            const metadata_1: thrift.IThriftList = input.readListBegin();
            const size_1: number = metadata_1.size;
            for (let i_1: number = 0; i_1 < size_1; i_1++) {
              const value_10: __NAMESPACE__.IIngredientsList = __NAMESPACE__.IngredientsListCodec.decode(
                input
              );
              value_9.push(value_10);
            }
            input.readListEnd();
            _args.ingredientsLists = value_9;
          } else {
            input.skip(fieldType);
          }
          break;
        case 6:
          if (fieldType === thrift.TType.LIST) {
            const value_11: Array<string> = new Array<string>();
            const metadata_2: thrift.IThriftList = input.readListBegin();
            const size_2: number = metadata_2.size;
            for (let i_2: number = 0; i_2 < size_2; i_2++) {
              const value_12: string = input.readString();
              value_11.push(value_12);
            }
            input.readListEnd();
            _args.steps = value_11;
          } else {
            input.skip(fieldType);
          }
          break;
        case 7:
          if (fieldType === thrift.TType.LIST) {
            const value_13: Array<string> = new Array<string>();
            const metadata_3: thrift.IThriftList = input.readListBegin();
            const size_3: number = metadata_3.size;
            for (let i_3: number = 0; i_3 < size_3; i_3++) {
              const value_14: string = input.readString();
              value_13.push(value_14);
            }
            input.readListEnd();
            _args.credits = value_13;
          } else {
            input.skip(fieldType);
          }
          break;
        case 8:
          if (fieldType === thrift.TType.LIST) {
            const value_15: Array<com_gu_contentatom_thrift.IImage> = new Array<
              com_gu_contentatom_thrift.IImage
            >();
            const metadata_4: thrift.IThriftList = input.readListBegin();
            const size_4: number = metadata_4.size;
            for (let i_4: number = 0; i_4 < size_4; i_4++) {
              const value_16: com_gu_contentatom_thrift.IImage = com_gu_contentatom_thrift.ImageCodec.decode(
                input
              );
              value_15.push(value_16);
            }
            input.readListEnd();
            _args.images = value_15;
          } else {
            input.skip(fieldType);
          }
          break;
        case 9:
          if (fieldType === thrift.TType.STRING) {
            const value_17: string = input.readString();
            _args.sourceArticleId = value_17;
          } else {
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
    if (
      _args.title !== undefined &&
      _args.tags !== undefined &&
      _args.time !== undefined &&
      _args.ingredientsLists !== undefined &&
      _args.steps !== undefined &&
      _args.credits !== undefined &&
      _args.images !== undefined
    ) {
      return {
        title: _args.title,
        tags: _args.tags,
        time: _args.time,
        serves: _args.serves,
        ingredientsLists: _args.ingredientsLists,
        steps: _args.steps,
        credits: _args.credits,
        images: _args.images,
        sourceArticleId: _args.sourceArticleId,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read RecipeAtom from input'
      );
    }
  },
};
export class RecipeAtom extends thrift.StructLike implements IRecipeAtom {
  public title: string;
  public tags: __NAMESPACE__.ITags;
  public time: __NAMESPACE__.ITime;
  public serves?: __NAMESPACE__.IServes;
  public ingredientsLists: Array<__NAMESPACE__.IIngredientsList>;
  public steps: Array<string>;
  public credits: Array<string>;
  public images: Array<com_gu_contentatom_thrift.IImage>;
  public sourceArticleId?: string;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IRecipeAtomArgs) {
    super();
    if (args.title != null) {
      const value_18: string = args.title;
      this.title = value_18;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[title] is unset!'
      );
    }
    if (args.tags != null) {
      const value_19: __NAMESPACE__.ITags = new __NAMESPACE__.Tags(args.tags);
      this.tags = value_19;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[tags] is unset!'
      );
    }
    if (args.time != null) {
      const value_20: __NAMESPACE__.ITime = new __NAMESPACE__.Time(args.time);
      this.time = value_20;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[time] is unset!'
      );
    }
    if (args.serves != null) {
      const value_21: __NAMESPACE__.IServes = new __NAMESPACE__.Serves(
        args.serves
      );
      this.serves = value_21;
    }
    if (args.ingredientsLists != null) {
      const value_22: Array<__NAMESPACE__.IIngredientsList> = new Array<
        __NAMESPACE__.IIngredientsList
      >();
      args.ingredientsLists.forEach(
        (value_27: __NAMESPACE__.IIngredientsListArgs): void => {
          const value_28: __NAMESPACE__.IIngredientsList = new __NAMESPACE__.IngredientsList(
            value_27
          );
          value_22.push(value_28);
        }
      );
      this.ingredientsLists = value_22;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[ingredientsLists] is unset!'
      );
    }
    if (args.steps != null) {
      const value_23: Array<string> = new Array<string>();
      args.steps.forEach(
        (value_29: string): void => {
          const value_30: string = value_29;
          value_23.push(value_30);
        }
      );
      this.steps = value_23;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[steps] is unset!'
      );
    }
    if (args.credits != null) {
      const value_24: Array<string> = new Array<string>();
      args.credits.forEach(
        (value_31: string): void => {
          const value_32: string = value_31;
          value_24.push(value_32);
        }
      );
      this.credits = value_24;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[credits] is unset!'
      );
    }
    if (args.images != null) {
      const value_25: Array<com_gu_contentatom_thrift.IImage> = new Array<
        com_gu_contentatom_thrift.IImage
      >();
      args.images.forEach(
        (value_33: com_gu_contentatom_thrift.IImageArgs): void => {
          const value_34: com_gu_contentatom_thrift.IImage = new com_gu_contentatom_thrift.Image(
            value_33
          );
          value_25.push(value_34);
        }
      );
      this.images = value_25;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[images] is unset!'
      );
    }
    if (args.sourceArticleId != null) {
      const value_26: string = args.sourceArticleId;
      this.sourceArticleId = value_26;
    }
  }
  public static read(input: thrift.TProtocol): RecipeAtom {
    return new RecipeAtom(RecipeAtomCodec.decode(input));
  }
  public static write(args: IRecipeAtomArgs, output: thrift.TProtocol): void {
    return RecipeAtomCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return RecipeAtomCodec.encode(this, output);
  }
}
