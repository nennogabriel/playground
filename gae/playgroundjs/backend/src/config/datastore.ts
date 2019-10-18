import { Gstore, instances } from 'gstore-node'
import { Datastore } from '@google-cloud/datastore'

const gstore = new Gstore()

const datastore = new Datastore()// { namespace: process.env.NODE_ENV })

gstore.connect(datastore)

instances.set('unique-id', gstore)

console.log(gstore.ds.options)
