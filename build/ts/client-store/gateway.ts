/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "dvote.types.v1";

/** Implementing the data structure from https://vocdoni.io/docs/#/architecture/components/bootnode */
export interface BootNodeGateways {
  /** network Id's */
  homestead: BootNodeGateways_NetworkNodes | undefined;
  goerli: BootNodeGateways_NetworkNodes | undefined;
  xdai: BootNodeGateways_NetworkNodes | undefined;
  sokol: BootNodeGateways_NetworkNodes | undefined;
  rinkeby: BootNodeGateways_NetworkNodes | undefined;
  /**
   * EXTERNAL FIELDS
   * Allow to use arbitrary key/values so that
   * gateways can be organized by custom values.
   */
  meta: { [key: string]: string };
}

export interface BootNodeGateways_NetworkNodes {
  dvote: BootNodeGateways_NetworkNodes_DVote[];
  web3: BootNodeGateways_NetworkNodes_Web3[];
}

export interface BootNodeGateways_NetworkNodes_DVote {
  uri: string;
  apis: string[];
  pubKey: string;
}

export interface BootNodeGateways_NetworkNodes_Web3 {
  uri: string;
}

export interface BootNodeGateways_MetaEntry {
  key: string;
  value: string;
}

const baseBootNodeGateways: object = {};

