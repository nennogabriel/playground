import { Gstore, instances } from 'gstore-node'
import { Datastore } from '@google-cloud/datastore'

export default async function changeNamespace (): Promise<any> {
  // const gstore = new Gstore()

  // const namespace = String(Date.now())
  // const datastore = new Datastore({ namespace })

  // gstore.connect(datastore)
  // instances.set('unique-id', gstore)

  // console.log(gstore.ds.options)
  return Promise.resolve(() => 3 + 4)
}
