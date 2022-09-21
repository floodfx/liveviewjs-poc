---
sidebar_position: 1
---

# LiveViewSocket API

The `LiveViewSocket` API is the second most important API (behind the LiveView API itself).  As you've seen, the `LiveViewSocket` is passed into (as the `socket` param) just about all of the LiveView API methods (excluding `render`).  So far we've mainly used it to update the context of the LiveView.  But there is a lot more to `LiveViewSocket` and in this section we'll review the full API.

## LiveViewSocket Properties and Methods
| Name | Description |
|---|---|
| `id` (property, read-only) | The (random) id of the LiveView |
| `connected` (property, read-only) | Whether the websocket is connected. `true` if connected to a websocket, `false` for http request |
| `context` (property, read-only) | The current context (i.e. state) of the LiveView |
| `assign(context:Partial<TContext>):void;` | Update the context (i.e. state) of the LiveView |
| `tempAssign(context:Partial<TContext>):void;` | Marks any set properties as temporary and will be reset to the given value after the next render cycle. Typically used to ensure large but infrequently updated values are not kept in memory. |
| `pageTitle(newPageTitle:string):void;` | Updates the `<title>` tag of the LiveView.  Requires using the `live_title` helper in rendering the page. |
| `putFlash(key: string, value: string): Promise<void>;` | Add flash message to the socket for a given key and value. |
| `pushEvent(pushEvent: AnyLivePushEvent): void;` | Pushes an event from the server to the client.  Requires a client `Hook` to be defined and to be listening for the event via `this.handleEvent` callback. |
| `pushPatch(path: string, params?: URLSearchParams, replaceHistory?: boolean): Promise<void>;` | Updates the LiveView's browser URL with the given path and query parameters. |
| `pushRedirect(path: string, params?: URLSearchParams, replaceHistory?: boolean): Promise<void>;` | Shutdowns the current LiveView and loads another LiveView in its place without reloading the whole page (i.e. making a full HTTP request).  Can be used to remount the current LiveView if need be. Use `pushPatch` to update the current LiveView without unloading and remounting. |
| `sendInfo(info: Info<TInfos>): void;` | Send an internal event (a.k.a "Info") to the LiveView's `handleInfo` method |
| `subscribe(topic: string): Promise<void>;` | Subscribe to the given topic using pub/sub. Events published to this topic will be delivered to `handleInfo`. |
| `repeat(fn: () => void, intervalMillis: number): void;` | Runs the given function on the given interval until this LiveView is unloaded. |
| `allowUpload(name: string, options?: UploadConfigOptions): Promise<void>;` | Allows file uploads for the given LiveView and configures the upload options (filetypes, size, etc). |
| `cancelUpload(configName: string, ref: string): Promise<void>;` | Cancels the file upload for a given UploadConfig by config name and file ref. |
| `consumeUploadedEntries<T>(configName: string,fn: (meta: ConsumeUploadedEntriesMeta, entry: UploadEntry) => Promise<T>):Promise<T[]>;` | Consume the uploaded files for a given UploadConfig (by name). This should only be called after the form's "save" event has occurred which guarantees all the files for the upload have been fully uploaded. |
| `uploadedEntries(configName: string): Promise<{completed: UploadEntry[];inProgress: UploadEntry[];}>;` | Returns two sets of files that are being uploaded, those `completed` and those `inProgress` for a given UploadConfig (by name).  Unlike `consumeUploadedEntries`, this does not require the form's "save" event to have occurred and will not throw if any of the entries are not fully uploaded. |


## Related Parts of the API
We'll look at related parts of the `LiveViewSocket` API over the next few sections:
 * Reading and Writing the Context
 * Pushing Updates to the Client
 * Server Events / Pub/Sub
 * File Uploads
 * Everything Else