import 'reflect-metadata'

const importantMetadataKey = Symbol('important')

export function important(target: Object, propertyKey: string | symbol, parameterIndex: number) {
	let existingRequiredParameters: number[] = Reflect.getOwnMetadata(importantMetadataKey, target, propertyKey) || []
	existingRequiredParameters.push(parameterIndex)
	Reflect.defineMetadata(importantMetadataKey, existingRequiredParameters, target, propertyKey)
}

