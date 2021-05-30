# 드림코딩 엘리의 노드로 배우는 백엔드A-Z _(express, DB, Twitter clone coding)_

<br>
<br>

## 1-global

- 자바스크립트에서 브라우저의 글로벌 객체인 window처럼 nodejs는 글로벌 객체가 global

<br>

## 2-console

- console.log, console.table, console.error... 등
- time, timeEnd: 코드가 실행되는데 걸린 시간 체크
  
<br>

## 3-this

- node에서는 함수에서의 this는 global
- 전역범위에서 this는 module.exports를 가리킨다
  
<br>

## 4/5-module

- JavaScript는 import, export
- node는 require, module.exports
- module을 console.log로 출력해보면 
  exports, paths, filename등의 정보를 얻을 수 있다

<br>

## 6-os

- 운영체제 정보
- `const os = require('os');`

```javascript
// os 정의 부분
function hostname(): string;
function loadavg(): number[];
function uptime(): number;
function freemem(): number;
function totalmem(): number;
function cpus(): CpuInfo[];
function type(): string;
function release(): string;
function networkInterfaces(): NodeJS.Dict<NetworkInterfaceInfo[]>;
function homedir(): string;
function userInfo(options: { encoding: 'buffer' }): UserInfo<Buffer>;
function userInfo(options?: { encoding: BufferEncoding }): UserInfo<string>;
```

<br>

## 7-process

- `const process = require('process');`
- 환경변수를 포함한 다양한 프로세스들의 정보를 확인할 수 있다
- `nextTick(callback: Function, ...args: any[]): void;`
  - 태스크큐에 이미 다른 콜백함수가 있어도 순서를 무시하고, 우선순위를 높여서 태스크큐 제일 앞부분에 넣어준다

<br>

## 9-path

- nodeJS는 컴퓨터 위에서 동작하기 때문에 file system에 접근하기가 좋다
- 경로에 관한 정보가 있는 모듈

<br>

## 10-file

- 모든 api는 3가지 형태로 제공된다.
- `rename(..., callback(error, data))`
  - 필요한 일들을 한 다음에 등록한 콜백함수를 호출
- `try { renameSync(...) } catch(e) { }`
  - 동기적, 블러킹, 따로 콜백함수 전달하지 않음, 끝날때 까지 다음줄로 넘어가지 않는다
  따로 에러를 전달하지 않으므로 어플리케이션을 죽이면 안되기 때문에 try catch로 감쌈
- `promises.rename().then().catch(0)`
  - 프로미스형태로 제공


```javascript
// rename 정의 부분
export function rename(oldPath: PathLike, newPath: PathLike, callback: NoParamCallback): void;

export type NoParamCallback = (err: NodeJS.ErrnoException | null) => void;
```

```javascript
// readFile 정의 부분
function readFile(
  path: PathLike | FileHandle,
  options: { encoding: BufferEncoding, flag ?: OpenMode } | BufferEncoding
): Promise < string >;
```

- 옵션에 인코딩에 대해 전달할 수 있고, flag는 파일을 열때 어떤모드로 열껀지 읽기or쓰기

<br>

## 11-buffer, 12-stream

- `buffer`란 일종의 고정된 사이즈의 메모리 덩어리

사용자가 동영상을 다 다운로드 받을 때 까지 기다렸다가 <br>
동영상을 보게되면 번거롭고 오랜시간 걸리게 되는데,<br>
서버에서 동영상을 **잘게 나누어진 데이터**를 <br>
조금씩 전송해 주는 것이 **`Streaming`** 이라고 한다<br>
이것을 `Progressive Download`라고 한다.

사용자가 동영상을 보는 속도보다 `streaming`하는 속도가 더 빠르다면,<br>
**버퍼**을 이용해서 **조금씩 버퍼를 채워**둘 수 있다<br>
반대로, `streaming`하는 속도보다 보는속도가 더 빠르다면<br>
충분히 싸여있는 버퍼가 없기때문에 멈추는데 이를 버퍼링이라고 한다

정말 큰 사이즈의 파일을 다 읽는다면,<br>
그 파일의 데이터를 메모리에 다 가져오는데,<br>
이때 **메모리**보다 **파일 사이즈**가 크다면 안되겠쥬?<br>
이럴때 데이터를 잘게 나눈 버퍼들을 `Streaming`해서 <br>
조금조금씩 데이터들을 메모리로 가져오면 된다

