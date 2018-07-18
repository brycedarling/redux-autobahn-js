# redux-autobahn-js

## Objects

<dl>
<dt><a href="#redux-autobahn_actions">redux-autobahn:actions</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#redux-autobahn_middleware">redux-autobahn:middleware</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#redux-autobahn_reducer">redux-autobahn:reducer</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#redux-autobahn_types">redux-autobahn:types</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="redux-autobahn_actions"></a>

## redux-autobahn:actions : <code>object</code>
**Kind**: global namespace  

* [redux-autobahn:actions](#redux-autobahn_actions) : <code>object</code>
    * [.openConnection()](#redux-autobahn_actions.openConnection) ⇒ <code>object</code>
    * [.closeConnection()](#redux-autobahn_actions.closeConnection) ⇒ <code>object</code>
    * [.subscribe(topic)](#redux-autobahn_actions.subscribe) ⇒ <code>object</code>
    * [.unsubscribe(subscriptionOrTopic)](#redux-autobahn_actions.unsubscribe) ⇒ <code>object</code>
    * [.publish(topic, args, kwargs, options)](#redux-autobahn_actions.publish) ⇒ <code>object</code>
    * [.register(procedure, endpoint, options)](#redux-autobahn_actions.register) ⇒ <code>object</code>
    * [.unregister(registration)](#redux-autobahn_actions.unregister) ⇒ <code>object</code>
    * [.call(procedure, args, kwargs, options, resultAction, errorAction, progressAction)](#redux-autobahn_actions.call) ⇒ <code>object</code>

<a name="redux-autobahn_actions.openConnection"></a>

### redux-autobahn:actions.openConnection() ⇒ <code>object</code>
Returns a redux action with type OPEN_CONNECTION

**Kind**: static method of [<code>redux-autobahn:actions</code>](#redux-autobahn_actions)  
**Returns**: <code>object</code> - redux action  
<a name="redux-autobahn_actions.closeConnection"></a>

### redux-autobahn:actions.closeConnection() ⇒ <code>object</code>
Returns a redux action with type CLOSE_CONNECTION

**Kind**: static method of [<code>redux-autobahn:actions</code>](#redux-autobahn_actions)  
**Returns**: <code>object</code> - redux action  
<a name="redux-autobahn_actions.subscribe"></a>

### redux-autobahn:actions.subscribe(topic) ⇒ <code>object</code>
Returns a redux action with type SUBSCRIBE and the given topic

**Kind**: static method of [<code>redux-autobahn:actions</code>](#redux-autobahn_actions)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| topic | <code>string</code> | The topic being subscribed to. |

<a name="redux-autobahn_actions.unsubscribe"></a>

### redux-autobahn:actions.unsubscribe(subscriptionOrTopic) ⇒ <code>object</code>
Returns a redux action with type UNSUBSCRIBE and the given subscription or topic

**Kind**: static method of [<code>redux-autobahn:actions</code>](#redux-autobahn_actions)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| subscriptionOrTopic | <code>object</code> \| <code>string</code> | The subscription or topic being unsubscribed from. |

<a name="redux-autobahn_actions.publish"></a>

### redux-autobahn:actions.publish(topic, args, kwargs, options) ⇒ <code>object</code>
Returns a redux action with type PUBLISH and the given topic, args, kwargs, and options

**Kind**: static method of [<code>redux-autobahn:actions</code>](#redux-autobahn_actions)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| topic | <code>string</code> | The topic being subscribed to. |
| args | <code>Array</code> | An array of arguments. |
| kwargs | <code>object</code> | An object of keyword arguments. |
| options | <code>object</code> | An object of options. |

<a name="redux-autobahn_actions.register"></a>

### redux-autobahn:actions.register(procedure, endpoint, options) ⇒ <code>object</code>
Returns a redux action with type REGISTER and the given procedure, endpoint, and options

**Kind**: static method of [<code>redux-autobahn:actions</code>](#redux-autobahn_actions)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| procedure | <code>string</code> | The procedure name being registered. |
| endpoint | <code>function</code> | The endpoint function being registered. |
| options | <code>object</code> | An object of options. |

<a name="redux-autobahn_actions.unregister"></a>

### redux-autobahn:actions.unregister(registration) ⇒ <code>object</code>
Returns a redux action with type UNREGISTER and the given registration object

**Kind**: static method of [<code>redux-autobahn:actions</code>](#redux-autobahn_actions)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| registration | <code>object</code> | The registration object. |

<a name="redux-autobahn_actions.call"></a>

### redux-autobahn:actions.call(procedure, args, kwargs, options, resultAction, errorAction, progressAction) ⇒ <code>object</code>
Returns a redux action with type CALL and the given procedure, args, kwargs, and options

**Kind**: static method of [<code>redux-autobahn:actions</code>](#redux-autobahn_actions)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| procedure | <code>string</code> | The procedure name being called. |
| args | <code>Array</code> | An array of arguments. |
| kwargs | <code>object</code> | An object of keyword arguments. |
| options | <code>object</code> | An object of options. |
| resultAction | <code>function</code> | (optional) An action to be dispatched on call success. |
| errorAction | <code>function</code> | (optional) An action to be dispatched on call error. |
| progressAction | <code>function</code> | (optional) An action to be dispatched on call progress. |

<a name="redux-autobahn_middleware"></a>

## redux-autobahn:middleware : <code>object</code>
**Kind**: global namespace  

* [redux-autobahn:middleware](#redux-autobahn_middleware) : <code>object</code>
    * [.connected()](#redux-autobahn_middleware.connected) ⇒ <code>object</code>
    * [.disconnected()](#redux-autobahn_middleware.disconnected) ⇒ <code>object</code>
    * [.connectionOpened(connection)](#redux-autobahn_middleware.connectionOpened) ⇒ <code>object</code>
    * [.connectionClosed(reason, details)](#redux-autobahn_middleware.connectionClosed) ⇒ <code>object</code>
    * [.subscribed(subscription)](#redux-autobahn_middleware.subscribed) ⇒ <code>object</code>
    * [.subscribeError(error)](#redux-autobahn_middleware.subscribeError) ⇒ <code>object</code>
    * [.unsubscribed(subscription)](#redux-autobahn_middleware.unsubscribed) ⇒ <code>object</code>
    * [.unsubscribeError(error)](#redux-autobahn_middleware.unsubscribeError) ⇒ <code>object</code>
    * [.published(publication, topic, args, kwargs, options)](#redux-autobahn_middleware.published) ⇒ <code>object</code>
    * [.publishError(error)](#redux-autobahn_middleware.publishError) ⇒ <code>object</code>
    * [.event(topic, args, kwargs, details)](#redux-autobahn_middleware.event) ⇒ <code>object</code>
    * [.registered(registration)](#redux-autobahn_middleware.registered) ⇒ <code>object</code>
    * [.registerError(error)](#redux-autobahn_middleware.registerError) ⇒ <code>object</code>
    * [.unregistered(registration)](#redux-autobahn_middleware.unregistered) ⇒ <code>object</code>
    * [.unregisterError(error)](#redux-autobahn_middleware.unregisterError) ⇒ <code>object</code>
    * [.callError(error)](#redux-autobahn_middleware.callError) ⇒ <code>object</code>
    * [.result(procedure, args, kwargs, results, options)](#redux-autobahn_middleware.result) ⇒ <code>object</code>
    * [.progress(procedure, args, kwargs, results, options)](#redux-autobahn_middleware.progress) ⇒ <code>object</code>
    * [.isConnected(connection)](#redux-autobahn_middleware.isConnected) ⇒ <code>boolean</code>
    * [.getSubscription(action)](#redux-autobahn_middleware.getSubscription) ⇒ <code>object</code>
    * [.handleAction(connection, dispatch, next, action)](#redux-autobahn_middleware.handleAction)
    * [.assert(assertion, message)](#redux-autobahn_middleware.assert)
    * [.setConnection(newConnection)](#redux-autobahn_middleware.setConnection)
    * [.closeConnection(reason, message)](#redux-autobahn_middleware.closeConnection)

<a name="redux-autobahn_middleware.connected"></a>

### redux-autobahn:middleware.connected() ⇒ <code>object</code>
Returns a redux action with type CONNECTED

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  
<a name="redux-autobahn_middleware.disconnected"></a>

### redux-autobahn:middleware.disconnected() ⇒ <code>object</code>
Returns a redux action with type DISCONNECTED

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  
<a name="redux-autobahn_middleware.connectionOpened"></a>

### redux-autobahn:middleware.connectionOpened(connection) ⇒ <code>object</code>
Returns a redux action with type CONNECTION_OPENED and the given session object

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| connection | <code>object</code> | The object for the opened connection. |

<a name="redux-autobahn_middleware.connectionClosed"></a>

### redux-autobahn:middleware.connectionClosed(reason, details) ⇒ <code>object</code>
Returns a redux action with type CONNECTION_CLOSED

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | reason for disconnection |
| details | <code>object</code> | disconnect details |

<a name="redux-autobahn_middleware.subscribed"></a>

### redux-autobahn:middleware.subscribed(subscription) ⇒ <code>object</code>
Returns a redux action with type SUBSCRIBED and the given subscription object and it's topic

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| subscription | <code>object</code> | The subscription object for the topic that was subscribed to. |

<a name="redux-autobahn_middleware.subscribeError"></a>

### redux-autobahn:middleware.subscribeError(error) ⇒ <code>object</code>
Returns a redux action with type SUBSCRIBE_ERROR and the given subscription error object

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>object</code> | The error that occurred while subscribing. |

<a name="redux-autobahn_middleware.unsubscribed"></a>

### redux-autobahn:middleware.unsubscribed(subscription) ⇒ <code>object</code>
Returns a redux action with type UNSUBSCRIBED and the given subscription object and it's topic

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| subscription | <code>object</code> | The subscription object for the topic that was unsubscribed from. |

<a name="redux-autobahn_middleware.unsubscribeError"></a>

### redux-autobahn:middleware.unsubscribeError(error) ⇒ <code>object</code>
Returns a redux action with type UNSUBSCRIBE_ERROR and the given unsubscription error object

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>object</code> | The error that occurred while unsubscribing. |

<a name="redux-autobahn_middleware.published"></a>

### redux-autobahn:middleware.published(publication, topic, args, kwargs, options) ⇒ <code>object</code>
Returns a redux action with type PUBLISHED
 and the given publication, topic, args, kwargs, and options

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| publication | <code>string</code> | The publication being published to. |
| topic | <code>string</code> | The topic being published to. |
| args | <code>Array</code> | An array of arguments. |
| kwargs | <code>object</code> | An object of keyword arguments. |
| options | <code>object</code> | An object of options. |

<a name="redux-autobahn_middleware.publishError"></a>

### redux-autobahn:middleware.publishError(error) ⇒ <code>object</code>
Returns a redux action with type PUBLISH_ERROR and the given publish error object

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>object</code> | The error that occurred while publishing. |

<a name="redux-autobahn_middleware.event"></a>

### redux-autobahn:middleware.event(topic, args, kwargs, details) ⇒ <code>object</code>
Returns a redux action with type EVENT and the given topic, args, kwargs, and details

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| topic | <code>string</code> | The topic being published to. |
| args | <code>Array</code> | An array of arguments. |
| kwargs | <code>object</code> | An object of keyword arguments. |
| details | <code>object</code> | An object of event details. |

<a name="redux-autobahn_middleware.registered"></a>

### redux-autobahn:middleware.registered(registration) ⇒ <code>object</code>
Returns a redux action with type REGISTERED and the given registration object

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| registration | <code>object</code> | The registration object being registered to. |

<a name="redux-autobahn_middleware.registerError"></a>

### redux-autobahn:middleware.registerError(error) ⇒ <code>object</code>
Returns a redux action with type REGISTER_ERROR and the given register error object

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>object</code> | The error that occurred while registering. |

<a name="redux-autobahn_middleware.unregistered"></a>

### redux-autobahn:middleware.unregistered(registration) ⇒ <code>object</code>
Returns a redux action with type UNREGISTERED and the given registration object

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| registration | <code>object</code> | The registration object being unregistered from. |

<a name="redux-autobahn_middleware.unregisterError"></a>

### redux-autobahn:middleware.unregisterError(error) ⇒ <code>object</code>
Returns a redux action with type UNREGISTER_ERROR and the given unregister error object

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>object</code> | The error that occurred while unregistering. |

<a name="redux-autobahn_middleware.callError"></a>

### redux-autobahn:middleware.callError(error) ⇒ <code>object</code>
Returns a redux action with type CALL_ERROR and the given call error object

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>object</code> | The error that occurred while calling. |

<a name="redux-autobahn_middleware.result"></a>

### redux-autobahn:middleware.result(procedure, args, kwargs, results, options) ⇒ <code>object</code>
Returns a redux action with type RESULT and the given result value

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| procedure | <code>object</code> | Procedure that was called |
| args | <code>object</code> | Arguments with which procedure was called |
| kwargs | <code>object</code> | Arguments with which procedure was called |
| results | <code>object</code> | Call results |
| options | <code>object</code> | Options |

<a name="redux-autobahn_middleware.progress"></a>

### redux-autobahn:middleware.progress(procedure, args, kwargs, results, options) ⇒ <code>object</code>
Returns a redux action with type PROGRESS and the given progress value
Depends on {receive_progress:true} passed as option to CALL action.

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - redux action  

| Param | Type | Description |
| --- | --- | --- |
| procedure | <code>object</code> | Procedure that was called |
| args | <code>object</code> | Arguments with which procedure was called |
| kwargs | <code>object</code> | Arguments with which procedure was called |
| results | <code>object</code> | Call progress results |
| options | <code>object</code> | Options |

<a name="redux-autobahn_middleware.isConnected"></a>

### redux-autobahn:middleware.isConnected(connection) ⇒ <code>boolean</code>
Returns a boolean that represents if the session for the connection exists and is open, therefore it is connected

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>boolean</code> - returns true if the session for the connection exists and is open  

| Param | Type | Description |
| --- | --- | --- |
| connection | <code>object</code> | the connection object |

<a name="redux-autobahn_middleware.getSubscription"></a>

### redux-autobahn:middleware.getSubscription(action) ⇒ <code>object</code>
Returns the subscription from the action

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Returns**: <code>object</code> - the subscription on the action  

| Param | Type | Description |
| --- | --- | --- |
| action | <code>object</code> | the redux action |

<a name="redux-autobahn_middleware.handleAction"></a>

### redux-autobahn:middleware.handleAction(connection, dispatch, next, action)
Dispatches actions based on action types

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  

| Param | Type | Description |
| --- | --- | --- |
| connection | <code>object</code> | the connection object |
| dispatch | <code>function</code> | the dispatch function |
| next | <code>function</code> | the next function |
| action | <code>object</code> | the redux action |

<a name="redux-autobahn_middleware.assert"></a>

### redux-autobahn:middleware.assert(assertion, message)
Throws an error if the assertion is falsy

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  
**Throws**:

- <code>Error</code> throws an error with the given message if the assertion is falsy


| Param | Type | Description |
| --- | --- | --- |
| assertion | <code>object</code> | the assertion expression |
| message | <code>object</code> | the assertion message |

<a name="redux-autobahn_middleware.setConnection"></a>

### redux-autobahn:middleware.setConnection(newConnection)
Sets the passed connection for the middleware that dispatches opened and closed connection actions and handles actions

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  

| Param | Type | Description |
| --- | --- | --- |
| newConnection | <code>Connection</code> | the connection object |

<a name="redux-autobahn_middleware.closeConnection"></a>

### redux-autobahn:middleware.closeConnection(reason, message)
Closes the current autobahn connection

**Kind**: static method of [<code>redux-autobahn:middleware</code>](#redux-autobahn_middleware)  

| Param | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | (optional) a WAMP URI providing a closing reason to the server side (e.g. 'com.myapp.close.signout'). default is `wamp.goodbye.normal` |
| message | <code>string</code> | human-readable closing message |

<a name="redux-autobahn_reducer"></a>

## redux-autobahn:reducer : <code>object</code>
**Kind**: global namespace  

* [redux-autobahn:reducer](#redux-autobahn_reducer) : <code>object</code>
    * [.connection(state, action)](#redux-autobahn_reducer.connection) ⇒ <code>object</code>
    * [.session(state, action)](#redux-autobahn_reducer.session) ⇒ <code>object</code>
    * [.subscriptions(state, action)](#redux-autobahn_reducer.subscriptions) ⇒ <code>object</code>
    * [.registrations(state, action)](#redux-autobahn_reducer.registrations) ⇒ <code>object</code>

<a name="redux-autobahn_reducer.connection"></a>

### redux-autobahn:reducer.connection(state, action) ⇒ <code>object</code>
**Kind**: static method of [<code>redux-autobahn:reducer</code>](#redux-autobahn_reducer)  
**Returns**: <code>object</code> - the new state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>object</code> | the state |
| action | <code>object</code> | redux action |

<a name="redux-autobahn_reducer.session"></a>

### redux-autobahn:reducer.session(state, action) ⇒ <code>object</code>
**Kind**: static method of [<code>redux-autobahn:reducer</code>](#redux-autobahn_reducer)  
**Returns**: <code>object</code> - the new state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>object</code> | the state |
| action | <code>object</code> | redux action |

<a name="redux-autobahn_reducer.subscriptions"></a>

### redux-autobahn:reducer.subscriptions(state, action) ⇒ <code>object</code>
**Kind**: static method of [<code>redux-autobahn:reducer</code>](#redux-autobahn_reducer)  
**Returns**: <code>object</code> - the new state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>object</code> | the state |
| action | <code>object</code> | redux action |

<a name="redux-autobahn_reducer.registrations"></a>

### redux-autobahn:reducer.registrations(state, action) ⇒ <code>object</code>
**Kind**: static method of [<code>redux-autobahn:reducer</code>](#redux-autobahn_reducer)  
**Returns**: <code>object</code> - the new state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>object</code> | the state |
| action | <code>object</code> | redux action |

<a name="redux-autobahn_types"></a>

## redux-autobahn:types : <code>object</code>
**Kind**: global namespace  

* [redux-autobahn:types](#redux-autobahn_types) : <code>object</code>
    * [.CONNECTED](#redux-autobahn_types.CONNECTED) : <code>string</code>
    * [.DISCONNECTED](#redux-autobahn_types.DISCONNECTED) : <code>string</code>
    * [.OPEN_CONNECTION](#redux-autobahn_types.OPEN_CONNECTION) : <code>string</code>
    * [.CLOSE_CONNECTION](#redux-autobahn_types.CLOSE_CONNECTION) : <code>string</code>
    * [.CONNECTION_OPENED](#redux-autobahn_types.CONNECTION_OPENED) : <code>string</code>
    * [.CONNECTION_CLOSED](#redux-autobahn_types.CONNECTION_CLOSED) : <code>string</code>
    * [.SUBSCRIBE](#redux-autobahn_types.SUBSCRIBE) : <code>string</code>
    * [.SUBSCRIBED](#redux-autobahn_types.SUBSCRIBED) : <code>string</code>
    * [.SUBSCRIBE_ERROR](#redux-autobahn_types.SUBSCRIBE_ERROR) : <code>string</code>
    * [.UNSUBSCRIBE](#redux-autobahn_types.UNSUBSCRIBE) : <code>string</code>
    * [.UNSUBSCRIBED](#redux-autobahn_types.UNSUBSCRIBED) : <code>string</code>
    * [.UNSUBSCRIBE_ERROR](#redux-autobahn_types.UNSUBSCRIBE_ERROR) : <code>string</code>
    * [.PUBLISH](#redux-autobahn_types.PUBLISH) : <code>string</code>
    * [.PUBLISHED](#redux-autobahn_types.PUBLISHED) : <code>string</code>
    * [.PUBLISH_ERROR](#redux-autobahn_types.PUBLISH_ERROR) : <code>string</code>
    * [.EVENT](#redux-autobahn_types.EVENT) : <code>string</code>
    * [.REGISTER](#redux-autobahn_types.REGISTER) : <code>string</code>
    * [.REGISTERED](#redux-autobahn_types.REGISTERED) : <code>string</code>
    * [.REGISTER_ERROR](#redux-autobahn_types.REGISTER_ERROR) : <code>string</code>
    * [.UNREGISTER](#redux-autobahn_types.UNREGISTER) : <code>string</code>
    * [.UNREGISTERED](#redux-autobahn_types.UNREGISTERED) : <code>string</code>
    * [.UNREGISTER_ERROR](#redux-autobahn_types.UNREGISTER_ERROR) : <code>string</code>
    * [.CALL](#redux-autobahn_types.CALL) : <code>string</code>
    * [.CALL_ERROR](#redux-autobahn_types.CALL_ERROR) : <code>string</code>
    * [.RESULT](#redux-autobahn_types.RESULT) : <code>string</code>
    * [.PROGRESS](#redux-autobahn_types.PROGRESS) : <code>string</code>

<a name="redux-autobahn_types.CONNECTED"></a>

### redux-autobahn:types.CONNECTED : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.DISCONNECTED"></a>

### redux-autobahn:types.DISCONNECTED : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.OPEN_CONNECTION"></a>

### redux-autobahn:types.OPEN_CONNECTION : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.CLOSE_CONNECTION"></a>

### redux-autobahn:types.CLOSE_CONNECTION : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.CONNECTION_OPENED"></a>

### redux-autobahn:types.CONNECTION_OPENED : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.CONNECTION_CLOSED"></a>

### redux-autobahn:types.CONNECTION_CLOSED : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.SUBSCRIBE"></a>

### redux-autobahn:types.SUBSCRIBE : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.SUBSCRIBED"></a>

### redux-autobahn:types.SUBSCRIBED : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.SUBSCRIBE_ERROR"></a>

### redux-autobahn:types.SUBSCRIBE_ERROR : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.UNSUBSCRIBE"></a>

### redux-autobahn:types.UNSUBSCRIBE : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.UNSUBSCRIBED"></a>

### redux-autobahn:types.UNSUBSCRIBED : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.UNSUBSCRIBE_ERROR"></a>

### redux-autobahn:types.UNSUBSCRIBE_ERROR : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.PUBLISH"></a>

### redux-autobahn:types.PUBLISH : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.PUBLISHED"></a>

### redux-autobahn:types.PUBLISHED : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.PUBLISH_ERROR"></a>

### redux-autobahn:types.PUBLISH_ERROR : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.EVENT"></a>

### redux-autobahn:types.EVENT : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.REGISTER"></a>

### redux-autobahn:types.REGISTER : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.REGISTERED"></a>

### redux-autobahn:types.REGISTERED : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.REGISTER_ERROR"></a>

### redux-autobahn:types.REGISTER_ERROR : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.UNREGISTER"></a>

### redux-autobahn:types.UNREGISTER : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.UNREGISTERED"></a>

### redux-autobahn:types.UNREGISTERED : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.UNREGISTER_ERROR"></a>

### redux-autobahn:types.UNREGISTER_ERROR : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.CALL"></a>

### redux-autobahn:types.CALL : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.CALL_ERROR"></a>

### redux-autobahn:types.CALL_ERROR : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.RESULT"></a>

### redux-autobahn:types.RESULT : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
<a name="redux-autobahn_types.PROGRESS"></a>

### redux-autobahn:types.PROGRESS : <code>string</code>
**Kind**: static constant of [<code>redux-autobahn:types</code>](#redux-autobahn_types)  
