import { Gstore, instances } from 'gstore-node'
import { Datastore } from '@google-cloud/datastore'

const gstore = new Gstore()

const datastore = new Datastore()

gstore.connect(datastore)

instances.set('unique-id', gstore)
