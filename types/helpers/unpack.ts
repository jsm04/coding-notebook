const Arrayish = [1, 2, 3, 4]

type UnpackArray<T> = T extends (infer U)[] ? U : T

type UnpackedFoo = UnpackArray<typeof Arrayish>
