[![view on npm](https://img.shields.io/npm/v/uttori-event-dispatcher.svg)](https://www.npmjs.org/package/uttori-event-dispatcher)
[![npm module downloads](https://img.shields.io/npm/dt/uttori-event-dispatcher.svg)](https://www.npmjs.org/package/uttori-event-dispatcher)
[![Build Status](https://travis-ci.org/uttori/uttori-event-dispatcher.svg?branch=master)](https://travis-ci.org/uttori/uttori-event-dispatcher)
[![Dependency Status](https://david-dm.org/uttori/uttori-event-dispatcher.svg)](https://david-dm.org/uttori/uttori-event-dispatcher)
[![Coverage Status](https://coveralls.io/repos/github/uttori/uttori-event-dispatcher/badge.svg?branch=master)](https://coveralls.io/github/uttori/uttori-event-dispatcher?branch=master)

# Uttori Event Dispatcher

An event bus system for registering, unregistering and triggering events.

## Install

```bash
npm install --save @uttori/event-dispatcher
```

* * *

# Example

```js
const hooks = new EventDispatcher();
hooks.on('update', callback);
hooks.dispatch('update', { data }, this);
hooks.off('update', callback);
```

# API Reference

<a name="EventDispatcher"></a>

## EventDispatcher
An event bus system for registering, unregistering and triggering events.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| events | <code>object</code> | The collection of events to listen for. |


* [EventDispatcher](#EventDispatcher)
    * [new EventDispatcher()](#new_EventDispatcher_new)
    * _instance_
        * [.validate(label, data, [context])](#EventDispatcher+validate) ⇒ <code>Promise</code>
        * [.filter(label, data, [context])](#EventDispatcher+filter) ⇒ <code>\*</code>
        * [.dispatch(label, data, [context])](#EventDispatcher+dispatch)
        * [.fetch(label, data, [context])](#EventDispatcher+fetch) ⇒ <code>Promise.&lt;Array&gt;</code>
        * [.on(label, callback)](#EventDispatcher+on)
        * [.once(label, callback)](#EventDispatcher+once)
        * [.off(label, callback)](#EventDispatcher+off)
    * _static_
        * [.check(label)](#EventDispatcher.check)

<a name="new_EventDispatcher_new"></a>

### new EventDispatcher()
Creates a new EventDispatcher instance.

**Example** *(new EventDispatcher())*  
```js
const bus = new EventDispatcher();
bus.on('update', callback);
bus.dispatch('update', { data }, { context });
bus.off('update', callback);
```
<a name="EventDispatcher+validate"></a>

### eventDispatcher.validate(label, data, [context]) ⇒ <code>Promise</code>
Fires off an event with passed in data and context for a given label.

**Kind**: instance method of [<code>EventDispatcher</code>](#EventDispatcher)  
**Returns**: <code>Promise</code> - - The conclusion of the spam checks, true being it is spam, false meaning it is clean.  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | The human readable identifier of the event. |
| data | <code>\*</code> | Data to be used, updated, or modified by event callbacks. |
| [context] | <code>object</code> | Context to help with updating or modification of the data. |

**Example**  
```js
is_spam = await bus.validate('check-for-spam', { data }, this);
```
<a name="EventDispatcher+filter"></a>

### eventDispatcher.filter(label, data, [context]) ⇒ <code>\*</code>
Fires off an event with passed in data and context for a given label.

**Kind**: instance method of [<code>EventDispatcher</code>](#EventDispatcher)  
**Returns**: <code>\*</code> - - The original input data, either modified or untouched.  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | The human readable identifier of the event. |
| data | <code>\*</code> | Data to be used, updated, or modified by event callbacks. |
| [context] | <code>object</code> | Context to help with updating or modification of the data. |

**Example**  
```js
output = await bus.filter('loaded', { data }, this);
```
<a name="EventDispatcher+dispatch"></a>

### eventDispatcher.dispatch(label, data, [context])
Fires off an event with passed in data and context for a given label.

**Kind**: instance method of [<code>EventDispatcher</code>](#EventDispatcher)  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | The human readable identifier of the event. |
| data | <code>\*</code> | Data to be used, updated, or modified by event callbacks. |
| [context] | <code>object</code> | Context to help with updating or modification of the data. |

**Example**  
```js
bus.dispatch('loaded', { data }, this);
```
<a name="EventDispatcher+fetch"></a>

### eventDispatcher.fetch(label, data, [context]) ⇒ <code>Promise.&lt;Array&gt;</code>
Fires off an event with passed in data and context for a given label and returns an array of the results.

**Kind**: instance method of [<code>EventDispatcher</code>](#EventDispatcher)  
**Returns**: <code>Promise.&lt;Array&gt;</code> - - An array of the results.  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | The human readable identifier of the event. |
| data | <code>\*</code> | Data to be used by event callbacks. |
| [context] | <code>object</code> | Context to help with updating or modification of the data. |

**Example**  
```js
popular = await bus.fetch('popular-documents', { limit: 10 }, this);
```
<a name="EventDispatcher+on"></a>

### eventDispatcher.on(label, callback)
Add a function to an event that will be called when the label is dispatched.
If no label is found, one is created.

**Kind**: instance method of [<code>EventDispatcher</code>](#EventDispatcher)  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | The human readable identifier of the event. |
| callback | <code>function</code> | Function to be called when the event is fired. |

**Example**  
```js
bus.on('loaded', callback);
```
<a name="EventDispatcher+once"></a>

### eventDispatcher.once(label, callback)
Add a function to an event that will be called only once when the label is dispatched.
Uses the `EventDispatcher.on` method with a function wrapped to call off on use.

**Kind**: instance method of [<code>EventDispatcher</code>](#EventDispatcher)  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | The human readable identifier of the event. |
| callback | <code>function</code> | Function to be called when the event is fired. |

**Example**  
```js
bus.once('one-time-process', callback);
```
<a name="EventDispatcher+off"></a>

### eventDispatcher.off(label, callback)
Remove a function from an event.

**Kind**: instance method of [<code>EventDispatcher</code>](#EventDispatcher)  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | The human readable identifier of the event. |
| callback | <code>function</code> | Function to be removed. |

**Example**  
```js
bus.off('loaded', callback);
```
<a name="EventDispatcher.check"></a>

### EventDispatcher.check(label)
Verifies an event label.

**Kind**: static method of [<code>EventDispatcher</code>](#EventDispatcher)  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | The human readable identifier of the event. |

**Example**  
```js
EventDispatcher.check('event'); // No Error
EventDispatcher.check(1); // Throws Error
```

* * *

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
npm install
npm test
DEBUG=Uttori* npm test
```

## Contributors

* [Matthew Callis](https://github.com/MatthewCallis)
* [You](https://github.com/YOU)

## License

* [MIT](LICENSE)
