
import escapeHtml, { HtmlSafeString } from './index';

describe("test escapeHtml", () => {
  it("combines statics and dynamics properly", () => {
    const result = escapeHtml`a${1}b${2}c`;
    expect(result.toString()).toBe('a1b2c');
  });

  it("returns components of the template", () => {
    const result = escapeHtml`a${1}b${2}c`;
    expect(result.statics).toEqual(['a', 'b', 'c']);
    expect(result.dynamics).toEqual(["1", "2"]);
  });

  it("returns components of the template with templates", () => {
    const result = escapeHtml`a${1}b${escapeHtml`sub${"sub1"}`}c`;
    expect(result.statics).toEqual(['a', 'b', 'c']);
    expect(result.dynamics).toEqual(["1", "subsub1"]);
  });

  it("can apply different dynamics to a HtmlSafeString", () => {
    const result = escapeHtml`before${"middle"}after`;
    expect(result.toString()).toBe('beforemiddleafter');
    expect(new HtmlSafeString(result.statics, ["diffmid"]).toString()).toBe('beforediffmidafter');
  });

  it("works for if/then controls", () => {
    const template = (show: boolean) => escapeHtml`before${show ? "show" : ""}after`;
    let result = template(true);
    console.log('result', result.dynamics, result.statics);
    expect(result.toString()).toBe('beforeshowafter');
    result = template(false);
    console.log('result', result.dynamics, result.statics);
    expect(result.toString()).toBe('beforeafter');

  });

  it("can join array without commas", () => {
    const stuff = ["a", "b", "c"];
    const result = escapeHtml`${stuff}`;
    expect(result.toString()).toBe('abc');
  });

  it("teplates can have multiple levels", () => {
    const result = escapeHtml`${escapeHtml`<a>${1}${2}${3}</a>`}`;
    expect(result.toString()).toBe('<a>123</a>');
  });
});