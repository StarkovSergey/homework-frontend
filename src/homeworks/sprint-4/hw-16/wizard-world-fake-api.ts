import { House, houses } from './wizard-world-data.ts'

export const wizardFakeApi = {
  getHouses() {
    return new Promise<HouseViewModel[]>((resolve) => {
      setTimeout(() => {
        const preparedData = houses.map((house) => ({
          name: house.name,
          image: house.image,
          id: house.id,
          founder: house.founder,
        }))

        resolve(preparedData)
      }, 500)
    })
  },
  getHouseById(id: string) {
    return new Promise<House>((resolve, reject) => {
      setTimeout(() => {
        const house = houses.find((house) => house.id === id)

        if (house) {
          resolve(house)
        } else {
          reject(new Error('House not found'))
        }
      }, 500)
    })
  },
}

export type HouseViewModel = {
  name: string
  image: string
  id: string
  founder: string
}