버퍼링 스트림은 메모리와 시간이 효율적이다<br>
파일을 다 읽을때 까지 기다리는 것이 아니라 조금조금씩 읽으면서<br>
사용자에게 조금씩 보내줄 수 있기 때문이다

```javascript
// toString 정의 부분
toString(encoding?: BufferEncoding, start?: number, end?: number): string;

type BufferEncoding =
| 'ascii'
| 'utf8'
| 'utf-8'
| 'utf16le'
| 'ucs2'
| 'ucs-2'
| 'base64'
| 'latin1'
| 'binary'
| 'hex';
```

- `toString`은 인코딩 형태를 옵션으로 줄수 있고, 기본형태는 `utf8` 이기 때문에 전달하지 않아도 된다.

<br>


```javascript
// createReadStream 정의부분
export function createReadStream(path: PathLike, options?: string | {
  flags?: string;
  encoding?: BufferEncoding;
  fd?: number;
  mode?: number;
  autoClose?: boolean;
  /**
   * @default false
   */
  emitClose?: boolean;
  start?: number;
  end?: number;
  highWaterMark?: number; // 한번에 얼마나 많은 데이터를 가져올 수 있는지 정함
}): ReadStream; // 호출하면 ReadStream이 반환됨
```

```javascript
// ReadStream 정의부분
  export class ReadStream extends stream.Readable {
    close(): void;
    bytesRead: number;
    path: string | Buffer;
    pending: boolean;

    // events.EventEmitter
    //  1. open
    //  2. close
    //  3. ready

    addListener(event: "close", listener: () => void): this;
    addListener(event: "data", listener: (chunk: Buffer | string) => void): this;
    addListener(event: "end", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: "open", listener: (fd: number) => void): this;
    addListener(event: "pause", listener: () => void): this;
    addListener(event: "readable", listener: () => void): this;
    addListener(event: "ready", listener: () => void): this;
    addListener(event: "resume", listener: () => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    on(event: "close", listener: () => void): this;
    on(event: "data", listener: (chunk: Buffer | string) => void): this;
    on(event: "end", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "open", listener: (fd: number) => void): this;
    on(event: "pause", listener: () => void): this;
    on(event: "readable", listener: () => void): this;
    on(event: "ready", listener: () => void): this;
    on(event: "resume", listener: () => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    once(event: "close", listener: () => void): this;
    once(event: "data", listener: (chunk: Buffer | string) => void): this;
    once(event: "end", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: "open", listener: (fd: number) => void): this;
    once(event: "pause", listener: () => void): this;
    once(event: "readable", listener: () => void): this;
    once(event: "ready", listener: () => void): this;
    once(event: "resume", listener: () => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;

    prependListener(event: "close", listener: () => void): this;
    prependListener(event: "data", listener: (chunk: Buffer | string) => void): this;
    prependListener(event: "end", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: "open", listener: (fd: number) => void): this;
    prependListener(event: "pause", listener: () => void): this;
    prependListener(event: "readable", listener: () => void): this;
    prependListener(event: "ready", listener: () => void): this;
    prependListener(event: "resume", listener: () => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

    prependOnceListener(event: "close", listener: () => void): this;
    prependOnceListener(event: "data", listener: (chunk: Buffer | string) => void): this;
    prependOnceListener(event: "end", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: "open", listener: (fd: number) => void): this;
    prependOnceListener(event: "pause", listener: () => void): this;
    prependOnceListener(event: "readable", listener: () => void): this;
    prependOnceListener(event: "ready", listener: () => void): this;
    prependOnceListener(event: "resume", listener: () => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
  }
```

- stream을 이용하면 조금씩 버퍼별로 읽고 쓰고 반복하여 순차적으로 처리할 수 있다.
- 체이닝이 가능한 이유는 각각 `this`를 리턴하기 때문

<br>

## 13-event

- `const EventEmitter = require('events');`
- `EventEmitter`는 `nodejs` 자체적으로도 사용이 가능하며
- 직접 `EventEmitter`를 만들어서 `event`에 관심있는 콜백함수를 등록해놓고 특정한 `event`를 발생 할 수도 있다
- `event` 이름과 전달하고자 하는 데이터를 명시해주면, 콜백함수에서 데이터에 접근할 수 있다
- `EventEmitter`는 한번 객체를 생성하면 그 객체내에서 발생하는 이벤트에 한해서 들을 수 있다
- 여러가지 `EventEmitter` 객체를 만들면 다른 `EventEmitter`에서 발생하는 이벤트는 다른 `EventEmitter`에서 들을 수 없다