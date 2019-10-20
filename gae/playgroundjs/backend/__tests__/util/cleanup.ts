import User from '../../src/app/models/userSchema'

export default function cleanup (): Promise<any> {
  return Promise.all(
    [
      // User.deleteAll()
    ]
  )
}
