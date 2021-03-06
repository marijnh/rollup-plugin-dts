interface A {}
declare function b(): void;
declare class C {}
declare enum D {
  A = 0,
  B = 1,
}
declare const E: string;
declare type F = string;
interface GenericI<T1, T2> {}
declare class GenericC<T1, T2> {}
declare function genericF<T1, T2>(): void;
declare type GenericT<T1, T2> = GenericI<T1, T2>;
type namespace_d_A = A;
declare const namespace_d_b: typeof b;
type namespace_d_C = C;
declare const namespace_d_C: typeof C;
type namespace_d_D = D;
declare const namespace_d_D: typeof D;
declare const namespace_d_E: typeof E;
type namespace_d_F = F;
type namespace_d_GenericI<_0, _1> = GenericI<_0, _1>;
type namespace_d_GenericC<_0, _1> = GenericC<_0, _1>;
declare const namespace_d_GenericC: typeof GenericC;
declare const namespace_d_genericF: typeof genericF;
type namespace_d_GenericT<_0, _1> = GenericT<_0, _1>;
declare namespace namespace_d {
  export {
    namespace_d_A as A,
    namespace_d_b as b,
    namespace_d_C as C,
    namespace_d_D as D,
    namespace_d_E as E,
    namespace_d_F as F,
    namespace_d_GenericI as GenericI,
    namespace_d_GenericC as GenericC,
    namespace_d_genericF as genericF,
    namespace_d_GenericT as GenericT,
  };
}
export { namespace_d as ns1, namespace_d as ns2 };
