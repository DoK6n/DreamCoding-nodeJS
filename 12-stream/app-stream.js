const fs = require('fs');
// stream을 이용하면 조금씩 버퍼별로 읽고 쓰고 반복하여 순차적으로 처리할 수 있다.

const data = [];
fs.createReadStream('./file.txt', {
  highWaterMark: 8, // default: 64KB
  encoding: 'utf-8',
})
  .once('data', chunk => {
    // console.log(chunk);
    data.push(chunk);
    console.count('data');
  })
  .on('end', () => {
    console.log(data.join(''));
  })
  .on('error', error => {
    console.log(error);
  });

/** createReadStream 정의부분
Returns a new `ReadStream` object.
@param path A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.

  export function createReadStream(path: PathLike, options?: string | {
    flags?: string;
    encoding?: BufferEncoding;
    fd?: number;
    mode?: number;
    autoClose?: boolean;
    
    @default false
    
    emitClose?: boolean;
    start?: number;
    end?: number;
    highWaterMark?: number; -> 한번에 얼마나 많은 데이터를 가져올 수 있는지 정함
  }): ReadStream; 호출하면 ReadStream이 반환됨
*/

/** ReadStream 정의부분
 * export class ReadStream extends stream.Readable {
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
체이닝이 가능한 이유는 각각 this를 리턴하기 때문
 */
