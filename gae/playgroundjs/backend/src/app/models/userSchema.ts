import { instances } from 'gstore-node'
import bcrypt from 'bcrypt-nodejs'

const gstore = instances.get('unique-id')
const { Schema } = gstore

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, validate: 'isEmail', required: true },
  password: { type: String, read: false, required: true },
  createdAt: { type: Date, default: gstore.defaultValues.NOW, write: false, read: false },
  updatedAt: { type: Date, default: gstore.defaultValues.NOW, read: false }

})

userSchema.queries('list', {
  limit: 10,
  order: { property: 'createdAt' }
})

function hashPassword () {
  const _this = this
  const password = this.password

  if (!password) {
    return Promise.resolve()
  }

  return new Promise((resolve, reject) => {
    bcrypt.genSalt(5, function onSalt (err, salt) {
      if (err) {
        return reject(err)
      };

      bcrypt.hash(password, salt, null, function onHash (err, hash) {
        if (err) {
          // reject will *not* save the entity
          return reject(err)
        };

        _this.password = hash

        // resolve to go to next middleware or save method
        return resolve()
      })
    })
  })
}

userSchema.pre('save', hashPassword)

export default gstore.model('User', userSchema)
