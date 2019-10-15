import fs from 'fs-extra'
import childProcess from 'child_process'
import { resolve } from 'path'

try {
  // Backend build
  fs.removeSync(resolve(__dirname, 'build', 'server'))
  fs.ensureDirSync(resolve(__dirname, 'build', 'server'))
  childProcess.exec(
    'yarn sucrase ./backend/src -d ./build/server --transforms typescript,imports'
  )
  // Frontend Build
  fs.removeSync(resolve(__dirname, 'build', 'web'))
  fs.ensureDirSync(resolve(__dirname, 'build', 'web'))
  childProcess.exec('cd frontend && yarn build')
  fs.copySync(
    resolve(__dirname, 'frontend', 'build'),
    resolve(__dirname, 'build', 'web')
  )
} catch (err) {
  console.log(err)
}
