// COPIED from https://github.com/Janpot/escape-html-template-tag/blob/master/src/index.ts
// This is a modified version of escape-html-template-tag that builds a tree
// of statics and dynamics that can be used to render the template.
//

const ENTITIES: {
  [key: string]: string
} = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
}

const inspect = Symbol.for('nodejs.util.inspect.custom');

const ENT_REGEX = new RegExp(Object.keys(ENTITIES).join('|'), 'g')

export function join(array: (string | HtmlSafeString)[], separator: string | HtmlSafeString) {
  if (separator === undefined || separator === null) {
    separator = ','
  }
  if (array.length <= 0) {
    return new HtmlSafeString([''], [])
  }
  return new HtmlSafeString(['', ...Array(array.length - 1).fill(separator), ''], array)
}

export function safe(value: unknown) {
  return new HtmlSafeString([String(value)], [])
}

function escapehtml(unsafe: unknown): string {
  if (unsafe instanceof HtmlSafeString) {
    return unsafe.toString()
  }
  if (Array.isArray(unsafe)) {
    return join(unsafe, '').toString()
  }
  return String(unsafe).replace(ENT_REGEX, (char) => ENTITIES[char])
}

export class HtmlSafeString {
  readonly statics: readonly string[]
  readonly _dynamics: readonly unknown[]
  readonly children: readonly HtmlSafeString[]

  constructor(statics: readonly string[], dynamics: readonly unknown[]) {
    this.statics = statics
    this._dynamics = dynamics
  }

  get dynamics(): readonly string[] {
    return this._dynamics.map((d) => {
      if (d instanceof HtmlSafeString) {
        return d.toString()
      }

      if (Array.isArray(d)) {
        return join(d, '').toString()
      }
      return String(d)
    })
  }

  toString(): string {
    return this.statics.reduce((result, s, i) => {
      const d = this._dynamics[i - 1]
      return result + escapehtml(d) + s
    })
  }

  [inspect]() {
    return `HtmlSafeString '${this.toString()}'`
  }
}

export default function escapeHtml(statics: TemplateStringsArray, ...dynamics: unknown[]) {
  return new HtmlSafeString(statics, dynamics)
}