export const BootNodeGateways = {
  encode(message: BootNodeGateways, writer: Writer = Writer.create()): Writer {
    if (message.homestead !== undefined) {
      BootNodeGateways_NetworkNodes.encode(
        message.homestead,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.goerli !== undefined) {
      BootNodeGateways_NetworkNodes.encode(
        message.goerli,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.xdai !== undefined) {
      BootNodeGateways_NetworkNodes.encode(
        message.xdai,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.sokol !== undefined) {
      BootNodeGateways_NetworkNodes.encode(
        message.sokol,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.rinkeby !== undefined) {
      BootNodeGateways_NetworkNodes.encode(
        message.rinkeby,
        writer.uint32(42).fork()
      ).ldelim();
    }
    Object.entries(message.meta).forEach(([key, value]) => {
      BootNodeGateways_MetaEntry.encode(
        { key: key as any, value },
        writer.uint32(802).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BootNodeGateways {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBootNodeGateways } as BootNodeGateways;
    message.meta = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.homestead = BootNodeGateways_NetworkNodes.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.goerli = BootNodeGateways_NetworkNodes.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.xdai = BootNodeGateways_NetworkNodes.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.sokol = BootNodeGateways_NetworkNodes.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.rinkeby = BootNodeGateways_NetworkNodes.decode(
            reader,
            reader.uint32()
          );
          break;
        case 100:
          const entry100 = BootNodeGateways_MetaEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry100.value !== undefined) {
            message.meta[entry100.key] = entry100.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BootNodeGateways {
    const message = { ...baseBootNodeGateways } as BootNodeGateways;
    message.homestead =
      object.homestead !== undefined && object.homestead !== null
        ? BootNodeGateways_NetworkNodes.fromJSON(object.homestead)
        : undefined;
    message.goerli =
      object.goerli !== undefined && object.goerli !== null
        ? BootNodeGateways_NetworkNodes.fromJSON(object.goerli)
        : undefined;
    message.xdai =
      object.xdai !== undefined && object.xdai !== null
        ? BootNodeGateways_NetworkNodes.fromJSON(object.xdai)
        : undefined;
    message.sokol =
      object.sokol !== undefined && object.sokol !== null
        ? BootNodeGateways_NetworkNodes.fromJSON(object.sokol)
        : undefined;
    message.rinkeby =
      object.rinkeby !== undefined && object.rinkeby !== null
        ? BootNodeGateways_NetworkNodes.fromJSON(object.rinkeby)
        : undefined;
    message.meta = Object.entries(object.meta ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: BootNodeGateways): unknown {
    const obj: any = {};
    message.homestead !== undefined &&
      (obj.homestead = message.homestead
        ? BootNodeGateways_NetworkNodes.toJSON(message.homestead)
        : undefined);
    message.goerli !== undefined &&
      (obj.goerli = message.goerli
        ? BootNodeGateways_NetworkNodes.toJSON(message.goerli)
        : undefined);
    message.xdai !== undefined &&
      (obj.xdai = message.xdai
        ? BootNodeGateways_NetworkNodes.toJSON(message.xdai)
        : undefined);
    message.sokol !== undefined &&
      (obj.sokol = message.sokol
        ? BootNodeGateways_NetworkNodes.toJSON(message.sokol)
        : undefined);
    message.rinkeby !== undefined &&
      (obj.rinkeby = message.rinkeby
        ? BootNodeGateways_NetworkNodes.toJSON(message.rinkeby)
        : undefined);
    obj.meta = {};
    if (message.meta) {
      Object.entries(message.meta).forEach(([k, v]) => {
        obj.meta[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BootNodeGateways>, I>>(
    object: I
  ): BootNodeGateways {
    const message = { ...baseBootNodeGateways } as BootNodeGateways;
    message.homestead =
      object.homestead !== undefined && object.homestead !== null
        ? BootNodeGateways_NetworkNodes.fromPartial(object.homestead)
        : undefined;
    message.goerli =
      object.goerli !== undefined && object.goerli !== null
        ? BootNodeGateways_NetworkNodes.fromPartial(object.goerli)
        : undefined;
    message.xdai =
      object.xdai !== undefined && object.xdai !== null
        ? BootNodeGateways_NetworkNodes.fromPartial(object.xdai)
        : undefined;
    message.sokol =
      object.sokol !== undefined && object.sokol !== null
        ? BootNodeGateways_NetworkNodes.fromPartial(object.sokol)
        : undefined;
    message.rinkeby =
      object.rinkeby !== undefined && object.rinkeby !== null
        ? BootNodeGateways_NetworkNodes.fromPartial(object.rinkeby)
        : undefined;
    message.meta = Object.entries(object.meta ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

const baseBootNodeGateways_NetworkNodes: object = {};

export const BootNodeGateways_NetworkNodes = {
  encode(
    message: BootNodeGateways_NetworkNodes,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.dvote) {
      BootNodeGateways_NetworkNodes_DVote.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.web3) {
      BootNodeGateways_NetworkNodes_Web3.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BootNodeGateways_NetworkNodes {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBootNodeGateways_NetworkNodes,
    } as BootNodeGateways_NetworkNodes;
    message.dvote = [];
    message.web3 = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dvote.push(
            BootNodeGateways_NetworkNodes_DVote.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.web3.push(
            BootNodeGateways_NetworkNodes_Web3.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BootNodeGateways_NetworkNodes {
    const message = {
      ...baseBootNodeGateways_NetworkNodes,
    } as BootNodeGateways_NetworkNodes;
    message.dvote = (object.dvote ?? []).map((e: any) =>
      BootNodeGateways_NetworkNodes_DVote.fromJSON(e)
    );
    message.web3 = (object.web3 ?? []).map((e: any) =>
      BootNodeGateways_NetworkNodes_Web3.fromJSON(e)
    );
    return message;
  },

  toJSON(message: BootNodeGateways_NetworkNodes): unknown {
    const obj: any = {};
    if (message.dvote) {
      obj.dvote = message.dvote.map((e) =>
        e ? BootNodeGateways_NetworkNodes_DVote.toJSON(e) : undefined
      );
    } else {
      obj.dvote = [];
    }
    if (message.web3) {
      obj.web3 = message.web3.map((e) =>
        e ? BootNodeGateways_NetworkNodes_Web3.toJSON(e) : undefined
      );
    } else {
      obj.web3 = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BootNodeGateways_NetworkNodes>, I>>(
    object: I
  ): BootNodeGateways_NetworkNodes {
    const message = {
      ...baseBootNodeGateways_NetworkNodes,
    } as BootNodeGateways_NetworkNodes;
    message.dvote =
      object.dvote?.map((e) =>
        BootNodeGateways_NetworkNodes_DVote.fromPartial(e)
      ) || [];
    message.web3 =
      object.web3?.map((e) =>
        BootNodeGateways_NetworkNodes_Web3.fromPartial(e)
      ) || [];
    return message;
  },
};

const baseBootNodeGateways_NetworkNodes_DVote: object = {
  uri: "",
  apis: "",
  pubKey: "",
};

export const BootNodeGateways_NetworkNodes_DVote = {
  encode(
    message: BootNodeGateways_NetworkNodes_DVote,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    for (const v of message.apis) {
      writer.uint32(18).string(v!);
    }
    if (message.pubKey !== "") {
      writer.uint32(26).string(message.pubKey);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BootNodeGateways_NetworkNodes_DVote {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBootNodeGateways_NetworkNodes_DVote,
    } as BootNodeGateways_NetworkNodes_DVote;
    message.apis = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string();
          break;
        case 2:
          message.apis.push(reader.string());
          break;
        case 3:
          message.pubKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BootNodeGateways_NetworkNodes_DVote {
    const message = {
      ...baseBootNodeGateways_NetworkNodes_DVote,
    } as BootNodeGateways_NetworkNodes_DVote;
    message.uri =
      object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
    message.apis = (object.apis ?? []).map((e: any) => String(e));
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? String(object.pubKey)
        : "";
    return message;
  },

  toJSON(message: BootNodeGateways_NetworkNodes_DVote): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    if (message.apis) {
      obj.apis = message.apis.map((e) => e);
    } else {
      obj.apis = [];
    }
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BootNodeGateways_NetworkNodes_DVote>, I>
  >(object: I): BootNodeGateways_NetworkNodes_DVote {
    const message = {
      ...baseBootNodeGateways_NetworkNodes_DVote,
    } as BootNodeGateways_NetworkNodes_DVote;
    message.uri = object.uri ?? "";
    message.apis = object.apis?.map((e) => e) || [];
    message.pubKey = object.pubKey ?? "";
    return message;
  },
};

const baseBootNodeGateways_NetworkNodes_Web3: object = { uri: "" };

export const BootNodeGateways_NetworkNodes_Web3 = {
  encode(
    message: BootNodeGateways_NetworkNodes_Web3,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BootNodeGateways_NetworkNodes_Web3 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBootNodeGateways_NetworkNodes_Web3,
    } as BootNodeGateways_NetworkNodes_Web3;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BootNodeGateways_NetworkNodes_Web3 {
    const message = {
      ...baseBootNodeGateways_NetworkNodes_Web3,
    } as BootNodeGateways_NetworkNodes_Web3;
    message.uri =
      object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
    return message;
  },

  toJSON(message: BootNodeGateways_NetworkNodes_Web3): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BootNodeGateways_NetworkNodes_Web3>, I>
  >(object: I): BootNodeGateways_NetworkNodes_Web3 {
    const message = {
      ...baseBootNodeGateways_NetworkNodes_Web3,
    } as BootNodeGateways_NetworkNodes_Web3;
    message.uri = object.uri ?? "";
    return message;
  },
};

const baseBootNodeGateways_MetaEntry: object = { key: "", value: "" };

export const BootNodeGateways_MetaEntry = {
  encode(
    message: BootNodeGateways_MetaEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BootNodeGateways_MetaEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBootNodeGateways_MetaEntry,
    } as BootNodeGateways_MetaEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BootNodeGateways_MetaEntry {
    const message = {
      ...baseBootNodeGateways_MetaEntry,
    } as BootNodeGateways_MetaEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: BootNodeGateways_MetaEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BootNodeGateways_MetaEntry>, I>>(
    object: I
  ): BootNodeGateways_MetaEntry {
    const message = {
      ...baseBootNodeGateways_MetaEntry,
    } as BootNodeGateways_MetaEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & {
      $case: T["$case"];
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
