import { faker } from '@faker-js/faker'

export class MockDataManager {
	static getUser() {
		return {
			firstname: faker.name.firstName(),
			lastname: faker.name.lastName(),
			sex: faker.name.sex(),
		}
	}
}
