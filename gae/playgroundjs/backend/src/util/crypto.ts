import bcrypt from 'bcrypt-nodejs'

function hashPassword () {
  // scope *this* is the entity instance
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
