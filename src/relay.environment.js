import axios from 'axios';
import { ConnectionHandler, Environment, Network, RecordSource, Store } from 'relay-runtime';
import { Observable } from 'rxjs';
import { SubscriptionClient } from 'subscriptions-transport-ws';

const connectionUpdater = (rootField, connection) => (store) => {
    const newItem = store.getRootField(rootField);
    const connectionRecord = store.getRoot().getLinkedRecord(connection);
    const newItemEdge = ConnectionHandler.createEdge(
        store,
        connectionRecord,
        newItem,
        `${newItem.getType()}Edge`
    );
    
    ConnectionHandler.insertEdgeAfter(connectionRecord, newItemEdge);
};

const fetchQuery = (
    operation,
    variables,
) => axios
    .post('http://localhost:6596/graphql', { query: operation.text, variables })
    .then(({ data }) => data);

const setupSubscription = (config, variables) => {
    const query = config.text
    const subscriptionClient = new SubscriptionClient(
        'ws://localhost:6596/graphql',
        { reconnect: true }
    );

    return Observable.create(subscriptionClient.request({ query, variables }).subscribe);
}

const environment = new Environment({
    network: Network.create(fetchQuery, setupSubscription),
    store: new Store(new RecordSource())
});

export default environment;
export { connectionUpdater };