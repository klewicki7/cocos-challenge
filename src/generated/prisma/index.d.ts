
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model instruments
 * 
 */
export type instruments = $Result.DefaultSelection<Prisma.$instrumentsPayload>
/**
 * Model marketdata
 * 
 */
export type marketdata = $Result.DefaultSelection<Prisma.$marketdataPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Instruments
 * const instruments = await prisma.instruments.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Instruments
   * const instruments = await prisma.instruments.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.instruments`: Exposes CRUD operations for the **instruments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instruments
    * const instruments = await prisma.instruments.findMany()
    * ```
    */
  get instruments(): Prisma.instrumentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketdata`: Exposes CRUD operations for the **marketdata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marketdata
    * const marketdata = await prisma.marketdata.findMany()
    * ```
    */
  get marketdata(): Prisma.marketdataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    instruments: 'instruments',
    marketdata: 'marketdata',
    orders: 'orders',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "instruments" | "marketdata" | "orders" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      instruments: {
        payload: Prisma.$instrumentsPayload<ExtArgs>
        fields: Prisma.instrumentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.instrumentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.instrumentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>
          }
          findFirst: {
            args: Prisma.instrumentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.instrumentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>
          }
          findMany: {
            args: Prisma.instrumentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>[]
          }
          create: {
            args: Prisma.instrumentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>
          }
          createMany: {
            args: Prisma.instrumentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.instrumentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>[]
          }
          delete: {
            args: Prisma.instrumentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>
          }
          update: {
            args: Prisma.instrumentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>
          }
          deleteMany: {
            args: Prisma.instrumentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.instrumentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.instrumentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>[]
          }
          upsert: {
            args: Prisma.instrumentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>
          }
          aggregate: {
            args: Prisma.InstrumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstruments>
          }
          groupBy: {
            args: Prisma.instrumentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstrumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.instrumentsCountArgs<ExtArgs>
            result: $Utils.Optional<InstrumentsCountAggregateOutputType> | number
          }
        }
      }
      marketdata: {
        payload: Prisma.$marketdataPayload<ExtArgs>
        fields: Prisma.marketdataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.marketdataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketdataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.marketdataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketdataPayload>
          }
          findFirst: {
            args: Prisma.marketdataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketdataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.marketdataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketdataPayload>
          }
          findMany: {
            args: Prisma.marketdataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketdataPayload>[]
          }
          create: {
            args: Prisma.marketdataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketdataPayload>
          }
          createMany: {
            args: Prisma.marketdataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.marketdataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketdataPayload>[]
          }
          delete: {
            args: Prisma.marketdataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketdataPayload>
          }
          update: {
            args: Prisma.marketdataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketdataPayload>
          }
          deleteMany: {
            args: Prisma.marketdataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.marketdataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.marketdataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketdataPayload>[]
          }
          upsert: {
            args: Prisma.marketdataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketdataPayload>
          }
          aggregate: {
            args: Prisma.MarketdataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketdata>
          }
          groupBy: {
            args: Prisma.marketdataGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketdataGroupByOutputType>[]
          }
          count: {
            args: Prisma.marketdataCountArgs<ExtArgs>
            result: $Utils.Optional<MarketdataCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    instruments?: instrumentsOmit
    marketdata?: marketdataOmit
    orders?: ordersOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type InstrumentsCountOutputType
   */

  export type InstrumentsCountOutputType = {
    marketdata: number
    orders: number
  }

  export type InstrumentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marketdata?: boolean | InstrumentsCountOutputTypeCountMarketdataArgs
    orders?: boolean | InstrumentsCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * InstrumentsCountOutputType without action
   */
  export type InstrumentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentsCountOutputType
     */
    select?: InstrumentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstrumentsCountOutputType without action
   */
  export type InstrumentsCountOutputTypeCountMarketdataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: marketdataWhereInput
  }

  /**
   * InstrumentsCountOutputType without action
   */
  export type InstrumentsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    orders: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model instruments
   */

  export type AggregateInstruments = {
    _count: InstrumentsCountAggregateOutputType | null
    _avg: InstrumentsAvgAggregateOutputType | null
    _sum: InstrumentsSumAggregateOutputType | null
    _min: InstrumentsMinAggregateOutputType | null
    _max: InstrumentsMaxAggregateOutputType | null
  }

  export type InstrumentsAvgAggregateOutputType = {
    id: number | null
  }

  export type InstrumentsSumAggregateOutputType = {
    id: number | null
  }

  export type InstrumentsMinAggregateOutputType = {
    id: number | null
    ticker: string | null
    name: string | null
    type: string | null
  }

  export type InstrumentsMaxAggregateOutputType = {
    id: number | null
    ticker: string | null
    name: string | null
    type: string | null
  }

  export type InstrumentsCountAggregateOutputType = {
    id: number
    ticker: number
    name: number
    type: number
    _all: number
  }


  export type InstrumentsAvgAggregateInputType = {
    id?: true
  }

  export type InstrumentsSumAggregateInputType = {
    id?: true
  }

  export type InstrumentsMinAggregateInputType = {
    id?: true
    ticker?: true
    name?: true
    type?: true
  }

  export type InstrumentsMaxAggregateInputType = {
    id?: true
    ticker?: true
    name?: true
    type?: true
  }

  export type InstrumentsCountAggregateInputType = {
    id?: true
    ticker?: true
    name?: true
    type?: true
    _all?: true
  }

  export type InstrumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which instruments to aggregate.
     */
    where?: instrumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instruments to fetch.
     */
    orderBy?: instrumentsOrderByWithRelationInput | instrumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: instrumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned instruments
    **/
    _count?: true | InstrumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstrumentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstrumentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstrumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstrumentsMaxAggregateInputType
  }

  export type GetInstrumentsAggregateType<T extends InstrumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateInstruments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstruments[P]>
      : GetScalarType<T[P], AggregateInstruments[P]>
  }




  export type instrumentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: instrumentsWhereInput
    orderBy?: instrumentsOrderByWithAggregationInput | instrumentsOrderByWithAggregationInput[]
    by: InstrumentsScalarFieldEnum[] | InstrumentsScalarFieldEnum
    having?: instrumentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstrumentsCountAggregateInputType | true
    _avg?: InstrumentsAvgAggregateInputType
    _sum?: InstrumentsSumAggregateInputType
    _min?: InstrumentsMinAggregateInputType
    _max?: InstrumentsMaxAggregateInputType
  }

  export type InstrumentsGroupByOutputType = {
    id: number
    ticker: string | null
    name: string | null
    type: string | null
    _count: InstrumentsCountAggregateOutputType | null
    _avg: InstrumentsAvgAggregateOutputType | null
    _sum: InstrumentsSumAggregateOutputType | null
    _min: InstrumentsMinAggregateOutputType | null
    _max: InstrumentsMaxAggregateOutputType | null
  }

  type GetInstrumentsGroupByPayload<T extends instrumentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstrumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstrumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstrumentsGroupByOutputType[P]>
            : GetScalarType<T[P], InstrumentsGroupByOutputType[P]>
        }
      >
    >


  export type instrumentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    name?: boolean
    type?: boolean
    marketdata?: boolean | instruments$marketdataArgs<ExtArgs>
    orders?: boolean | instruments$ordersArgs<ExtArgs>
    _count?: boolean | InstrumentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instruments"]>

  export type instrumentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    name?: boolean
    type?: boolean
  }, ExtArgs["result"]["instruments"]>

  export type instrumentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    name?: boolean
    type?: boolean
  }, ExtArgs["result"]["instruments"]>

  export type instrumentsSelectScalar = {
    id?: boolean
    ticker?: boolean
    name?: boolean
    type?: boolean
  }

  export type instrumentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticker" | "name" | "type", ExtArgs["result"]["instruments"]>
  export type instrumentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marketdata?: boolean | instruments$marketdataArgs<ExtArgs>
    orders?: boolean | instruments$ordersArgs<ExtArgs>
    _count?: boolean | InstrumentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type instrumentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type instrumentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $instrumentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "instruments"
    objects: {
      marketdata: Prisma.$marketdataPayload<ExtArgs>[]
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticker: string | null
      name: string | null
      type: string | null
    }, ExtArgs["result"]["instruments"]>
    composites: {}
  }

  type instrumentsGetPayload<S extends boolean | null | undefined | instrumentsDefaultArgs> = $Result.GetResult<Prisma.$instrumentsPayload, S>

  type instrumentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<instrumentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstrumentsCountAggregateInputType | true
    }

  export interface instrumentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['instruments'], meta: { name: 'instruments' } }
    /**
     * Find zero or one Instruments that matches the filter.
     * @param {instrumentsFindUniqueArgs} args - Arguments to find a Instruments
     * @example
     * // Get one Instruments
     * const instruments = await prisma.instruments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends instrumentsFindUniqueArgs>(args: SelectSubset<T, instrumentsFindUniqueArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instruments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {instrumentsFindUniqueOrThrowArgs} args - Arguments to find a Instruments
     * @example
     * // Get one Instruments
     * const instruments = await prisma.instruments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends instrumentsFindUniqueOrThrowArgs>(args: SelectSubset<T, instrumentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instruments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentsFindFirstArgs} args - Arguments to find a Instruments
     * @example
     * // Get one Instruments
     * const instruments = await prisma.instruments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends instrumentsFindFirstArgs>(args?: SelectSubset<T, instrumentsFindFirstArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instruments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentsFindFirstOrThrowArgs} args - Arguments to find a Instruments
     * @example
     * // Get one Instruments
     * const instruments = await prisma.instruments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends instrumentsFindFirstOrThrowArgs>(args?: SelectSubset<T, instrumentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instruments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instruments
     * const instruments = await prisma.instruments.findMany()
     * 
     * // Get first 10 Instruments
     * const instruments = await prisma.instruments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instrumentsWithIdOnly = await prisma.instruments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends instrumentsFindManyArgs>(args?: SelectSubset<T, instrumentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instruments.
     * @param {instrumentsCreateArgs} args - Arguments to create a Instruments.
     * @example
     * // Create one Instruments
     * const Instruments = await prisma.instruments.create({
     *   data: {
     *     // ... data to create a Instruments
     *   }
     * })
     * 
     */
    create<T extends instrumentsCreateArgs>(args: SelectSubset<T, instrumentsCreateArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instruments.
     * @param {instrumentsCreateManyArgs} args - Arguments to create many Instruments.
     * @example
     * // Create many Instruments
     * const instruments = await prisma.instruments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends instrumentsCreateManyArgs>(args?: SelectSubset<T, instrumentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instruments and returns the data saved in the database.
     * @param {instrumentsCreateManyAndReturnArgs} args - Arguments to create many Instruments.
     * @example
     * // Create many Instruments
     * const instruments = await prisma.instruments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instruments and only return the `id`
     * const instrumentsWithIdOnly = await prisma.instruments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends instrumentsCreateManyAndReturnArgs>(args?: SelectSubset<T, instrumentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instruments.
     * @param {instrumentsDeleteArgs} args - Arguments to delete one Instruments.
     * @example
     * // Delete one Instruments
     * const Instruments = await prisma.instruments.delete({
     *   where: {
     *     // ... filter to delete one Instruments
     *   }
     * })
     * 
     */
    delete<T extends instrumentsDeleteArgs>(args: SelectSubset<T, instrumentsDeleteArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instruments.
     * @param {instrumentsUpdateArgs} args - Arguments to update one Instruments.
     * @example
     * // Update one Instruments
     * const instruments = await prisma.instruments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends instrumentsUpdateArgs>(args: SelectSubset<T, instrumentsUpdateArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instruments.
     * @param {instrumentsDeleteManyArgs} args - Arguments to filter Instruments to delete.
     * @example
     * // Delete a few Instruments
     * const { count } = await prisma.instruments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends instrumentsDeleteManyArgs>(args?: SelectSubset<T, instrumentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instruments
     * const instruments = await prisma.instruments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends instrumentsUpdateManyArgs>(args: SelectSubset<T, instrumentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instruments and returns the data updated in the database.
     * @param {instrumentsUpdateManyAndReturnArgs} args - Arguments to update many Instruments.
     * @example
     * // Update many Instruments
     * const instruments = await prisma.instruments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instruments and only return the `id`
     * const instrumentsWithIdOnly = await prisma.instruments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends instrumentsUpdateManyAndReturnArgs>(args: SelectSubset<T, instrumentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instruments.
     * @param {instrumentsUpsertArgs} args - Arguments to update or create a Instruments.
     * @example
     * // Update or create a Instruments
     * const instruments = await prisma.instruments.upsert({
     *   create: {
     *     // ... data to create a Instruments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instruments we want to update
     *   }
     * })
     */
    upsert<T extends instrumentsUpsertArgs>(args: SelectSubset<T, instrumentsUpsertArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentsCountArgs} args - Arguments to filter Instruments to count.
     * @example
     * // Count the number of Instruments
     * const count = await prisma.instruments.count({
     *   where: {
     *     // ... the filter for the Instruments we want to count
     *   }
     * })
    **/
    count<T extends instrumentsCountArgs>(
      args?: Subset<T, instrumentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstrumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstrumentsAggregateArgs>(args: Subset<T, InstrumentsAggregateArgs>): Prisma.PrismaPromise<GetInstrumentsAggregateType<T>>

    /**
     * Group by Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends instrumentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: instrumentsGroupByArgs['orderBy'] }
        : { orderBy?: instrumentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, instrumentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstrumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the instruments model
   */
  readonly fields: instrumentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for instruments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__instrumentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    marketdata<T extends instruments$marketdataArgs<ExtArgs> = {}>(args?: Subset<T, instruments$marketdataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marketdataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends instruments$ordersArgs<ExtArgs> = {}>(args?: Subset<T, instruments$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the instruments model
   */
  interface instrumentsFieldRefs {
    readonly id: FieldRef<"instruments", 'Int'>
    readonly ticker: FieldRef<"instruments", 'String'>
    readonly name: FieldRef<"instruments", 'String'>
    readonly type: FieldRef<"instruments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * instruments findUnique
   */
  export type instrumentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instrumentsInclude<ExtArgs> | null
    /**
     * Filter, which instruments to fetch.
     */
    where: instrumentsWhereUniqueInput
  }

  /**
   * instruments findUniqueOrThrow
   */
  export type instrumentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instrumentsInclude<ExtArgs> | null
    /**
     * Filter, which instruments to fetch.
     */
    where: instrumentsWhereUniqueInput
  }

  /**
   * instruments findFirst
   */
  export type instrumentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instrumentsInclude<ExtArgs> | null
    /**
     * Filter, which instruments to fetch.
     */
    where?: instrumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instruments to fetch.
     */
    orderBy?: instrumentsOrderByWithRelationInput | instrumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for instruments.
     */
    cursor?: instrumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of instruments.
     */
    distinct?: InstrumentsScalarFieldEnum | InstrumentsScalarFieldEnum[]
  }

  /**
   * instruments findFirstOrThrow
   */
  export type instrumentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instrumentsInclude<ExtArgs> | null
    /**
     * Filter, which instruments to fetch.
     */
    where?: instrumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instruments to fetch.
     */
    orderBy?: instrumentsOrderByWithRelationInput | instrumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for instruments.
     */
    cursor?: instrumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of instruments.
     */
    distinct?: InstrumentsScalarFieldEnum | InstrumentsScalarFieldEnum[]
  }

  /**
   * instruments findMany
   */
  export type instrumentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instrumentsInclude<ExtArgs> | null
    /**
     * Filter, which instruments to fetch.
     */
    where?: instrumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instruments to fetch.
     */
    orderBy?: instrumentsOrderByWithRelationInput | instrumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing instruments.
     */
    cursor?: instrumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instruments.
     */
    skip?: number
    distinct?: InstrumentsScalarFieldEnum | InstrumentsScalarFieldEnum[]
  }

  /**
   * instruments create
   */
  export type instrumentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instrumentsInclude<ExtArgs> | null
    /**
     * The data needed to create a instruments.
     */
    data?: XOR<instrumentsCreateInput, instrumentsUncheckedCreateInput>
  }

  /**
   * instruments createMany
   */
  export type instrumentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many instruments.
     */
    data: instrumentsCreateManyInput | instrumentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * instruments createManyAndReturn
   */
  export type instrumentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * The data used to create many instruments.
     */
    data: instrumentsCreateManyInput | instrumentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * instruments update
   */
  export type instrumentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instrumentsInclude<ExtArgs> | null
    /**
     * The data needed to update a instruments.
     */
    data: XOR<instrumentsUpdateInput, instrumentsUncheckedUpdateInput>
    /**
     * Choose, which instruments to update.
     */
    where: instrumentsWhereUniqueInput
  }

  /**
   * instruments updateMany
   */
  export type instrumentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update instruments.
     */
    data: XOR<instrumentsUpdateManyMutationInput, instrumentsUncheckedUpdateManyInput>
    /**
     * Filter which instruments to update
     */
    where?: instrumentsWhereInput
    /**
     * Limit how many instruments to update.
     */
    limit?: number
  }

  /**
   * instruments updateManyAndReturn
   */
  export type instrumentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * The data used to update instruments.
     */
    data: XOR<instrumentsUpdateManyMutationInput, instrumentsUncheckedUpdateManyInput>
    /**
     * Filter which instruments to update
     */
    where?: instrumentsWhereInput
    /**
     * Limit how many instruments to update.
     */
    limit?: number
  }

  /**
   * instruments upsert
   */
  export type instrumentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instrumentsInclude<ExtArgs> | null
    /**
     * The filter to search for the instruments to update in case it exists.
     */
    where: instrumentsWhereUniqueInput
    /**
     * In case the instruments found by the `where` argument doesn't exist, create a new instruments with this data.
     */
    create: XOR<instrumentsCreateInput, instrumentsUncheckedCreateInput>
    /**
     * In case the instruments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<instrumentsUpdateInput, instrumentsUncheckedUpdateInput>
  }

  /**
   * instruments delete
   */
  export type instrumentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instrumentsInclude<ExtArgs> | null
    /**
     * Filter which instruments to delete.
     */
    where: instrumentsWhereUniqueInput
  }

  /**
   * instruments deleteMany
   */
  export type instrumentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which instruments to delete
     */
    where?: instrumentsWhereInput
    /**
     * Limit how many instruments to delete.
     */
    limit?: number
  }

  /**
   * instruments.marketdata
   */
  export type instruments$marketdataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketdata
     */
    select?: marketdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketdata
     */
    omit?: marketdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketdataInclude<ExtArgs> | null
    where?: marketdataWhereInput
    orderBy?: marketdataOrderByWithRelationInput | marketdataOrderByWithRelationInput[]
    cursor?: marketdataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarketdataScalarFieldEnum | MarketdataScalarFieldEnum[]
  }

  /**
   * instruments.orders
   */
  export type instruments$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * instruments without action
   */
  export type instrumentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instrumentsInclude<ExtArgs> | null
  }


  /**
   * Model marketdata
   */

  export type AggregateMarketdata = {
    _count: MarketdataCountAggregateOutputType | null
    _avg: MarketdataAvgAggregateOutputType | null
    _sum: MarketdataSumAggregateOutputType | null
    _min: MarketdataMinAggregateOutputType | null
    _max: MarketdataMaxAggregateOutputType | null
  }

  export type MarketdataAvgAggregateOutputType = {
    id: number | null
    instrumentid: number | null
    high: Decimal | null
    low: Decimal | null
    open: Decimal | null
    close: Decimal | null
    previousclose: Decimal | null
  }

  export type MarketdataSumAggregateOutputType = {
    id: number | null
    instrumentid: number | null
    high: Decimal | null
    low: Decimal | null
    open: Decimal | null
    close: Decimal | null
    previousclose: Decimal | null
  }

  export type MarketdataMinAggregateOutputType = {
    id: number | null
    instrumentid: number | null
    high: Decimal | null
    low: Decimal | null
    open: Decimal | null
    close: Decimal | null
    previousclose: Decimal | null
    date: Date | null
  }

  export type MarketdataMaxAggregateOutputType = {
    id: number | null
    instrumentid: number | null
    high: Decimal | null
    low: Decimal | null
    open: Decimal | null
    close: Decimal | null
    previousclose: Decimal | null
    date: Date | null
  }

  export type MarketdataCountAggregateOutputType = {
    id: number
    instrumentid: number
    high: number
    low: number
    open: number
    close: number
    previousclose: number
    date: number
    _all: number
  }


  export type MarketdataAvgAggregateInputType = {
    id?: true
    instrumentid?: true
    high?: true
    low?: true
    open?: true
    close?: true
    previousclose?: true
  }

  export type MarketdataSumAggregateInputType = {
    id?: true
    instrumentid?: true
    high?: true
    low?: true
    open?: true
    close?: true
    previousclose?: true
  }

  export type MarketdataMinAggregateInputType = {
    id?: true
    instrumentid?: true
    high?: true
    low?: true
    open?: true
    close?: true
    previousclose?: true
    date?: true
  }

  export type MarketdataMaxAggregateInputType = {
    id?: true
    instrumentid?: true
    high?: true
    low?: true
    open?: true
    close?: true
    previousclose?: true
    date?: true
  }

  export type MarketdataCountAggregateInputType = {
    id?: true
    instrumentid?: true
    high?: true
    low?: true
    open?: true
    close?: true
    previousclose?: true
    date?: true
    _all?: true
  }

  export type MarketdataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which marketdata to aggregate.
     */
    where?: marketdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marketdata to fetch.
     */
    orderBy?: marketdataOrderByWithRelationInput | marketdataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: marketdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marketdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marketdata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned marketdata
    **/
    _count?: true | MarketdataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketdataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketdataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketdataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketdataMaxAggregateInputType
  }

  export type GetMarketdataAggregateType<T extends MarketdataAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketdata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketdata[P]>
      : GetScalarType<T[P], AggregateMarketdata[P]>
  }




  export type marketdataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: marketdataWhereInput
    orderBy?: marketdataOrderByWithAggregationInput | marketdataOrderByWithAggregationInput[]
    by: MarketdataScalarFieldEnum[] | MarketdataScalarFieldEnum
    having?: marketdataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketdataCountAggregateInputType | true
    _avg?: MarketdataAvgAggregateInputType
    _sum?: MarketdataSumAggregateInputType
    _min?: MarketdataMinAggregateInputType
    _max?: MarketdataMaxAggregateInputType
  }

  export type MarketdataGroupByOutputType = {
    id: number
    instrumentid: number | null
    high: Decimal | null
    low: Decimal | null
    open: Decimal | null
    close: Decimal | null
    previousclose: Decimal | null
    date: Date | null
    _count: MarketdataCountAggregateOutputType | null
    _avg: MarketdataAvgAggregateOutputType | null
    _sum: MarketdataSumAggregateOutputType | null
    _min: MarketdataMinAggregateOutputType | null
    _max: MarketdataMaxAggregateOutputType | null
  }

  type GetMarketdataGroupByPayload<T extends marketdataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketdataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketdataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketdataGroupByOutputType[P]>
            : GetScalarType<T[P], MarketdataGroupByOutputType[P]>
        }
      >
    >


  export type marketdataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instrumentid?: boolean
    high?: boolean
    low?: boolean
    open?: boolean
    close?: boolean
    previousclose?: boolean
    date?: boolean
    instruments?: boolean | marketdata$instrumentsArgs<ExtArgs>
  }, ExtArgs["result"]["marketdata"]>

  export type marketdataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instrumentid?: boolean
    high?: boolean
    low?: boolean
    open?: boolean
    close?: boolean
    previousclose?: boolean
    date?: boolean
    instruments?: boolean | marketdata$instrumentsArgs<ExtArgs>
  }, ExtArgs["result"]["marketdata"]>

  export type marketdataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instrumentid?: boolean
    high?: boolean
    low?: boolean
    open?: boolean
    close?: boolean
    previousclose?: boolean
    date?: boolean
    instruments?: boolean | marketdata$instrumentsArgs<ExtArgs>
  }, ExtArgs["result"]["marketdata"]>

  export type marketdataSelectScalar = {
    id?: boolean
    instrumentid?: boolean
    high?: boolean
    low?: boolean
    open?: boolean
    close?: boolean
    previousclose?: boolean
    date?: boolean
  }

  export type marketdataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instrumentid" | "high" | "low" | "open" | "close" | "previousclose" | "date", ExtArgs["result"]["marketdata"]>
  export type marketdataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instruments?: boolean | marketdata$instrumentsArgs<ExtArgs>
  }
  export type marketdataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instruments?: boolean | marketdata$instrumentsArgs<ExtArgs>
  }
  export type marketdataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instruments?: boolean | marketdata$instrumentsArgs<ExtArgs>
  }

  export type $marketdataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "marketdata"
    objects: {
      instruments: Prisma.$instrumentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instrumentid: number | null
      high: Prisma.Decimal | null
      low: Prisma.Decimal | null
      open: Prisma.Decimal | null
      close: Prisma.Decimal | null
      previousclose: Prisma.Decimal | null
      date: Date | null
    }, ExtArgs["result"]["marketdata"]>
    composites: {}
  }

  type marketdataGetPayload<S extends boolean | null | undefined | marketdataDefaultArgs> = $Result.GetResult<Prisma.$marketdataPayload, S>

  type marketdataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<marketdataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketdataCountAggregateInputType | true
    }

  export interface marketdataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['marketdata'], meta: { name: 'marketdata' } }
    /**
     * Find zero or one Marketdata that matches the filter.
     * @param {marketdataFindUniqueArgs} args - Arguments to find a Marketdata
     * @example
     * // Get one Marketdata
     * const marketdata = await prisma.marketdata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends marketdataFindUniqueArgs>(args: SelectSubset<T, marketdataFindUniqueArgs<ExtArgs>>): Prisma__marketdataClient<$Result.GetResult<Prisma.$marketdataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marketdata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {marketdataFindUniqueOrThrowArgs} args - Arguments to find a Marketdata
     * @example
     * // Get one Marketdata
     * const marketdata = await prisma.marketdata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends marketdataFindUniqueOrThrowArgs>(args: SelectSubset<T, marketdataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__marketdataClient<$Result.GetResult<Prisma.$marketdataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marketdata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketdataFindFirstArgs} args - Arguments to find a Marketdata
     * @example
     * // Get one Marketdata
     * const marketdata = await prisma.marketdata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends marketdataFindFirstArgs>(args?: SelectSubset<T, marketdataFindFirstArgs<ExtArgs>>): Prisma__marketdataClient<$Result.GetResult<Prisma.$marketdataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marketdata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketdataFindFirstOrThrowArgs} args - Arguments to find a Marketdata
     * @example
     * // Get one Marketdata
     * const marketdata = await prisma.marketdata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends marketdataFindFirstOrThrowArgs>(args?: SelectSubset<T, marketdataFindFirstOrThrowArgs<ExtArgs>>): Prisma__marketdataClient<$Result.GetResult<Prisma.$marketdataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marketdata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketdataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marketdata
     * const marketdata = await prisma.marketdata.findMany()
     * 
     * // Get first 10 Marketdata
     * const marketdata = await prisma.marketdata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketdataWithIdOnly = await prisma.marketdata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends marketdataFindManyArgs>(args?: SelectSubset<T, marketdataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marketdataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marketdata.
     * @param {marketdataCreateArgs} args - Arguments to create a Marketdata.
     * @example
     * // Create one Marketdata
     * const Marketdata = await prisma.marketdata.create({
     *   data: {
     *     // ... data to create a Marketdata
     *   }
     * })
     * 
     */
    create<T extends marketdataCreateArgs>(args: SelectSubset<T, marketdataCreateArgs<ExtArgs>>): Prisma__marketdataClient<$Result.GetResult<Prisma.$marketdataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marketdata.
     * @param {marketdataCreateManyArgs} args - Arguments to create many Marketdata.
     * @example
     * // Create many Marketdata
     * const marketdata = await prisma.marketdata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends marketdataCreateManyArgs>(args?: SelectSubset<T, marketdataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marketdata and returns the data saved in the database.
     * @param {marketdataCreateManyAndReturnArgs} args - Arguments to create many Marketdata.
     * @example
     * // Create many Marketdata
     * const marketdata = await prisma.marketdata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marketdata and only return the `id`
     * const marketdataWithIdOnly = await prisma.marketdata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends marketdataCreateManyAndReturnArgs>(args?: SelectSubset<T, marketdataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marketdataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Marketdata.
     * @param {marketdataDeleteArgs} args - Arguments to delete one Marketdata.
     * @example
     * // Delete one Marketdata
     * const Marketdata = await prisma.marketdata.delete({
     *   where: {
     *     // ... filter to delete one Marketdata
     *   }
     * })
     * 
     */
    delete<T extends marketdataDeleteArgs>(args: SelectSubset<T, marketdataDeleteArgs<ExtArgs>>): Prisma__marketdataClient<$Result.GetResult<Prisma.$marketdataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marketdata.
     * @param {marketdataUpdateArgs} args - Arguments to update one Marketdata.
     * @example
     * // Update one Marketdata
     * const marketdata = await prisma.marketdata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends marketdataUpdateArgs>(args: SelectSubset<T, marketdataUpdateArgs<ExtArgs>>): Prisma__marketdataClient<$Result.GetResult<Prisma.$marketdataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marketdata.
     * @param {marketdataDeleteManyArgs} args - Arguments to filter Marketdata to delete.
     * @example
     * // Delete a few Marketdata
     * const { count } = await prisma.marketdata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends marketdataDeleteManyArgs>(args?: SelectSubset<T, marketdataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marketdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketdataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marketdata
     * const marketdata = await prisma.marketdata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends marketdataUpdateManyArgs>(args: SelectSubset<T, marketdataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marketdata and returns the data updated in the database.
     * @param {marketdataUpdateManyAndReturnArgs} args - Arguments to update many Marketdata.
     * @example
     * // Update many Marketdata
     * const marketdata = await prisma.marketdata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marketdata and only return the `id`
     * const marketdataWithIdOnly = await prisma.marketdata.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends marketdataUpdateManyAndReturnArgs>(args: SelectSubset<T, marketdataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marketdataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Marketdata.
     * @param {marketdataUpsertArgs} args - Arguments to update or create a Marketdata.
     * @example
     * // Update or create a Marketdata
     * const marketdata = await prisma.marketdata.upsert({
     *   create: {
     *     // ... data to create a Marketdata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marketdata we want to update
     *   }
     * })
     */
    upsert<T extends marketdataUpsertArgs>(args: SelectSubset<T, marketdataUpsertArgs<ExtArgs>>): Prisma__marketdataClient<$Result.GetResult<Prisma.$marketdataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marketdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketdataCountArgs} args - Arguments to filter Marketdata to count.
     * @example
     * // Count the number of Marketdata
     * const count = await prisma.marketdata.count({
     *   where: {
     *     // ... the filter for the Marketdata we want to count
     *   }
     * })
    **/
    count<T extends marketdataCountArgs>(
      args?: Subset<T, marketdataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketdataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marketdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketdataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketdataAggregateArgs>(args: Subset<T, MarketdataAggregateArgs>): Prisma.PrismaPromise<GetMarketdataAggregateType<T>>

    /**
     * Group by Marketdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketdataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends marketdataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: marketdataGroupByArgs['orderBy'] }
        : { orderBy?: marketdataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, marketdataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketdataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the marketdata model
   */
  readonly fields: marketdataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for marketdata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__marketdataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instruments<T extends marketdata$instrumentsArgs<ExtArgs> = {}>(args?: Subset<T, marketdata$instrumentsArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the marketdata model
   */
  interface marketdataFieldRefs {
    readonly id: FieldRef<"marketdata", 'Int'>
    readonly instrumentid: FieldRef<"marketdata", 'Int'>
    readonly high: FieldRef<"marketdata", 'Decimal'>
    readonly low: FieldRef<"marketdata", 'Decimal'>
    readonly open: FieldRef<"marketdata", 'Decimal'>
    readonly close: FieldRef<"marketdata", 'Decimal'>
    readonly previousclose: FieldRef<"marketdata", 'Decimal'>
    readonly date: FieldRef<"marketdata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * marketdata findUnique
   */
  export type marketdataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketdata
     */
    select?: marketdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketdata
     */
    omit?: marketdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketdataInclude<ExtArgs> | null
    /**
     * Filter, which marketdata to fetch.
     */
    where: marketdataWhereUniqueInput
  }

  /**
   * marketdata findUniqueOrThrow
   */
  export type marketdataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketdata
     */
    select?: marketdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketdata
     */
    omit?: marketdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketdataInclude<ExtArgs> | null
    /**
     * Filter, which marketdata to fetch.
     */
    where: marketdataWhereUniqueInput
  }

  /**
   * marketdata findFirst
   */
  export type marketdataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketdata
     */
    select?: marketdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketdata
     */
    omit?: marketdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketdataInclude<ExtArgs> | null
    /**
     * Filter, which marketdata to fetch.
     */
    where?: marketdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marketdata to fetch.
     */
    orderBy?: marketdataOrderByWithRelationInput | marketdataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for marketdata.
     */
    cursor?: marketdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marketdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marketdata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of marketdata.
     */
    distinct?: MarketdataScalarFieldEnum | MarketdataScalarFieldEnum[]
  }

  /**
   * marketdata findFirstOrThrow
   */
  export type marketdataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketdata
     */
    select?: marketdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketdata
     */
    omit?: marketdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketdataInclude<ExtArgs> | null
    /**
     * Filter, which marketdata to fetch.
     */
    where?: marketdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marketdata to fetch.
     */
    orderBy?: marketdataOrderByWithRelationInput | marketdataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for marketdata.
     */
    cursor?: marketdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marketdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marketdata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of marketdata.
     */
    distinct?: MarketdataScalarFieldEnum | MarketdataScalarFieldEnum[]
  }

  /**
   * marketdata findMany
   */
  export type marketdataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketdata
     */
    select?: marketdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketdata
     */
    omit?: marketdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketdataInclude<ExtArgs> | null
    /**
     * Filter, which marketdata to fetch.
     */
    where?: marketdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marketdata to fetch.
     */
    orderBy?: marketdataOrderByWithRelationInput | marketdataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing marketdata.
     */
    cursor?: marketdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marketdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marketdata.
     */
    skip?: number
    distinct?: MarketdataScalarFieldEnum | MarketdataScalarFieldEnum[]
  }

  /**
   * marketdata create
   */
  export type marketdataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketdata
     */
    select?: marketdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketdata
     */
    omit?: marketdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketdataInclude<ExtArgs> | null
    /**
     * The data needed to create a marketdata.
     */
    data?: XOR<marketdataCreateInput, marketdataUncheckedCreateInput>
  }

  /**
   * marketdata createMany
   */
  export type marketdataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many marketdata.
     */
    data: marketdataCreateManyInput | marketdataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * marketdata createManyAndReturn
   */
  export type marketdataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketdata
     */
    select?: marketdataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the marketdata
     */
    omit?: marketdataOmit<ExtArgs> | null
    /**
     * The data used to create many marketdata.
     */
    data: marketdataCreateManyInput | marketdataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketdataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * marketdata update
   */
  export type marketdataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketdata
     */
    select?: marketdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketdata
     */
    omit?: marketdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketdataInclude<ExtArgs> | null
    /**
     * The data needed to update a marketdata.
     */
    data: XOR<marketdataUpdateInput, marketdataUncheckedUpdateInput>
    /**
     * Choose, which marketdata to update.
     */
    where: marketdataWhereUniqueInput
  }

  /**
   * marketdata updateMany
   */
  export type marketdataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update marketdata.
     */
    data: XOR<marketdataUpdateManyMutationInput, marketdataUncheckedUpdateManyInput>
    /**
     * Filter which marketdata to update
     */
    where?: marketdataWhereInput
    /**
     * Limit how many marketdata to update.
     */
    limit?: number
  }

  /**
   * marketdata updateManyAndReturn
   */
  export type marketdataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketdata
     */
    select?: marketdataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the marketdata
     */
    omit?: marketdataOmit<ExtArgs> | null
    /**
     * The data used to update marketdata.
     */
    data: XOR<marketdataUpdateManyMutationInput, marketdataUncheckedUpdateManyInput>
    /**
     * Filter which marketdata to update
     */
    where?: marketdataWhereInput
    /**
     * Limit how many marketdata to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketdataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * marketdata upsert
   */
  export type marketdataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketdata
     */
    select?: marketdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketdata
     */
    omit?: marketdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketdataInclude<ExtArgs> | null
    /**
     * The filter to search for the marketdata to update in case it exists.
     */
    where: marketdataWhereUniqueInput
    /**
     * In case the marketdata found by the `where` argument doesn't exist, create a new marketdata with this data.
     */
    create: XOR<marketdataCreateInput, marketdataUncheckedCreateInput>
    /**
     * In case the marketdata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<marketdataUpdateInput, marketdataUncheckedUpdateInput>
  }

  /**
   * marketdata delete
   */
  export type marketdataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketdata
     */
    select?: marketdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketdata
     */
    omit?: marketdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketdataInclude<ExtArgs> | null
    /**
     * Filter which marketdata to delete.
     */
    where: marketdataWhereUniqueInput
  }

  /**
   * marketdata deleteMany
   */
  export type marketdataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which marketdata to delete
     */
    where?: marketdataWhereInput
    /**
     * Limit how many marketdata to delete.
     */
    limit?: number
  }

  /**
   * marketdata.instruments
   */
  export type marketdata$instrumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instrumentsInclude<ExtArgs> | null
    where?: instrumentsWhereInput
  }

  /**
   * marketdata without action
   */
  export type marketdataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketdata
     */
    select?: marketdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketdata
     */
    omit?: marketdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketdataInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    instrumentid: number | null
    userid: number | null
    size: number | null
    price: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    instrumentid: number | null
    userid: number | null
    size: number | null
    price: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    instrumentid: number | null
    userid: number | null
    size: number | null
    price: Decimal | null
    type: string | null
    side: string | null
    status: string | null
    datetime: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    instrumentid: number | null
    userid: number | null
    size: number | null
    price: Decimal | null
    type: string | null
    side: string | null
    status: string | null
    datetime: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    instrumentid: number
    userid: number
    size: number
    price: number
    type: number
    side: number
    status: number
    datetime: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    instrumentid?: true
    userid?: true
    size?: true
    price?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    instrumentid?: true
    userid?: true
    size?: true
    price?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    instrumentid?: true
    userid?: true
    size?: true
    price?: true
    type?: true
    side?: true
    status?: true
    datetime?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    instrumentid?: true
    userid?: true
    size?: true
    price?: true
    type?: true
    side?: true
    status?: true
    datetime?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    instrumentid?: true
    userid?: true
    size?: true
    price?: true
    type?: true
    side?: true
    status?: true
    datetime?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    instrumentid: number | null
    userid: number | null
    size: number | null
    price: Decimal | null
    type: string | null
    side: string | null
    status: string | null
    datetime: Date | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instrumentid?: boolean
    userid?: boolean
    size?: boolean
    price?: boolean
    type?: boolean
    side?: boolean
    status?: boolean
    datetime?: boolean
    instruments?: boolean | orders$instrumentsArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instrumentid?: boolean
    userid?: boolean
    size?: boolean
    price?: boolean
    type?: boolean
    side?: boolean
    status?: boolean
    datetime?: boolean
    instruments?: boolean | orders$instrumentsArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instrumentid?: boolean
    userid?: boolean
    size?: boolean
    price?: boolean
    type?: boolean
    side?: boolean
    status?: boolean
    datetime?: boolean
    instruments?: boolean | orders$instrumentsArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    instrumentid?: boolean
    userid?: boolean
    size?: boolean
    price?: boolean
    type?: boolean
    side?: boolean
    status?: boolean
    datetime?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instrumentid" | "userid" | "size" | "price" | "type" | "side" | "status" | "datetime", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instruments?: boolean | orders$instrumentsArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instruments?: boolean | orders$instrumentsArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instruments?: boolean | orders$instrumentsArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      instruments: Prisma.$instrumentsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instrumentid: number | null
      userid: number | null
      size: number | null
      price: Prisma.Decimal | null
      type: string | null
      side: string | null
      status: string | null
      datetime: Date | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instruments<T extends orders$instrumentsArgs<ExtArgs> = {}>(args?: Subset<T, orders$instrumentsArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends orders$usersArgs<ExtArgs> = {}>(args?: Subset<T, orders$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly instrumentid: FieldRef<"orders", 'Int'>
    readonly userid: FieldRef<"orders", 'Int'>
    readonly size: FieldRef<"orders", 'Int'>
    readonly price: FieldRef<"orders", 'Decimal'>
    readonly type: FieldRef<"orders", 'String'>
    readonly side: FieldRef<"orders", 'String'>
    readonly status: FieldRef<"orders", 'String'>
    readonly datetime: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data?: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.instruments
   */
  export type orders$instrumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instrumentsInclude<ExtArgs> | null
    where?: instrumentsWhereInput
  }

  /**
   * orders.users
   */
  export type orders$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    accountnumber: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    accountnumber: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    accountnumber: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    accountnumber?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    accountnumber?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    accountnumber?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string | null
    accountnumber: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    accountnumber?: boolean
    orders?: boolean | users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    accountnumber?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    accountnumber?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    accountnumber?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "accountnumber", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      accountnumber: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly accountnumber: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.orders
   */
  export type users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const InstrumentsScalarFieldEnum: {
    id: 'id',
    ticker: 'ticker',
    name: 'name',
    type: 'type'
  };

  export type InstrumentsScalarFieldEnum = (typeof InstrumentsScalarFieldEnum)[keyof typeof InstrumentsScalarFieldEnum]


  export const MarketdataScalarFieldEnum: {
    id: 'id',
    instrumentid: 'instrumentid',
    high: 'high',
    low: 'low',
    open: 'open',
    close: 'close',
    previousclose: 'previousclose',
    date: 'date'
  };

  export type MarketdataScalarFieldEnum = (typeof MarketdataScalarFieldEnum)[keyof typeof MarketdataScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    instrumentid: 'instrumentid',
    userid: 'userid',
    size: 'size',
    price: 'price',
    type: 'type',
    side: 'side',
    status: 'status',
    datetime: 'datetime'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    accountnumber: 'accountnumber'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type instrumentsWhereInput = {
    AND?: instrumentsWhereInput | instrumentsWhereInput[]
    OR?: instrumentsWhereInput[]
    NOT?: instrumentsWhereInput | instrumentsWhereInput[]
    id?: IntFilter<"instruments"> | number
    ticker?: StringNullableFilter<"instruments"> | string | null
    name?: StringNullableFilter<"instruments"> | string | null
    type?: StringNullableFilter<"instruments"> | string | null
    marketdata?: MarketdataListRelationFilter
    orders?: OrdersListRelationFilter
  }

  export type instrumentsOrderByWithRelationInput = {
    id?: SortOrder
    ticker?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    marketdata?: marketdataOrderByRelationAggregateInput
    orders?: ordersOrderByRelationAggregateInput
  }

  export type instrumentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: instrumentsWhereInput | instrumentsWhereInput[]
    OR?: instrumentsWhereInput[]
    NOT?: instrumentsWhereInput | instrumentsWhereInput[]
    ticker?: StringNullableFilter<"instruments"> | string | null
    name?: StringNullableFilter<"instruments"> | string | null
    type?: StringNullableFilter<"instruments"> | string | null
    marketdata?: MarketdataListRelationFilter
    orders?: OrdersListRelationFilter
  }, "id">

  export type instrumentsOrderByWithAggregationInput = {
    id?: SortOrder
    ticker?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    _count?: instrumentsCountOrderByAggregateInput
    _avg?: instrumentsAvgOrderByAggregateInput
    _max?: instrumentsMaxOrderByAggregateInput
    _min?: instrumentsMinOrderByAggregateInput
    _sum?: instrumentsSumOrderByAggregateInput
  }

  export type instrumentsScalarWhereWithAggregatesInput = {
    AND?: instrumentsScalarWhereWithAggregatesInput | instrumentsScalarWhereWithAggregatesInput[]
    OR?: instrumentsScalarWhereWithAggregatesInput[]
    NOT?: instrumentsScalarWhereWithAggregatesInput | instrumentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"instruments"> | number
    ticker?: StringNullableWithAggregatesFilter<"instruments"> | string | null
    name?: StringNullableWithAggregatesFilter<"instruments"> | string | null
    type?: StringNullableWithAggregatesFilter<"instruments"> | string | null
  }

  export type marketdataWhereInput = {
    AND?: marketdataWhereInput | marketdataWhereInput[]
    OR?: marketdataWhereInput[]
    NOT?: marketdataWhereInput | marketdataWhereInput[]
    id?: IntFilter<"marketdata"> | number
    instrumentid?: IntNullableFilter<"marketdata"> | number | null
    high?: DecimalNullableFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    low?: DecimalNullableFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    open?: DecimalNullableFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    close?: DecimalNullableFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    previousclose?: DecimalNullableFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeNullableFilter<"marketdata"> | Date | string | null
    instruments?: XOR<InstrumentsNullableScalarRelationFilter, instrumentsWhereInput> | null
  }

  export type marketdataOrderByWithRelationInput = {
    id?: SortOrder
    instrumentid?: SortOrderInput | SortOrder
    high?: SortOrderInput | SortOrder
    low?: SortOrderInput | SortOrder
    open?: SortOrderInput | SortOrder
    close?: SortOrderInput | SortOrder
    previousclose?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    instruments?: instrumentsOrderByWithRelationInput
  }

  export type marketdataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: marketdataWhereInput | marketdataWhereInput[]
    OR?: marketdataWhereInput[]
    NOT?: marketdataWhereInput | marketdataWhereInput[]
    instrumentid?: IntNullableFilter<"marketdata"> | number | null
    high?: DecimalNullableFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    low?: DecimalNullableFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    open?: DecimalNullableFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    close?: DecimalNullableFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    previousclose?: DecimalNullableFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeNullableFilter<"marketdata"> | Date | string | null
    instruments?: XOR<InstrumentsNullableScalarRelationFilter, instrumentsWhereInput> | null
  }, "id">

  export type marketdataOrderByWithAggregationInput = {
    id?: SortOrder
    instrumentid?: SortOrderInput | SortOrder
    high?: SortOrderInput | SortOrder
    low?: SortOrderInput | SortOrder
    open?: SortOrderInput | SortOrder
    close?: SortOrderInput | SortOrder
    previousclose?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    _count?: marketdataCountOrderByAggregateInput
    _avg?: marketdataAvgOrderByAggregateInput
    _max?: marketdataMaxOrderByAggregateInput
    _min?: marketdataMinOrderByAggregateInput
    _sum?: marketdataSumOrderByAggregateInput
  }

  export type marketdataScalarWhereWithAggregatesInput = {
    AND?: marketdataScalarWhereWithAggregatesInput | marketdataScalarWhereWithAggregatesInput[]
    OR?: marketdataScalarWhereWithAggregatesInput[]
    NOT?: marketdataScalarWhereWithAggregatesInput | marketdataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"marketdata"> | number
    instrumentid?: IntNullableWithAggregatesFilter<"marketdata"> | number | null
    high?: DecimalNullableWithAggregatesFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    low?: DecimalNullableWithAggregatesFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    open?: DecimalNullableWithAggregatesFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    close?: DecimalNullableWithAggregatesFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    previousclose?: DecimalNullableWithAggregatesFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeNullableWithAggregatesFilter<"marketdata"> | Date | string | null
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    instrumentid?: IntNullableFilter<"orders"> | number | null
    userid?: IntNullableFilter<"orders"> | number | null
    size?: IntNullableFilter<"orders"> | number | null
    price?: DecimalNullableFilter<"orders"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableFilter<"orders"> | string | null
    side?: StringNullableFilter<"orders"> | string | null
    status?: StringNullableFilter<"orders"> | string | null
    datetime?: DateTimeNullableFilter<"orders"> | Date | string | null
    instruments?: XOR<InstrumentsNullableScalarRelationFilter, instrumentsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    instrumentid?: SortOrderInput | SortOrder
    userid?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    side?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    datetime?: SortOrderInput | SortOrder
    instruments?: instrumentsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    instrumentid?: IntNullableFilter<"orders"> | number | null
    userid?: IntNullableFilter<"orders"> | number | null
    size?: IntNullableFilter<"orders"> | number | null
    price?: DecimalNullableFilter<"orders"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableFilter<"orders"> | string | null
    side?: StringNullableFilter<"orders"> | string | null
    status?: StringNullableFilter<"orders"> | string | null
    datetime?: DateTimeNullableFilter<"orders"> | Date | string | null
    instruments?: XOR<InstrumentsNullableScalarRelationFilter, instrumentsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    instrumentid?: SortOrderInput | SortOrder
    userid?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    side?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    datetime?: SortOrderInput | SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    instrumentid?: IntNullableWithAggregatesFilter<"orders"> | number | null
    userid?: IntNullableWithAggregatesFilter<"orders"> | number | null
    size?: IntNullableWithAggregatesFilter<"orders"> | number | null
    price?: DecimalNullableWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableWithAggregatesFilter<"orders"> | string | null
    side?: StringNullableWithAggregatesFilter<"orders"> | string | null
    status?: StringNullableWithAggregatesFilter<"orders"> | string | null
    datetime?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringNullableFilter<"users"> | string | null
    accountnumber?: StringNullableFilter<"users"> | string | null
    orders?: OrdersListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    accountnumber?: SortOrderInput | SortOrder
    orders?: ordersOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    email?: StringNullableFilter<"users"> | string | null
    accountnumber?: StringNullableFilter<"users"> | string | null
    orders?: OrdersListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    accountnumber?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    accountnumber?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type instrumentsCreateInput = {
    ticker?: string | null
    name?: string | null
    type?: string | null
    marketdata?: marketdataCreateNestedManyWithoutInstrumentsInput
    orders?: ordersCreateNestedManyWithoutInstrumentsInput
  }

  export type instrumentsUncheckedCreateInput = {
    id?: number
    ticker?: string | null
    name?: string | null
    type?: string | null
    marketdata?: marketdataUncheckedCreateNestedManyWithoutInstrumentsInput
    orders?: ordersUncheckedCreateNestedManyWithoutInstrumentsInput
  }

  export type instrumentsUpdateInput = {
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    marketdata?: marketdataUpdateManyWithoutInstrumentsNestedInput
    orders?: ordersUpdateManyWithoutInstrumentsNestedInput
  }

  export type instrumentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    marketdata?: marketdataUncheckedUpdateManyWithoutInstrumentsNestedInput
    orders?: ordersUncheckedUpdateManyWithoutInstrumentsNestedInput
  }

  export type instrumentsCreateManyInput = {
    id?: number
    ticker?: string | null
    name?: string | null
    type?: string | null
  }

  export type instrumentsUpdateManyMutationInput = {
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type instrumentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type marketdataCreateInput = {
    high?: Decimal | DecimalJsLike | number | string | null
    low?: Decimal | DecimalJsLike | number | string | null
    open?: Decimal | DecimalJsLike | number | string | null
    close?: Decimal | DecimalJsLike | number | string | null
    previousclose?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string | null
    instruments?: instrumentsCreateNestedOneWithoutMarketdataInput
  }

  export type marketdataUncheckedCreateInput = {
    id?: number
    instrumentid?: number | null
    high?: Decimal | DecimalJsLike | number | string | null
    low?: Decimal | DecimalJsLike | number | string | null
    open?: Decimal | DecimalJsLike | number | string | null
    close?: Decimal | DecimalJsLike | number | string | null
    previousclose?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string | null
  }

  export type marketdataUpdateInput = {
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    previousclose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instruments?: instrumentsUpdateOneWithoutMarketdataNestedInput
  }

  export type marketdataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instrumentid?: NullableIntFieldUpdateOperationsInput | number | null
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    previousclose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type marketdataCreateManyInput = {
    id?: number
    instrumentid?: number | null
    high?: Decimal | DecimalJsLike | number | string | null
    low?: Decimal | DecimalJsLike | number | string | null
    open?: Decimal | DecimalJsLike | number | string | null
    close?: Decimal | DecimalJsLike | number | string | null
    previousclose?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string | null
  }

  export type marketdataUpdateManyMutationInput = {
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    previousclose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type marketdataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instrumentid?: NullableIntFieldUpdateOperationsInput | number | null
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    previousclose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersCreateInput = {
    size?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    side?: string | null
    status?: string | null
    datetime?: Date | string | null
    instruments?: instrumentsCreateNestedOneWithoutOrdersInput
    users?: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    instrumentid?: number | null
    userid?: number | null
    size?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    side?: string | null
    status?: string | null
    datetime?: Date | string | null
  }

  export type ordersUpdateInput = {
    size?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    side?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instruments?: instrumentsUpdateOneWithoutOrdersNestedInput
    users?: usersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instrumentid?: NullableIntFieldUpdateOperationsInput | number | null
    userid?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    side?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersCreateManyInput = {
    id?: number
    instrumentid?: number | null
    userid?: number | null
    size?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    side?: string | null
    status?: string | null
    datetime?: Date | string | null
  }

  export type ordersUpdateManyMutationInput = {
    size?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    side?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instrumentid?: NullableIntFieldUpdateOperationsInput | number | null
    userid?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    side?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    email?: string | null
    accountnumber?: string | null
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email?: string | null
    accountnumber?: string | null
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountnumber?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountnumber?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email?: string | null
    accountnumber?: string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountnumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountnumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MarketdataListRelationFilter = {
    every?: marketdataWhereInput
    some?: marketdataWhereInput
    none?: marketdataWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type marketdataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type instrumentsCountOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type instrumentsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type instrumentsMaxOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type instrumentsMinOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type instrumentsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type InstrumentsNullableScalarRelationFilter = {
    is?: instrumentsWhereInput | null
    isNot?: instrumentsWhereInput | null
  }

  export type marketdataCountOrderByAggregateInput = {
    id?: SortOrder
    instrumentid?: SortOrder
    high?: SortOrder
    low?: SortOrder
    open?: SortOrder
    close?: SortOrder
    previousclose?: SortOrder
    date?: SortOrder
  }

  export type marketdataAvgOrderByAggregateInput = {
    id?: SortOrder
    instrumentid?: SortOrder
    high?: SortOrder
    low?: SortOrder
    open?: SortOrder
    close?: SortOrder
    previousclose?: SortOrder
  }

  export type marketdataMaxOrderByAggregateInput = {
    id?: SortOrder
    instrumentid?: SortOrder
    high?: SortOrder
    low?: SortOrder
    open?: SortOrder
    close?: SortOrder
    previousclose?: SortOrder
    date?: SortOrder
  }

  export type marketdataMinOrderByAggregateInput = {
    id?: SortOrder
    instrumentid?: SortOrder
    high?: SortOrder
    low?: SortOrder
    open?: SortOrder
    close?: SortOrder
    previousclose?: SortOrder
    date?: SortOrder
  }

  export type marketdataSumOrderByAggregateInput = {
    id?: SortOrder
    instrumentid?: SortOrder
    high?: SortOrder
    low?: SortOrder
    open?: SortOrder
    close?: SortOrder
    previousclose?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    instrumentid?: SortOrder
    userid?: SortOrder
    size?: SortOrder
    price?: SortOrder
    type?: SortOrder
    side?: SortOrder
    status?: SortOrder
    datetime?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    instrumentid?: SortOrder
    userid?: SortOrder
    size?: SortOrder
    price?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    instrumentid?: SortOrder
    userid?: SortOrder
    size?: SortOrder
    price?: SortOrder
    type?: SortOrder
    side?: SortOrder
    status?: SortOrder
    datetime?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    instrumentid?: SortOrder
    userid?: SortOrder
    size?: SortOrder
    price?: SortOrder
    type?: SortOrder
    side?: SortOrder
    status?: SortOrder
    datetime?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    instrumentid?: SortOrder
    userid?: SortOrder
    size?: SortOrder
    price?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    accountnumber?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    accountnumber?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    accountnumber?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type marketdataCreateNestedManyWithoutInstrumentsInput = {
    create?: XOR<marketdataCreateWithoutInstrumentsInput, marketdataUncheckedCreateWithoutInstrumentsInput> | marketdataCreateWithoutInstrumentsInput[] | marketdataUncheckedCreateWithoutInstrumentsInput[]
    connectOrCreate?: marketdataCreateOrConnectWithoutInstrumentsInput | marketdataCreateOrConnectWithoutInstrumentsInput[]
    createMany?: marketdataCreateManyInstrumentsInputEnvelope
    connect?: marketdataWhereUniqueInput | marketdataWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutInstrumentsInput = {
    create?: XOR<ordersCreateWithoutInstrumentsInput, ordersUncheckedCreateWithoutInstrumentsInput> | ordersCreateWithoutInstrumentsInput[] | ordersUncheckedCreateWithoutInstrumentsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutInstrumentsInput | ordersCreateOrConnectWithoutInstrumentsInput[]
    createMany?: ordersCreateManyInstrumentsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type marketdataUncheckedCreateNestedManyWithoutInstrumentsInput = {
    create?: XOR<marketdataCreateWithoutInstrumentsInput, marketdataUncheckedCreateWithoutInstrumentsInput> | marketdataCreateWithoutInstrumentsInput[] | marketdataUncheckedCreateWithoutInstrumentsInput[]
    connectOrCreate?: marketdataCreateOrConnectWithoutInstrumentsInput | marketdataCreateOrConnectWithoutInstrumentsInput[]
    createMany?: marketdataCreateManyInstrumentsInputEnvelope
    connect?: marketdataWhereUniqueInput | marketdataWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutInstrumentsInput = {
    create?: XOR<ordersCreateWithoutInstrumentsInput, ordersUncheckedCreateWithoutInstrumentsInput> | ordersCreateWithoutInstrumentsInput[] | ordersUncheckedCreateWithoutInstrumentsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutInstrumentsInput | ordersCreateOrConnectWithoutInstrumentsInput[]
    createMany?: ordersCreateManyInstrumentsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type marketdataUpdateManyWithoutInstrumentsNestedInput = {
    create?: XOR<marketdataCreateWithoutInstrumentsInput, marketdataUncheckedCreateWithoutInstrumentsInput> | marketdataCreateWithoutInstrumentsInput[] | marketdataUncheckedCreateWithoutInstrumentsInput[]
    connectOrCreate?: marketdataCreateOrConnectWithoutInstrumentsInput | marketdataCreateOrConnectWithoutInstrumentsInput[]
    upsert?: marketdataUpsertWithWhereUniqueWithoutInstrumentsInput | marketdataUpsertWithWhereUniqueWithoutInstrumentsInput[]
    createMany?: marketdataCreateManyInstrumentsInputEnvelope
    set?: marketdataWhereUniqueInput | marketdataWhereUniqueInput[]
    disconnect?: marketdataWhereUniqueInput | marketdataWhereUniqueInput[]
    delete?: marketdataWhereUniqueInput | marketdataWhereUniqueInput[]
    connect?: marketdataWhereUniqueInput | marketdataWhereUniqueInput[]
    update?: marketdataUpdateWithWhereUniqueWithoutInstrumentsInput | marketdataUpdateWithWhereUniqueWithoutInstrumentsInput[]
    updateMany?: marketdataUpdateManyWithWhereWithoutInstrumentsInput | marketdataUpdateManyWithWhereWithoutInstrumentsInput[]
    deleteMany?: marketdataScalarWhereInput | marketdataScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutInstrumentsNestedInput = {
    create?: XOR<ordersCreateWithoutInstrumentsInput, ordersUncheckedCreateWithoutInstrumentsInput> | ordersCreateWithoutInstrumentsInput[] | ordersUncheckedCreateWithoutInstrumentsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutInstrumentsInput | ordersCreateOrConnectWithoutInstrumentsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutInstrumentsInput | ordersUpsertWithWhereUniqueWithoutInstrumentsInput[]
    createMany?: ordersCreateManyInstrumentsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutInstrumentsInput | ordersUpdateWithWhereUniqueWithoutInstrumentsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutInstrumentsInput | ordersUpdateManyWithWhereWithoutInstrumentsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type marketdataUncheckedUpdateManyWithoutInstrumentsNestedInput = {
    create?: XOR<marketdataCreateWithoutInstrumentsInput, marketdataUncheckedCreateWithoutInstrumentsInput> | marketdataCreateWithoutInstrumentsInput[] | marketdataUncheckedCreateWithoutInstrumentsInput[]
    connectOrCreate?: marketdataCreateOrConnectWithoutInstrumentsInput | marketdataCreateOrConnectWithoutInstrumentsInput[]
    upsert?: marketdataUpsertWithWhereUniqueWithoutInstrumentsInput | marketdataUpsertWithWhereUniqueWithoutInstrumentsInput[]
    createMany?: marketdataCreateManyInstrumentsInputEnvelope
    set?: marketdataWhereUniqueInput | marketdataWhereUniqueInput[]
    disconnect?: marketdataWhereUniqueInput | marketdataWhereUniqueInput[]
    delete?: marketdataWhereUniqueInput | marketdataWhereUniqueInput[]
    connect?: marketdataWhereUniqueInput | marketdataWhereUniqueInput[]
    update?: marketdataUpdateWithWhereUniqueWithoutInstrumentsInput | marketdataUpdateWithWhereUniqueWithoutInstrumentsInput[]
    updateMany?: marketdataUpdateManyWithWhereWithoutInstrumentsInput | marketdataUpdateManyWithWhereWithoutInstrumentsInput[]
    deleteMany?: marketdataScalarWhereInput | marketdataScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutInstrumentsNestedInput = {
    create?: XOR<ordersCreateWithoutInstrumentsInput, ordersUncheckedCreateWithoutInstrumentsInput> | ordersCreateWithoutInstrumentsInput[] | ordersUncheckedCreateWithoutInstrumentsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutInstrumentsInput | ordersCreateOrConnectWithoutInstrumentsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutInstrumentsInput | ordersUpsertWithWhereUniqueWithoutInstrumentsInput[]
    createMany?: ordersCreateManyInstrumentsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutInstrumentsInput | ordersUpdateWithWhereUniqueWithoutInstrumentsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutInstrumentsInput | ordersUpdateManyWithWhereWithoutInstrumentsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type instrumentsCreateNestedOneWithoutMarketdataInput = {
    create?: XOR<instrumentsCreateWithoutMarketdataInput, instrumentsUncheckedCreateWithoutMarketdataInput>
    connectOrCreate?: instrumentsCreateOrConnectWithoutMarketdataInput
    connect?: instrumentsWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type instrumentsUpdateOneWithoutMarketdataNestedInput = {
    create?: XOR<instrumentsCreateWithoutMarketdataInput, instrumentsUncheckedCreateWithoutMarketdataInput>
    connectOrCreate?: instrumentsCreateOrConnectWithoutMarketdataInput
    upsert?: instrumentsUpsertWithoutMarketdataInput
    disconnect?: instrumentsWhereInput | boolean
    delete?: instrumentsWhereInput | boolean
    connect?: instrumentsWhereUniqueInput
    update?: XOR<XOR<instrumentsUpdateToOneWithWhereWithoutMarketdataInput, instrumentsUpdateWithoutMarketdataInput>, instrumentsUncheckedUpdateWithoutMarketdataInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type instrumentsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<instrumentsCreateWithoutOrdersInput, instrumentsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: instrumentsCreateOrConnectWithoutOrdersInput
    connect?: instrumentsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type instrumentsUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<instrumentsCreateWithoutOrdersInput, instrumentsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: instrumentsCreateOrConnectWithoutOrdersInput
    upsert?: instrumentsUpsertWithoutOrdersInput
    disconnect?: instrumentsWhereInput | boolean
    delete?: instrumentsWhereInput | boolean
    connect?: instrumentsWhereUniqueInput
    update?: XOR<XOR<instrumentsUpdateToOneWithWhereWithoutOrdersInput, instrumentsUpdateWithoutOrdersInput>, instrumentsUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrdersInput, usersUpdateWithoutOrdersInput>, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type marketdataCreateWithoutInstrumentsInput = {
    high?: Decimal | DecimalJsLike | number | string | null
    low?: Decimal | DecimalJsLike | number | string | null
    open?: Decimal | DecimalJsLike | number | string | null
    close?: Decimal | DecimalJsLike | number | string | null
    previousclose?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string | null
  }

  export type marketdataUncheckedCreateWithoutInstrumentsInput = {
    id?: number
    high?: Decimal | DecimalJsLike | number | string | null
    low?: Decimal | DecimalJsLike | number | string | null
    open?: Decimal | DecimalJsLike | number | string | null
    close?: Decimal | DecimalJsLike | number | string | null
    previousclose?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string | null
  }

  export type marketdataCreateOrConnectWithoutInstrumentsInput = {
    where: marketdataWhereUniqueInput
    create: XOR<marketdataCreateWithoutInstrumentsInput, marketdataUncheckedCreateWithoutInstrumentsInput>
  }

  export type marketdataCreateManyInstrumentsInputEnvelope = {
    data: marketdataCreateManyInstrumentsInput | marketdataCreateManyInstrumentsInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutInstrumentsInput = {
    size?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    side?: string | null
    status?: string | null
    datetime?: Date | string | null
    users?: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutInstrumentsInput = {
    id?: number
    userid?: number | null
    size?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    side?: string | null
    status?: string | null
    datetime?: Date | string | null
  }

  export type ordersCreateOrConnectWithoutInstrumentsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutInstrumentsInput, ordersUncheckedCreateWithoutInstrumentsInput>
  }

  export type ordersCreateManyInstrumentsInputEnvelope = {
    data: ordersCreateManyInstrumentsInput | ordersCreateManyInstrumentsInput[]
    skipDuplicates?: boolean
  }

  export type marketdataUpsertWithWhereUniqueWithoutInstrumentsInput = {
    where: marketdataWhereUniqueInput
    update: XOR<marketdataUpdateWithoutInstrumentsInput, marketdataUncheckedUpdateWithoutInstrumentsInput>
    create: XOR<marketdataCreateWithoutInstrumentsInput, marketdataUncheckedCreateWithoutInstrumentsInput>
  }

  export type marketdataUpdateWithWhereUniqueWithoutInstrumentsInput = {
    where: marketdataWhereUniqueInput
    data: XOR<marketdataUpdateWithoutInstrumentsInput, marketdataUncheckedUpdateWithoutInstrumentsInput>
  }

  export type marketdataUpdateManyWithWhereWithoutInstrumentsInput = {
    where: marketdataScalarWhereInput
    data: XOR<marketdataUpdateManyMutationInput, marketdataUncheckedUpdateManyWithoutInstrumentsInput>
  }

  export type marketdataScalarWhereInput = {
    AND?: marketdataScalarWhereInput | marketdataScalarWhereInput[]
    OR?: marketdataScalarWhereInput[]
    NOT?: marketdataScalarWhereInput | marketdataScalarWhereInput[]
    id?: IntFilter<"marketdata"> | number
    instrumentid?: IntNullableFilter<"marketdata"> | number | null
    high?: DecimalNullableFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    low?: DecimalNullableFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    open?: DecimalNullableFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    close?: DecimalNullableFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    previousclose?: DecimalNullableFilter<"marketdata"> | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeNullableFilter<"marketdata"> | Date | string | null
  }

  export type ordersUpsertWithWhereUniqueWithoutInstrumentsInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutInstrumentsInput, ordersUncheckedUpdateWithoutInstrumentsInput>
    create: XOR<ordersCreateWithoutInstrumentsInput, ordersUncheckedCreateWithoutInstrumentsInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutInstrumentsInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutInstrumentsInput, ordersUncheckedUpdateWithoutInstrumentsInput>
  }

  export type ordersUpdateManyWithWhereWithoutInstrumentsInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutInstrumentsInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: IntFilter<"orders"> | number
    instrumentid?: IntNullableFilter<"orders"> | number | null
    userid?: IntNullableFilter<"orders"> | number | null
    size?: IntNullableFilter<"orders"> | number | null
    price?: DecimalNullableFilter<"orders"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableFilter<"orders"> | string | null
    side?: StringNullableFilter<"orders"> | string | null
    status?: StringNullableFilter<"orders"> | string | null
    datetime?: DateTimeNullableFilter<"orders"> | Date | string | null
  }

  export type instrumentsCreateWithoutMarketdataInput = {
    ticker?: string | null
    name?: string | null
    type?: string | null
    orders?: ordersCreateNestedManyWithoutInstrumentsInput
  }

  export type instrumentsUncheckedCreateWithoutMarketdataInput = {
    id?: number
    ticker?: string | null
    name?: string | null
    type?: string | null
    orders?: ordersUncheckedCreateNestedManyWithoutInstrumentsInput
  }

  export type instrumentsCreateOrConnectWithoutMarketdataInput = {
    where: instrumentsWhereUniqueInput
    create: XOR<instrumentsCreateWithoutMarketdataInput, instrumentsUncheckedCreateWithoutMarketdataInput>
  }

  export type instrumentsUpsertWithoutMarketdataInput = {
    update: XOR<instrumentsUpdateWithoutMarketdataInput, instrumentsUncheckedUpdateWithoutMarketdataInput>
    create: XOR<instrumentsCreateWithoutMarketdataInput, instrumentsUncheckedCreateWithoutMarketdataInput>
    where?: instrumentsWhereInput
  }

  export type instrumentsUpdateToOneWithWhereWithoutMarketdataInput = {
    where?: instrumentsWhereInput
    data: XOR<instrumentsUpdateWithoutMarketdataInput, instrumentsUncheckedUpdateWithoutMarketdataInput>
  }

  export type instrumentsUpdateWithoutMarketdataInput = {
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUpdateManyWithoutInstrumentsNestedInput
  }

  export type instrumentsUncheckedUpdateWithoutMarketdataInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUncheckedUpdateManyWithoutInstrumentsNestedInput
  }

  export type instrumentsCreateWithoutOrdersInput = {
    ticker?: string | null
    name?: string | null
    type?: string | null
    marketdata?: marketdataCreateNestedManyWithoutInstrumentsInput
  }

  export type instrumentsUncheckedCreateWithoutOrdersInput = {
    id?: number
    ticker?: string | null
    name?: string | null
    type?: string | null
    marketdata?: marketdataUncheckedCreateNestedManyWithoutInstrumentsInput
  }

  export type instrumentsCreateOrConnectWithoutOrdersInput = {
    where: instrumentsWhereUniqueInput
    create: XOR<instrumentsCreateWithoutOrdersInput, instrumentsUncheckedCreateWithoutOrdersInput>
  }

  export type usersCreateWithoutOrdersInput = {
    email?: string | null
    accountnumber?: string | null
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    id?: number
    email?: string | null
    accountnumber?: string | null
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type instrumentsUpsertWithoutOrdersInput = {
    update: XOR<instrumentsUpdateWithoutOrdersInput, instrumentsUncheckedUpdateWithoutOrdersInput>
    create: XOR<instrumentsCreateWithoutOrdersInput, instrumentsUncheckedCreateWithoutOrdersInput>
    where?: instrumentsWhereInput
  }

  export type instrumentsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: instrumentsWhereInput
    data: XOR<instrumentsUpdateWithoutOrdersInput, instrumentsUncheckedUpdateWithoutOrdersInput>
  }

  export type instrumentsUpdateWithoutOrdersInput = {
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    marketdata?: marketdataUpdateManyWithoutInstrumentsNestedInput
  }

  export type instrumentsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    marketdata?: marketdataUncheckedUpdateManyWithoutInstrumentsNestedInput
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountnumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountnumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersCreateWithoutUsersInput = {
    size?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    side?: string | null
    status?: string | null
    datetime?: Date | string | null
    instruments?: instrumentsCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    id?: number
    instrumentid?: number | null
    size?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    side?: string | null
    status?: string | null
    datetime?: Date | string | null
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: ordersCreateManyUsersInput | ordersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsersInput>
  }

  export type marketdataCreateManyInstrumentsInput = {
    id?: number
    high?: Decimal | DecimalJsLike | number | string | null
    low?: Decimal | DecimalJsLike | number | string | null
    open?: Decimal | DecimalJsLike | number | string | null
    close?: Decimal | DecimalJsLike | number | string | null
    previousclose?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string | null
  }

  export type ordersCreateManyInstrumentsInput = {
    id?: number
    userid?: number | null
    size?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    side?: string | null
    status?: string | null
    datetime?: Date | string | null
  }

  export type marketdataUpdateWithoutInstrumentsInput = {
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    previousclose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type marketdataUncheckedUpdateWithoutInstrumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    previousclose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type marketdataUncheckedUpdateManyWithoutInstrumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    previousclose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUpdateWithoutInstrumentsInput = {
    size?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    side?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutInstrumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    side?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateManyWithoutInstrumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    side?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersCreateManyUsersInput = {
    id?: number
    instrumentid?: number | null
    size?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    side?: string | null
    status?: string | null
    datetime?: Date | string | null
  }

  export type ordersUpdateWithoutUsersInput = {
    size?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    side?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instruments?: instrumentsUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    instrumentid?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    side?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    instrumentid?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    side?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}